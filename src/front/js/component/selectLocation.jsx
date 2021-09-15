import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	formControl: {
		width: "100%"
	},
	inputLabel: {
		fontSize: "10px",
		zIndex: "100",
		paddingLeft: "0.3rem",
		[theme.breakpoints.up("sm")]: {
			zIndex: "100",
			paddingLeft: "0.3rem",
			fontSize: "16px"
		}
	}
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

const location = ["Madrid"];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
	};
}

const SelectLocation = props => {
	const classes = useStyles();
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);

	const handleChange = event => {
		setPersonName(event.target.value);
	};

	return (
		<Fragment>
			<FormControl className={classes.formControl}>
				<InputLabel className={classes.inputLabel} id="demo-mutiple-name-label">
					{props.placeholder}
				</InputLabel>
				<Select
					labelId="demo-mutiple-name-label"
					id="demo-mutiple-name"
					multiple
					value={personName}
					onChange={handleChange}
					input={<Input />}
					MenuProps={MenuProps}>
					{location.map(name => (
						<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Fragment>
	);
};

SelectLocation.propTypes = {
	placeholder: PropTypes.string
};

export default SelectLocation;
