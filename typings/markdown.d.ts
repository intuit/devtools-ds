declare module '*.md' {
  const value: string;
  export const path: string;
  export default value;
}

declare module '*.mdx' {
  const value: string;
  export default value;
}
