/**
 * Overrides the toString on a function so that it addon-jsx prints
 * the callbacks in a copy-paste-able way.
 */
export const callback = <T extends Function>(
  fn: T,
  description?: string
): T => {
  /** A toString to render the function in storybook */
  // eslint-disable-next-line no-param-reassign
  fn.toString = () => description || "() => {}";
  return fn;
};
