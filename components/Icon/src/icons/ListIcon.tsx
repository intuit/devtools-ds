/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ListIcon
 *
 * @param iconProps - SVG props
 */
const ListIcon = (iconProps: IconProps) => {
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
      <path d="M20 8.04H8a1 1 0 110-2h12a1 1 0 110 2zm0 5H8a1 1 0 110-2h12a1 1 0 110 2zm0 5H8a1 1 0 110-2h12a1 1 0 110 2zM3.318 7.718l-.036-.036a.964.964 0 010-1.363l.036-.037a.964.964 0 011.363 0l.036.037a.964.964 0 010 1.363l-.036.036a.963.963 0 01-1.363 0zm0 5l-.036-.036a.964.964 0 010-1.363l.036-.037a.964.964 0 011.363 0l.036.037a.964.964 0 010 1.363l-.036.036a.963.963 0 01-1.363 0zm0 5.04l-.036-.036a.964.964 0 010-1.363l.036-.037a.964.964 0 011.363 0l.036.037a.964.964 0 010 1.363l-.036.036a.964.964 0 01-1.363 0z" />
    </svg>
  );
};

export default ListIcon;
