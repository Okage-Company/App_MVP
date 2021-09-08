import React from "react";
import PropTypes from "prop-types";

import "../../styles/button.scss";

const ButtonSign = props => {
	console.log(props.ayuda);
	return (
		<button className="button" type="button" onClick={() => props.ayuda(true)}>
			{props.text}
		</button>
	);
};

ButtonSign.propTypes = {
	text: PropTypes.string.isRequired,
	ayuda: PropTypes.func.isRequired
};

export default ButtonSign;
