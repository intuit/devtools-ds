/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ChevronUpIcon
 *
 * @param iconProps - SVG props
 */
const ChevronUpIcon = (iconProps: IconProps) => {
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
      <path d="M0 21.6L13.9 7c.3-.3.7-.5 1.1-.5s.7.2 1.1.5L30 21.6l-2.2 1.9L15 10.1 2.2 23.5 0 21.6z" />
    </svg>
  );
};

export default ChevronUpIcon;
