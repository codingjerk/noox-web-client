import React from "react";
import createIcon from "./create-icon";

const Next = createIcon(color => [
  <path key="tri"  d="M16 16 L16 84 L65 64 L65 36 Z" fill={color} />,
  <path key="rect" d="M64 16 L64 84 L84 84 L84 16 Z" fill={color} />,
]);

export default Next;
