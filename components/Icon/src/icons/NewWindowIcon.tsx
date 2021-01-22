/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * NewWindowIcon
 *
 * @param iconProps - SVG props
 */
const NewWindowIcon = (iconProps: IconProps) => {
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
      <path d="M10.5 3a1 1 0 01.117 1.993L10.5 5H5v14h14v-5.5a1 1 0 01.883-.993L20 12.5a1 1 0 01.993.883L21 13.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5.5zM20 3a1 1 0 011 1v5a1 1 0 11-2 0V6.414l-5.293 5.293a1 1 0 01-1.414-1.414L17.586 5H15a1 1 0 110-2z" />
    </svg>
  );
};

export default NewWindowIcon;
