import React from "react";
import PropTypes from "prop-types";

import "../../styles/button.scss";

const Button = props => {
	return (
		// <Button variant="contained" color="primary">
		// 	See more <i className="fas fa-plus"></i>
		// </Button>
		<button className="button" type="button">
			{props.text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired
};

export default Button;
