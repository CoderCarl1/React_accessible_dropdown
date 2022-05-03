import { FunctionComponent, useContext } from "react";
import type { ContentProps } from "./types";
import { DropdownContext } from "./utils/context";

/**
 * @component
 * @param {[x: string]}...attributes - All props added to the Item will be added to the ul item.
 */

const DropDownContent: FunctionComponent<ContentProps> = ({
  children,
  ...attributes
}) => {
  const { dropdownStatus, optionsRef } = useContext(DropdownContext);

  return (
    <ul
      data-dd-content
      data-open={dropdownStatus ? "true" : "false"}
      ref={optionsRef && optionsRef}
      id="DD-content"
      role="menu"
      {...attributes}
    >
      {children}
    </ul>
  );
};

export default DropDownContent;
