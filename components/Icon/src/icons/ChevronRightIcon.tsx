/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ChevronRightIcon
 *
 * @param iconProps - SVG props
 */
const ChevronRightIcon = (iconProps: IconProps) => {
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
      <path d="M2.021 0l14.491 13.923c.326.336.488.695.488 1.077s-.162.741-.488 1.077L2.022 30 .14 27.846 13.448 15 0 2.154 2.021 0z" />
    </svg>
  );
};

export default ChevronRightIcon;
