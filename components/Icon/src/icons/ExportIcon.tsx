/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * ExportIcon
 *
 * @param iconProps - SVG props
 */
const ExportIcon = (iconProps: IconProps) => {
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
      <path d="M5.998 22a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2L20 8.003l-2-2V4H6v16h12v-2.374l2-1.875V20a2 2 0 01-2 2H6zm4.543-3.966c-.5 0-1-.455-1-.895 0-3.399 2.224-5.76 8-6.105l-1.076-.963a.83.83 0 010-1.266 1.086 1.086 0 011.414 0l2.793 2.5a.83.83 0 010 1.265l-2.793 2.5a1.086 1.086 0 01-1.414 0 .83.83 0 010-1.266l1.099-.983c-5.002.312-6.023 2.219-6.023 4.318 0 .682-.5.895-1 .895z" />
    </svg>
  );
};

export default ExportIcon;
