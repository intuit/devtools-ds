/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * DebuggerIcon
 *
 * @param iconProps - SVG props
 */
const DebuggerIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="1 1 22 22"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M15.804 19.206l5.79-6a2 2 0 000-2.412l-5.79-6A2 2 0 0014.208 4H4a2 2 0 00-2 2v12a2 2 0 002 2h10.208a2 2 0 001.596-.794zM20 12l-5.792 6H4V6h10.209L20 12z" />
    </svg>
  );
};

export default DebuggerIcon;
