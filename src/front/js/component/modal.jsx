import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import "../../styles/modal.scss";
import PropTypes from "prop-types";

const Modal = ({ closeModal }) => {
	const [modalContent, setModalContent] = useState("");
	const [modalView, setModalView] = useState(false);

	const { register, handleSubmit } = useForm();
	const submitAction = data => console.log(data);

	useEffect(() => {
		if (modalView == true) {
			setModalContent(
				<Fragment>
					<div className="form_imputs">
						<div className="form_sign_up_header">
							<button className="form_sign_up_arrow_button" onClick={() => setModalView(false)}>
								<i className="fas fa-chevron-left"></i>
							</button>
							<span className="form_sign_up_title">Sign up</span>
						</div>
						<label className="form_label">Name</label>
						<input
							{...register("firstName")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="e.g. Jennifer"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Last Name</label>
						<input
							{...register("lastName")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="e.g. Aniston"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Phone number</label>
						<input
							{...register("phone")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="e.g. 999 999 999"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Province</label>
						<input
							{...register("province")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="e.g. Málaga"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">City</label>
						<input
							{...register("city")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="e.g. Marbella"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Postal code</label>
						<input
							{...register("zip")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="Zip"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Address</label>
						<input
							{...register("address")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="C/"
						/>
					</div>
					<div className="form_footer">
						<input {...register("getStarted")} type="submit" value="Get started"></input>
					</div>
				</Fragment>
			);
		} else {
			setModalContent(
				<Fragment>
					<div className="form_imputs">
						<div className="form_logo">
							<img className="form_logo_image" src="https://i.ibb.co/hHpLvn0/0logo-navbar-01.png"></img>
							<span className="form_logo_text">Okage</span>
						</div>
						<span className="form_main_title">Sign up</span>
						<label className="form_label">Email</label>
						<input
							{...register("email")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="e.g. your@mail.com"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Password</label>
						<input
							{...register("password")}
							className="form_placeholder"
							type="text"
							id="email"
							placeholder="••••••••"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Who are you?</label>
						<div className="form_check_container">
							<div className="form_check_container_flex">
								<input {...register("particular")} type="checkbox" id="particular" />
								<span className="form_check">Particular</span>
							</div>
							<div className="form_check_container_flex">
								<input {...register("business")} type="checkbox" id="business" />
								<span className="form_check">Business</span>
							</div>
						</div>
					</div>
					<div className="form_footer">
						<input
							{...register("continue")}
							onClick={() => {
								setModalView(true);
							}}
							type="submit"
							value="Continue"></input>
						<span className="form_footer_text">
							Already a member? <a className="form_link">Log in</a>
						</span>
					</div>
				</Fragment>
			);
		}
	}, [modalView]);

	return (
		<div className="modal_container">
			<div className="modal_content">
				<div className="modal_form">
					<form onSubmit={handleSubmit(submitAction)}>{modalContent}</form>
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
