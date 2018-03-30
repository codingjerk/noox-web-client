import React from "react";
import PropTypes from "prop-types";

const Play = ({color}) => <svg viewBox="0 37 100 26">
  <path d="M4 50 a5 5 0 0 1 20 0 M4 50 L4 62.5 M24 50 L24 62.5" strokeWidth="5" stroke={color} fill="#FFFFFF00" />

  <circle cx="43" cy="50" r="10" strokeWidth="5" stroke={color} fill="#FFFFFF00" />
  <circle cx="63" cy="50" r="10" strokeWidth="5" stroke={color} fill="#FFFFFF00" />

  <path d="M78.5 40 a5 5 0 0 1 0 20 M98.5 40 a5 5 0 0 0 0 20" strokeWidth="5" stroke={color} fill="#FFFFFF00" />
</svg>;

Play.propTypes = {
  color: PropTypes.string,
};

Play.defaultProps = {
  color: "#000000",
};

export default Play;
