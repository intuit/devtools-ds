/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * InspectorIcon
 *
 * @param iconProps - SVG props
 */
const InspectorIcon = (iconProps: IconProps) => {
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
      <path d="M12 2a1 1 0 011 1h6a2 2 0 012 2v6a1 1 0 010 2v6a2 2 0 01-2 2h-6a1 1 0 01-2 0H5a2 2 0 01-2-2v-6a1 1 0 010-2V5a2 2 0 012-2h6a1 1 0 011-1zm-1 3H5v5.999L6 11a1 1 0 010 2l-1-.001V19h6v-1a1 1 0 012 0v1h6v-6.001L18 13a1 1 0 010-2l1-.001V5h-6v1a1 1 0 01-2 0V5z" />
    </svg>
  );
};

export default InspectorIcon;
