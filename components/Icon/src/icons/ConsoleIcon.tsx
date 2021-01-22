/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ConsoleIcon
 *
 * @param iconProps - SVG props
 */
const ConsoleIcon = (iconProps: IconProps) => {
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
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm0 2H5v14h14V5zM9.707 8.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 011.414-1.414z" />
    </svg>
  );
};

export default ConsoleIcon;
