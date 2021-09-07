import React from "react";
import PropTypes from "prop-types";

// Declaration of props, we'll use them in our lovely Home.jsx

const Task = props => {
	return <p>{props.name}</p>;
};

Task.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	lastNane: PropTypes.string,
	email: PropTypes.string,
	province: PropTypes.string,
	postcode: PropTypes.string,
	address: PropTypes.string,
	client: PropTypes.bool
};

export default Task;
