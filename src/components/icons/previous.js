import React from "react";
import createIcon from "./create-icon";

const Previous = createIcon(color => [
  <path key="tri"  d="M84 16 L84 84 L35 64 L35 36 Z" fill={color} />,
  <path key="rect" d="M36 16 L36 84 L16 84 L16 16 Z" fill={color} />,
]);

export default Previous;
