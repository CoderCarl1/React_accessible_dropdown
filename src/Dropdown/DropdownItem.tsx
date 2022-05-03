import { FunctionComponent } from "react";
import type { ItemProps } from "./types";

/**
 * Returns a list item with the children rendered inside
 * @component
 * @param ...props - All props added to the Item will be added to the list item
 * @example
 * <Accordion.Item className="example" style={{color: "red"}}>
 *   Hello World
 * </Accordion.Item>
 * -----------------------------------------------------------
 * <li className="example" style={{color: "red"}}>
 *   Hello World
 * </li>
 */

const DropdownItem: FunctionComponent<ItemProps> = ({
  children,
  ...attributes
}) => {
  /**
   * TODO: remove LI
   * ADD
   *  -> react.cloneElement to add attributes to the item
   *    1: role="menuitemradio"
   *    2: data-dd-item
   *  -> Add event listener on click to add checked status to it: This will be done inside keyboard
   *
   * */

  return (
    <li role="menuitem" data-dd-item {...attributes}>
      {children}
    </li>
  );
};

export default DropdownItem;
