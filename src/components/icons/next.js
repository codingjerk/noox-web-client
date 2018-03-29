import React from "react";
import PropTypes from "prop-types";

const Next = ({color}) => <svg>
  <path fill={color} />
</svg>;

Next.propTypes = {
  color: PropTypes.string,
};

Next.defaultProps = {
  color: "#000000",
};

export default Next;
