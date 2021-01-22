import React from 'react';

interface TreeContext {
  /** Whether the current tree is a child of another */
  isChild: boolean;
  /** Depth of current node */
  depth: number;
  /** Whether to have hover styles */
  hasHover: boolean;
}

const TreeContext = React.createContext<TreeContext>({
  isChild: false,
  depth: 0,
  hasHover: true
});

export default TreeContext;
