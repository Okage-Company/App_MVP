import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));

function ImageAvatars() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar alt="Remy Sharp" src="https://es.web.img3.acsta.net/pictures/17/05/22/10/23/162388.jpg" />
		</div>
	);
}

export default function buttonUploadImage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
			<label htmlFor="contained-button-file">
				<Button variant="contained" color="primary" component="span">
					Upload
				</Button>
			</label>
		</div>
	);
}
