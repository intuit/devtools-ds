/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * MoreInfoIcon
 *
 * @param iconProps - SVG props
 */
const MoreInfoIcon = (iconProps: IconProps) => {
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
      <circle cx="4.3" cy="15" r="3.3" />
      <circle cx="15" cy="15" r="3.3" />
      <circle cx="25.7" cy="15" r="3.3" />
    </svg>
  );
};

export default MoreInfoIcon;
