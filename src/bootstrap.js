import React from "react";
import {render} from "react-dom";

import Play from "./components/icons/play";

const bootstrap = () => {
  if (module.hot) {
    module.hot.accept();
  }

  const root = document.createElement("div");
  document.body.innerHTML = "";
  document.body.appendChild(root);

  render(<Play color="#DE4040"/>, root);
};

// Bootstraping application in browser
// This will not break testing environment
bootstrap();

export default bootstrap;
