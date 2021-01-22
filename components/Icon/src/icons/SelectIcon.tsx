/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * SelectIcon
 *
 * @param iconProps - SVG props
 */
const SelectIcon = (iconProps: IconProps) => {
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
      <path
        fillRule="evenodd"
        d="M19 3a2 2 0 012 2v4.5a1 1 0 01-1.993.117L19 9.5V5H5v14h4.5a1 1 0 01.993.883L10.5 20a1 1 0 01-.883.993L9.5 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.252 6.711l.114.024 8.154 2.216a1 1 0 01.206 1.848l-.106.048-2.262.882 3.675 3.674a1.5 1.5 0 01-2.121 2.121l-3.717-3.716-.87 2.3a1 1 0 01-.535.563l-.126.045a1 1 0 01-1.197-.578l-.039-.11-2.286-8.055a1 1 0 011.11-1.262z"
      />
    </svg>
  );
};

export default SelectIcon;
