import React from "react";
import PropTypes from "prop-types";

const Button = props => {
	return <button>{props.value}</button>;
};

Button.propTypes = {
	value: PropTypes.string
};

export default Button;