import React from "react";
import ReactDom from "react-dom";

/** Our React Options Application */
export const App = () => {
  return <h1>This is the Options page, you can add settings here.</h1>;
};

const ele = document.createElement("div");
document.body.appendChild(ele);

ReactDom.render(<App />, ele);
