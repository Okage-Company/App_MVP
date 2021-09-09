import React, { useContext, useEffect, useState } from "react";
import PasswordUpdate from "../component/password.jsx";
import { Context } from "../store/appContext";
import "../../styles/client_profile.scss";
import { useParams } from "react-router-dom";
import { CallToActionSharp } from "@material-ui/icons";
import ButtonUploadImage from "../component/buttonUploadImage.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}
const useStyles = makeStyles(theme => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

function SimpleModal(props) {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState(null);

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id="simple-modal-title">{"Edit ".concat(props.nameValue)}</h2>
			<input
				id="simple-modal-description"
				onChange={event => {
					setValue(event.target.value);
				}}></input>
			<button
				type="button"
				onClick={() => {
					actions.getUpdateClient(value, props.nameValue);
				}}>
				Save
			</button>
		</div>
	);

	return (
		<div>
			<div className="dataContainerEdit" onClick={handleOpen}>
				Edit
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				{body}
			</Modal>
		</div>
	);
}

SimpleModal.propTypes = {
	nameValue: PropTypes.text
};

const Client_Profile = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.getClientId(params.id);
	}, []);
	return (
		<div>
			{store.clientId.map((account, index) => {
				return (
					<div className="clientProfileContainer" key={index}>
						<div className="clientProfileSidebar">
							<div className="clientProfileSidebar">
								<div className="clientProfileImage"></div>
								<ButtonUploadImage />
							</div>
						</div>
						<div className="clientProfileMain">
							<div>
								<div className="clientProfileTitle">Your Profile</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Name</div>
										<div>{account.name}</div>
									</div>

									<SimpleModal nameValue="name" />
								</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Last Name</div>
										<div>{account.last_name}</div>
									</div>
									<SimpleModal nameValue="last_name" />
								</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Email</div>
										<div>{account.email}</div>
									</div>
									<SimpleModal nameValue="Email" />
								</div>
							</div>
							<div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Province</div>
										<div>{account.province}</div>
									</div>
									<SimpleModal nameValue="Province" />
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Post Code</div>
											<div>{account.post_code}</div>
										</div>
										<SimpleModal nameValue="post_code" />
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Address</div>
											<div>{account.adress}</div>
										</div>
										<SimpleModal nameValue="address" />
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Phone</div>
											<div>{account.phone}</div>
										</div>
										<SimpleModal nameValue="phone" />
									</div>
								</div>
							</div>
							<PasswordUpdate />
						</div>
					</div>
				);
			})}
			;
		</div>
	);
};

export default Client_Profile;
