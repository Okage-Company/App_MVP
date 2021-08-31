import React from "react";
import "../../styles/modal.scss";
import PropTypes from "prop-types";
import { useState } from "react";

const Modal = ({ closeModal }) => {
	const [modalContent, setModalContent] = useState('');

	useEffect(() => {
		const changeModal = useState('');;
		return changeModal
	}, []);

	return (
		<div className="modal_container">
			<div className="modal_content">
				<div className="modal_form">
					<form action="" method="post">
						<div className="form_imputs">
							<div className="form_logo">
								<img
									className="form_logo_image"
									src="https://i.ibb.co/hHpLvn0/0logo-navbar-01.png"></img>
								<span className="form_logo_text">Okage</span>
							</div>
							<span className="form_main_title">Sign up</span>
							<label className="form_label">Email</label>
							<input
								className="form_placeholder"
								type="text"
								id="email"
								placeholder="e.g. your@mail.com"
							/>
						</div>
						<div className="form_imputs">
							<label className="form_label">Password</label>
							<input className="form_placeholder" type="text" id="email" placeholder="••••••••" />
						</div>
						<div className="form_imputs">
							<label className="form_label">Who are you?</label>
							<div className="form_check_container">
								<div className="form_check_container_flex">
									<input type="checkbox" id="particular" />
									<span className="form_check">Particular</span>
								</div>
								<div className="form_check_container_flex">
									<input type="checkbox" id="particular" />
									<span className="form_check">Business</span>
								</div>
							</div>
						</div>
						<div className="form_footer">
							<input type="submit" value="Continue"></input>
							<span className="form_footer_text">
								Already a member?{" "}
								<a className="form_link" href="#">
									Log in
								</a>
							</span>
						</div>
					</form>
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
