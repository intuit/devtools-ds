/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * DeleteIcon
 *
 * @param iconProps - SVG props
 */
const DeleteIcon = (iconProps: IconProps) => {
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
      <path d="M13 2a2 2 0 011.995 1.85L15 4v1h6a1 1 0 010 2h-1v13a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 110-2h6V4a2 2 0 011.85-1.995L11 2h2zm5 5H6v13h12V7zm-9 3a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm3 0a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm3 0a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm-2-6h-2v1h2V4z" />
    </svg>
  );
};

export default DeleteIcon;
