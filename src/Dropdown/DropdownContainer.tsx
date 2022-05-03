import Trigger from "./DropdownTrigger";
import type { DropdownType } from "./types";
import Content from "./DropdownContent";
import Item from "./DropdownItem";
import useToggle from "./utils/useToggle";
import UseClickOutside from "./utils/useClickOutside";
import { RefObject, useCallback, useEffect, useRef } from "react";
import "./dropdownStyling.css";
import UseKeyboard from "./utils/useKeyboard";
import { DropdownContext } from "./utils/context";

/**
 * @version 0.1.0
 * @author Carl Davidson -- *external link: [Github](https://github.com/CoderCarl1)*
 * @component
 * @param children
 *
 * @example  ```html
 * <Dropdown>
 *    <Trigger>Menu</Trigger>
 *    <Content>
 *      <Item> Option One </Item>
 *      <Item> Option Two </Item>
 *      <Item> Option Three </Item>
 *    </Content>
 * <Dropdown />
 * ```
 */

const Dropdown: DropdownType = ({ children, ...attributes }) => {
  const { toggle: dropdownStatus, setToggleStatus: setDropdownStatus } =
    useToggle(false);

  useEffect(() => {
    console.log({ dropdownStatus });
  }, [dropdownStatus]);

  const closeMenu = useCallback(() => {
    setDropdownStatus(false);
  }, [setDropdownStatus]);

  const openMenu = useCallback(() => {
    setDropdownStatus(true);
  }, [setDropdownStatus]);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const navRef = UseClickOutside(
    closeMenu,
    dropdownStatus
  ) as RefObject<HTMLDivElement>;
  const optionsRef = UseKeyboard(
    triggerRef,
    closeMenu,
    dropdownStatus
  ) as RefObject<HTMLUListElement>;

  return (
    <DropdownContext.Provider
      value={{ dropdownStatus, closeMenu, openMenu, triggerRef, optionsRef }}
    >
      <div data-dd-wrapper className="" ref={navRef} {...attributes}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Item = Item;
export { Dropdown };
export default Dropdown;
