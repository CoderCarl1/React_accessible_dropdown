import { createContext } from "react";
import type { DDContextInterface } from "../types";

const DropdownContext = createContext({} as DDContextInterface);
DropdownContext.displayName = "Dropdown Context";

export { DropdownContext };
