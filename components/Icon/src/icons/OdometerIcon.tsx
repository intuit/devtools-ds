/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * OdometerIcon
 *
 * @param iconProps - SVG props
 */
const OdometerIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="1 1 22 22"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || "currentColor"}
      {...html}
    >
      <path d="M12 2.016a10.99 10.99 0 017.186 19.313 2.898 2.898 0 01-1.7.682l-.206.004H6.745c-.709.017-1.4-.23-1.938-.693a10.986 10.986 0 01-3.115-12.15A11 11 0 0112 2.015zm4.557 8.09L10.56 14.77a1.45 1.45 0 102.034 2.034l4.665-5.997a.5.5 0 00-.702-.702zM4 12a1 1 0 100 2 1 1 0 000-2zm16 0a1 1 0 100 2 1 1 0 000-2zM6.5 6.5a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2zM12 4a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  );
};

export default OdometerIcon;
