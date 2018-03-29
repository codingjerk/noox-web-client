import React from "react";
import PropTypes from "prop-types";

const Previous = ({color}) => <svg>
  <path fill={color} />
</svg>;

Previous.propTypes = {
  color: PropTypes.string,
};

Previous.defaultProps = {
  color: "#000000",
};

export default Previous;
