import { Element, OneOf3 } from "@design-systems/utils";

export type Sizes = ["small", "medium", "large", "x-large"];

export const IconSizes = {
  small: "12px",
  medium: "16px",
  large: "20px",
  "x-large": "24px",
} as const;

export interface IconPropsSize {
  /** The size of the icon */
  size: Sizes[number];
}

export interface IconPropsInline {
  /** Whether the Icon inherits text styles */
  inline: true;
}

export interface IconPropsOverride {
  /** The width of the icon */
  width: string;
  /** The height of the icon */
  height: string;
}

export type IconProps = OneOf3<
  IconPropsSize,
  IconPropsInline,
  IconPropsOverride
> &
  Element<"svg">;
