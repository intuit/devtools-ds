/* Warning: this file is generated using svg-icon-builder */
import React from "react";
import makeClass from "clsx";
import { IconProps, IconSizes } from "../props";

import styles from "../Icon.css";

/**
 * WarningIcon
 *
 * @param iconProps - SVG props
 */
const WarningIcon = (iconProps: IconProps) => {
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
      <path d="M13.232 3.645l.08.125 8.484 14.915c.134.235.204.501.204.773 0 .801-.601 1.46-1.37 1.535l-.145.007H3.515c-.266 0-.528-.072-.759-.208a1.557 1.557 0 01-.619-1.975l.067-.132L10.69 3.77a1.53 1.53 0 01.552-.562 1.499 1.499 0 011.991.437zM12 16a1 1 0 100 2 1 1 0 000-2zm0-6a1 1 0 00-1 1v3l.007.117A1 1 0 0013 14v-3l-.007-.117A1 1 0 0012 10z" />
    </svg>
  );
};

export default WarningIcon;
