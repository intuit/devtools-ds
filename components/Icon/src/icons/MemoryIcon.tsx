/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * MemoryIcon
 *
 * @param iconProps - SVG props
 */
const MemoryIcon = (iconProps: IconProps) => {
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
      <path d="M18 2a2 2 0 012 2v3h1a1 1 0 010 2h-1v2h1a1 1 0 010 2h-1v2h1a1 1 0 010 2h-1v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3H3a1 1 0 010-2h1v-2H3a1 1 0 010-2h1V9H3a1 1 0 110-2h1V4a2 2 0 012-2h12zm0 2H6v16h12V4z" />
    </svg>
  );
};

export default MemoryIcon;
