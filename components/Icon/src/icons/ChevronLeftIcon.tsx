/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ChevronLeftIcon
 *
 * @param iconProps - SVG props
 */
const ChevronLeftIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 17 30"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M15.104 30L.492 16.077C.163 15.741 0 15.382 0 15.002c0-.384.163-.743.492-1.079L15.104 0 17 2.154 3.583 15.002 17 27.846 15.104 30z" />
    </svg>
  );
};

export default ChevronLeftIcon;
