/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ClipboardIcon
 *
 * @param iconProps - SVG props
 */
const ClipboardIcon = (iconProps: IconProps) => {
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
      <path d="M12 2c1.48 0 2.773.804 3.465 2H18a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2.535A3.998 3.998 0 0112 2zM8 6H6v14h12V6h-2v1a1 1 0 01-1 1H9a1 1 0 01-1-1V6zm4-2a2 2 0 00-1.995 1.85L10 6h4a2 2 0 00-1.85-1.995L12 4z" />
    </svg>
  );
};

export default ClipboardIcon;
