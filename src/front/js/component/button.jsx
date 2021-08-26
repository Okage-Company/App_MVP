import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const App = props => {
	return 
		<Button variant="contained" color="primary">
			{props.value}
		</Button>
	);
}

Button.propTypes = {
	value: PropTypes.string
};

export default App;
