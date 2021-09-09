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
import "../../styles/buttonProfile.scss";

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
		<div id="iwin" style={modalStyle} className={classes.paper}>
			<div className="flex-modal">
				<span id="simple-modal-title">
					Edit <i className="far fa-edit margin-icon-left-profile"></i>
				</span>
				<span id="simple-modal-title-property">{props.nameValue}</span>
				<div className="flex_modal_profile_flex">
					<input
						className="form_placeholder_ayuda"
						id="simple-modal-description"
						onChange={event => {
							setValue(event.target.value);
						}}></input>
					{/* <button
						type="button"
						onClick={() => {
							actions.getUpdateClient(value, props.nameValue);
						}}>
						Save
					</button> */}
					<button
						onClick={() => {
							actions.getUpdateClient(value, props.nameValue);
						}}
						className="buttonProfile margin-button-modal"
						type="button">
						Save
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div>
			<div className="dataContainerEdit" onClick={handleOpen}>
				<i className="far fa-edit"></i>
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
										<div className="dataContainerText">{account.name}</div>
									</div>

									<SimpleModal nameValue="Name" />
								</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Last Name</div>
										<div className="dataContainerText">{account.last_name}</div>
									</div>
									<SimpleModal nameValue="Last Name" />
								</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Email</div>
										<div className="dataContainerText">{account.email}</div>
									</div>
									<SimpleModal nameValue="Email" />
								</div>
							</div>
							<div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Province</div>
										<div className="dataContainerText">{account.province}</div>
									</div>
									<SimpleModal nameValue="Province" />
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Post Code</div>
											<div className="dataContainerText">{account.post_code}</div>
										</div>
										<SimpleModal nameValue="Post Code" />
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Address</div>
											<div className="dataContainerText">{account.adress}</div>
										</div>
										<SimpleModal nameValue="Address" />
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Phone</div>
											<div className="dataContainerText">{account.phone}</div>
										</div>
										<SimpleModal nameValue="Phone" />
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
