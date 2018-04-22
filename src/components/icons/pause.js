import React from "react";
import createIcon from "./create-icon";

const Pause = createIcon(color => [
    <path key="left" d="M16 16 L16 84 L39 84 L39 16 Z" fill={color} />,
    <path key="right" d="M84 84 L61 84 L61 16 L84 16 Z" fill={color} />,
]);

export default Pause;
