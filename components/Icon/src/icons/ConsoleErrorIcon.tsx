/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ConsoleErrorIcon
 *
 * @param iconProps - SVG props
 */
const ConsoleErrorIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 45 45"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M6.59 6.59c8.787-8.787 23.033-8.787 31.82 0 8.787 8.787 8.787 23.033 0 31.82-8.787 8.787-23.033 8.787-31.82 0-8.787-8.787-8.787-23.033 0-31.82zm25.102 3.182L22.5 18.965l-9.192-9.193-3.536 3.536 9.193 9.192-9.193 9.192 3.536 3.536 9.192-9.193 9.192 9.193 3.536-3.536-9.193-9.192 9.193-9.192-3.536-3.536z" />
    </svg>
  );
};

export default ConsoleErrorIcon;
