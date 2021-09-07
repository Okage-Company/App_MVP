import React from "react";
import { Context } from "../store/appContext";
import "../../styles/client_profile.scss";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import PasswordField from "material-ui-password-field";

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const DialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions);

export default function PasswordUpdate() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Update Password
			</Button>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					Update Password
				</DialogTitle>
				<div className="dataContainer">
					<FormControl fullWidth margin="dense">
						<InputLabel htmlFor="password-current">{"Current Password"}</InputLabel>
						<Input id="password-current" name="currentPass" type="password" />
					</FormControl>
				</div>
				<div>
					<FormControl fullWidth margin="dense">
						<InputLabel htmlFor="password-new" placeholder="New Password" defaultValue="New Password">
							New Password
						</InputLabel>
						<Input
							id="password-new"
							name="newPass"
							type="password"
							defaultValue="New Password"
							placeholder="New Password"
						/>
					</FormControl>
					<FormControl fullWidth margin="dense">
						<InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
						<Input
							id="password-confirm"
							name="confirmPassword"
							type="password"
							defaultValue="Confirm Password"
						/>
					</FormControl>
				</div>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Save changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
