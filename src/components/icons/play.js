import React from "react";
import PropTypes from "prop-types";

const Play = ({color}) => <svg>
  <path fill={color} />
</svg>;

Play.propTypes = {
  color: PropTypes.string,
};

Play.defaultProps = {
  color: "#000000",
};

export default Play;
