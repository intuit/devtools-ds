/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * SearchIcon
 *
 * @param iconProps - SVG props
 */
const SearchIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="2 2 20 20"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M10.47 3a7.47 7.47 0 015.94 12.002l4.298 4.298a.996.996 0 11-1.408 1.408l-4.298-4.298A7.47 7.47 0 1110.471 3zm0 1.992a5.478 5.478 0 100 10.957 5.478 5.478 0 000-10.957z" />
    </svg>
  );
};

export default SearchIcon;
