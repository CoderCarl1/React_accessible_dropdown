import { useRef, useEffect } from "react";

/**
 *
 * @param _cb - a Callback that will be run when the user clicks outside
 * @param [truthyChecks] - any ARGS passed that are false will prevent toggling
 * @returns {React.MutableRefObject<HTMLElement>} domRef
 */

function UseClickOutside<T extends HTMLElement>(
  _cb: Function,
  ...truthyChecks: Boolean[]
) {
  const domRef = useRef<T>(null);

  useEffect(() => {
    if (!truthyChecks.every(Boolean)) {
      return;
    }

    function outsideClickHandler(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (!domRef.current?.contains(target)) {
        _cb();
        return;
      }
    }

    document.addEventListener("mousedown", outsideClickHandler, true);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler, true);
    };
  }, [_cb, truthyChecks]);

  return domRef;
}

export default UseClickOutside;
