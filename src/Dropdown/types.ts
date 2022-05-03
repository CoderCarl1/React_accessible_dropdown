import {
  FunctionComponent,
  MutableRefObject,
  ReactNode,
  RefObject,
} from "react";

// DropDown Parent

export interface DropdownComposition {
  Content: FunctionComponent<ContentProps>;
  Trigger: FunctionComponent<TriggerProps>;
  Item: FunctionComponent<ItemProps>;
}

export type DropdownType = FunctionComponent<DropdownProps> &
  DropdownComposition;

export interface DDContextInterface {
  dropdownStatus: boolean;
  closeMenu: () => void;
  openMenu: () => void;
  triggerRef: MutableRefObject<HTMLButtonElement | null>;
  optionsRef: RefObject<HTMLUListElement>;
}

// Props

interface AttributePropType<TAttributeProps, TElement = any> {
  (props: TAttributeProps): React.ReactElement<TElement>;
}

export type variantTypes = "default";

export type DDComponentProps = {
  children?: ReactNode;
  variant?: variantTypes;
  attributes?: AttributePropType<Attribute>;
};
export type DropdownProps = DDComponentProps;
export type ContentProps = DDComponentProps;
export type TriggerProps = DDComponentProps & {
  label?: string;
};

export type ItemProps = DDComponentProps;

// misc
export type Attribute = {
  [x: string]: any;
};
