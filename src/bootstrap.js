import React from "react";
import {render} from "react-dom";
import Play from "./components/icons/play";

const newRoot = () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  return root;
};

const getRoot = () => {
  const divs = document.getElementsByTagName("div");
  if (divs.length > 0) {
    return divs[0];
  }

  return newRoot();
};

const bootstrap = () => {
  const root = getRoot();
  render(<Play />, root);
};

// Bootstraping application in browser
// This will not break testing environment
bootstrap();

export default bootstrap;
