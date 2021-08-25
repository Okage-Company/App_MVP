import React from "react";

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
	imag: {
		// I had to change the name of the var because I was having problems with other attributes
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch"
		}
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export const Profile = () => {
	const classes = useStyles();
	return (
		<div className="container">
			<div>
				<div className={classes.imag}>
					<Avatar className={classes.purple}> V </Avatar>
				</div>
				<div></div>
				<div></div>
			</div>
			<div>
				<h3>Your profile</h3>
				<form className={classes.root} noValidate autoComplete="off">
					<div>
						<TextField required id="standard-required" label="Name" defaultValue="" />
						<TextField required id="standard-required" label="Last Name" defaultValue="" />
						<TextField required id="standard-required" label="Email" defaultValue="" />
						<TextField required id="standard-required" label="Phone Number" defaultValue="" />
						<TextField required id="standard-required" label="Postal Code" defaultValue="" />
						<TextField id="standard-required" label="Address" defaultValue="" />
					</div>
					<FormControl className={classes.formControl}>
						<InputLabel>Province</InputLabel>
						<Select>
							<option aria-label="Choose one" value="Choose one" />
							<option value={10}>Madrid</option>
							<option value={20}>Barcelona</option>
							<option value={30}>Las Palmas</option>
						</Select>
					</FormControl>
				</form>
				<Button variant="contained" color="primary">
					Update Profile
				</Button>
				<h5>Update your password</h5>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField required id="standard-required" label="Email" defaultValue="" />
					<TextField
						required
						id="standard-required"
						label="Current Password"
						autoComplete="Current Password"
					/>
					<TextField
						id="standard-password-input"
						label="New Password"
						type="password"
						autoComplete="new-password"
					/>
					<TextField
						id="standard-password-input"
						label="Confirm Password"
						type="password"
						autoComplete="Confirm password"
					/>
				</form>
				<Button variant="contained" color="primary">
					Update Password
				</Button>
			</div>
		</div>
	);
};
