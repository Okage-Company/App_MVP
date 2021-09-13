import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../../styles/modal_service.scss";

const typeOfService = [
	{
		value: "USD",
		label: "Psychology"
	},
	{
		value: "EUR",
		label: "Logopedian"
	},
	{
		value: "BTC",
		label: "Sports"
	},
	{
		value: "JPY",
		label: "Music"
	}
];

const useStylesMS = makeStyles(theme => ({
	rootMS: {
		"& .MuiTextField-root": {
			width: "100%",
			maxWidth: "31rem",
			marginTop: "2rem",
			display: "flex",
			flex: "column",
			color: "#F6F6F6"
		},
		"& .MuiInput-input": {
			backgroundColor: "#F6F6F6",
			background: "grey"
		}
	},
	input: {
		display: "none"
	}
}));

export default function ValidationTextFields() {
	const classes = useStylesMS();
	const [typeOfServices, setTypeOfServices] = React.useState("Choose an option");

	const handleChange = event => {
		setTypeOfServices(event.target.value);
	};

	return (
		<div className="modalService">
			<form className={classes.rootMS} noValidate autoComplete="off">
				<div className="modalServiceDescription">
					<h5>Description</h5>
					<TextField
						className="inputBGC"
						id="outlined-error"
						label="Service Title"
						placeholder="Service Title"
						defaultValue=""
						variant="outlined"
						helperText="The title of your service could be the name of your center or a certain activity or event."
					/>
					<TextField
						id="outlined-select-currency"
						select
						label="Specialty"
						placeholder="Psychology"
						value={typeOfServices}
						onChange={handleChange}
						helperText="Choose a specialty"
						variant="outlined">
						{typeOfService.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						id="outlined-select-currency"
						select
						label="Category"
						value={typeOfServices}
						onChange={handleChange}
						helperText="People can find your service in the search bar through these categories."
						variant="outlined">
						{typeOfService.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						id=""
						label="Description"
						placeholder="Description"
						rowsMax={3}
						variant="outlined"
						helperText="Let people know what your service is about."
					/>
				</div>
				<div className="modalServiceStaff">
					<h5>The Staff</h5>
					<TextField
						id="outlined-error-helper-text"
						label="Full Name"
						defaultValue=""
						helperText="Choose the name of the main worker."
						variant="outlined"
					/>
				</div>
				<h5>Gallery</h5>
				<div className="modalServiceGallery">
					<div className="galleryBox"></div>
					<div className="galleryBox"></div>
					<div className="galleryBox"></div>
				</div>
				<div className="buttonUploadImage">
					<input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
					<label htmlFor="contained-button-file">
						<Button variant="contained" color="primary" component="span" disableElevation>
							Upload Images
						</Button>
					</label>
				</div>
				<div className="buttonCreateService">
					<Button variant="contained" color="primary" disableElevation>
						<ArrowForwardIcon />
						Create a Service
					</Button>
				</div>
			</form>
		</div>
	);
}
