import React, { useCallback, useEffect, useRef, useState } from "react";
// import UseClickOutside from "./useClickOutside";
import useToggle from "./useToggle";
import { setFocusableElements } from "./helperFunctions";

/**
 *
 * @param triggerRef - A Button or Input that toggles this on/off
 * @param {Function} [callback] - A CB func that will be run when turning kboard off.
 * @param [truthyChecks] - any ARGS passed that are false will prevent toggling
 * @returns {React.MutableRefObject<HTMLUListElement>} domRef
 *
 */

function UseKeyboard<T extends HTMLElement>(
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>,
  callback: Function,
  ...truthyChecks: Boolean[]
) {
  const domRef = useRef<T>(null);

  const { toggle: kboardActive, setToggleStatus: setkboardActive } =
    useToggle();

  const focusables = useRef<HTMLElement[] | null>(null);
  const [focusedEl, setFocusedEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (kboardActive && focusedEl !== null) focusedEl.focus();
  }, [focusedEl, kboardActive]);

  const keyboardOn = () => setkboardActive(true);

  const keyboardOff = () => {
    if (triggerRef?.current === null || triggerRef?.current === undefined) {
      setkboardActive(false);

      return;
    }
    if (kboardActive) {
      triggerRef.current.tabIndex = -1;
      triggerRef.current.focus();
      callback();
      setkboardActive(false);

      setTimeout(
        () =>
          triggerRef.current !== null
            ? (triggerRef.current.tabIndex = 0)
            : null,
        10
      );
    }
    return;
  };

  // Open Nav
  useEffect(() => {
    if (triggerRef.current === null) return;

    function handleNavOpen(event: KeyboardEvent) {
      if (truthyChecks.every(Boolean)) {
        return;
      }
      if (domRef.current === null) return;

      const { code } = event;
      if (code === "ArrowUp" && kboardActive) {
        callback();
        keyboardOff();
        return;
      }

      if (code === "Enter" || code === "Space" || code === "ArrowDown") {
        if (kboardActive) return;
        focusables.current = setFocusableElements(domRef.current);
        if (focusedEl === null) {
          setFocusedEl(focusables.current[0]);
        }
        keyboardOn();
        return;
      }
    }
    // TODO: Add click to the event listener to allow keyboard use when open
    const trigger = triggerRef.current;
    trigger.addEventListener("keydown", handleNavOpen);

    return () => {
      trigger.removeEventListener("keydown", handleNavOpen);
    };
  }, []);

  // outside Click
  useEffect(() => {
    function outsideClickHandler(event: MouseEvent) {
      if (domRef.current === null) return;

      const target = event.target as HTMLElement;
      if (!domRef.current.contains(target)) return;

      callback();
      keyboardOff();
      return;
    }
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [callback]);

  useEffect(() => {
    if (!kboardActive) return;

    if (truthyChecks.every(Boolean)) {
      return;
    }
    if (domRef.current === null) return;

    function moveFocus(direction: "up" | "down") {
      const steps = {
        up: -1,
        down: +1,
      };
      if (focusables.current === null || focusedEl === null) {
        keyboardOff();
        return;
      }

      const currentIndex = focusables.current.findIndex(
        (el) => el === focusedEl
      );

      const maxLength = focusables.current.length - 1;
      if (currentIndex + steps[direction] === maxLength + 1) {
        setFocusedEl(focusables.current[0]);
        return;
      }
      if (currentIndex + steps[direction] < 0) {
        setFocusedEl(focusables.current[maxLength]);
        return;
      }

      setFocusedEl(focusables.current[currentIndex + steps[direction]]);
      return;
    }

    function handleKboardNavigation(event: KeyboardEvent) {
      event.stopPropagation();
      event.preventDefault();
      const { code } = event;
      console.log("this is handleKboardNavigation", code);

      switch (true) {
        case code === "Enter": {
          console.log("ENTER PRESSED");
          break;
          // TODO:
        }
        case code === "Escape": {
          // TODO: check if person has been typing to jump to options
          console.log("Escape PRESSED");
          callback();
          keyboardOff();

          break;
        }
        case code === "Tab":
        case code === "ArrowDown":
        case code === "ArrowRight": {
          /**   TODO: on ArrowRight
           * if has children, if does - move into the new menu
           */
          console.log("moving down", { code });
          moveFocus("down");
          break;
        }
        case event.shiftKey && code === "Tab":
        case code === "ArrowUp":
        case code === "ArrowLeft": {
          /**   TODO: on ArrowLeft:
           * if has parents / this is a submenu, if does - move out of the menu
           */
          console.log("moving up", { code });
          moveFocus("up");
          break;
        }
      }
    }
    const node = domRef.current;

    node.addEventListener("keydown", handleKboardNavigation);
    return () => node.removeEventListener("keydown", handleKboardNavigation);
  }, [kboardActive, focusedEl]);

  useEffect(() => {
    console.warn(triggerRef);
  }, [triggerRef]);

  return domRef;
}

export default UseKeyboard;
