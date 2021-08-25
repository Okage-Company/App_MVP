import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = () => {
	return (
		<Fragment>
			<Button variant="contained" color="primary" style={{ maxWidth: "180px" }}>
				Hello World
			</Button>
		</Fragment>
	);
};

export default Navbar;
