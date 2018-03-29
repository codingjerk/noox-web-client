import React from "react";
import PropTypes from "prop-types";

const Pause = ({color}) => <svg>
  <path fill={color} />
</svg>;

Pause.propTypes = {
  color: PropTypes.string,
};

Pause.defaultProps = {
  color: "#000000",
};

export default Pause;
