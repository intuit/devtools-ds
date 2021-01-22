/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * HistoryIcon
 *
 * @param iconProps - SVG props
 */
const HistoryIcon = (iconProps: IconProps) => {
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
      <path d="M10.994 2v2.011C7.051 4.503 4 7.93 4 12.006a8.097 8.097 0 003.998 6.977v-2.98a1 1 0 111.999 0v4.998a1 1 0 01-1 .999H4a1 1 0 110-1.999h1.942A10.087 10.087 0 012 12.006C2 6.824 5.944 2.501 10.994 2zm10.994 11.006c-.254 2.556-1.53 4.829-3.336 6.449a.995.995 0 01-1.407-.078 1.001 1.001 0 01.078-1.411c1.4-1.256 2.414-2.998 2.658-4.96h2.007zM8.708 7.293l3.562 3.563 2.414-.805a1 1 0 01.632 1.898l-3 1a1 1 0 01-1.023-.242l-4-4a1 1 0 011.414-1.414zM19.731 5.68C20.944 7.162 21.8 8.997 22 11.007h-2.011c-.182-1.46-.82-2.797-1.68-3.903zM12.993 2c2.01.2 3.845 1.056 5.326 2.268L16.896 5.69c-1.105-.86-2.443-1.497-3.903-1.679V2z" />
    </svg>
  );
};

export default HistoryIcon;
