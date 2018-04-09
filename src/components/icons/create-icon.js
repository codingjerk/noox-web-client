import React from "react";
import PropTypes from "prop-types";

const createIcon = pathProvider => {
  const Icon = ({color}) => <svg>
    {pathProvider(color)}
  </svg>;

  Icon.propTypes = {color: PropTypes.string};
  Icon.defaultProps = {color: "#000000"};

  return Icon;
};

export default createIcon;
