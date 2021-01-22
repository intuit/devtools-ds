/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ChevronDownIcon
 *
 * @param iconProps - SVG props
 */
const ChevronDownIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 30 30"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M30 8.4L16.1 23c-.3.3-.7.5-1.1.5-.4 0-.7-.2-1.1-.5L0 8.4l2.2-1.9L15 19.9 27.8 6.5 30 8.4z" />
    </svg>
  );
};

export default ChevronDownIcon;
