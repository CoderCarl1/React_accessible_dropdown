import { FunctionComponent, useContext, useEffect } from "react";
import type { TriggerProps } from "./types";
import { DropdownContext } from "./utils/context";

/**
 * @component
 * @info  OPTIONAL Props
 * @param {React.children} children
 * @param [variant] -  current options: [default]
 * @param [label] -  if added, this will replace any children
 * @param [props] - All props will be added to the button.
 * @example
 * ```html
 * <DropDownTrigger label="foo" variant="default">bar</DropDownTrigger>
 * ```
 * returns =>
 * ```html
 * <button data-variant="default">foo</button>
 * ```
 */

const DropDownTrigger: FunctionComponent<TriggerProps> = ({
  children,
  variant,
  label,
  ...props
}) => {
  const { dropdownStatus, closeMenu, openMenu, triggerRef } =
    useContext(DropdownContext);

  useEffect(() => {
    function handleClick() {
      dropdownStatus ? closeMenu() : openMenu();
    }
    const trigger = triggerRef?.current;
    trigger?.addEventListener("click", handleClick);
    return () => {
      trigger?.removeEventListener("click", handleClick);
    };
  }, [dropdownStatus]);

  return (
    <button
      data-dd-trigger
      ref={triggerRef && triggerRef}
      aria-haspopup="true"
      aria-expanded={dropdownStatus ? "true" : "false"}
      aria-controls="DD-content"
      data-variant={variant}
      {...props}
    >
      {variant === "default" ? (
        <div>
          <span className="sr-only">
            {dropdownStatus ? "Close Menu" : "Open Menu"}
          </span>
          <span className="DD-trigger__text" aria-hidden="true">
            {label ? label : children}
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default DropDownTrigger;
