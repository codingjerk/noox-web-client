import React from "react";
import {render} from "react-dom";

import Play from "./components/icons/play";

const bootstrap = () => {
  if (module.hot) {
    module.hot.accept();
  }

  const divs = document.getElementsByTagName("div");
  let root = null;
  if (divs.length > 0) {
    root = divs[0];
  } else {
    root = document.createElement("div");
    document.body.appendChild(root);
  }

  render(<Play />, root);
};

// Bootstraping application in browser
// This will not break testing environment
bootstrap();

export default bootstrap;
