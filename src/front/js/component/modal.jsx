import React, { useState, useEffect, Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/modal.scss";
import PropTypes from "prop-types";
import { CallToActionSharp } from "@material-ui/icons";

import ModalLog from "./modalLog.jsx";
import ModalSign from "./modalSign.jsx";

const Modal = ({ closeModal }) => {
	const [modalContent, setModalContent] = useState("");
	const [modalView, setModalView] = useState(false);
	const [modalSubmit, setModalSubmit] = useState("");

	useEffect(() => {
		if (modalView == true) {
			setModalContent(<ModalLog />);
		} else {
			setModalContent(<ModalSign LogWorks={setModalView} />);
		}
	}, [modalView]);

	return (
		<div className="modal_container">
			<div className="modal_content">
				<div className="modal_form">
					<div>{modalContent}</div>
				</div>
				<div className="modal_image">
					<div className="modal_x_button_div">
						<button className="modal_x_button" onClick={() => closeModal(false)}>
							✕
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired
};

export default Modal;
