import React from "react";
import "../../styles/modal.scss";
import PropTypes from "prop-types";

const Modal = ({ closeModal }) => {
	return (
		<div className="modal_container">
			<div className="modal_content">
				<button onClick={() => closeModal(false)}>X</button>
				<span>Hello boys</span>
				<button>Click</button>
			</div>
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired
};

export default Modal;
