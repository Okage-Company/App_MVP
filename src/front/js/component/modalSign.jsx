import React, { useState, useEffect, Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/modal.scss";
import PropTypes from "prop-types";
import { CallToActionSharp } from "@material-ui/icons";
import ButtonSign from "./buttonSign.jsx"; //alguien convertir a otro path i can't do itttt pleaseee help

const ModalSign = ({ LogWorks }) => {
	const [signModalContent, setSignModalContent] = useState("");
	const [modalViewSign, setModalViewSign] = useState(false);
	const { register, handleSubmit } = useForm();
	const { store, actions } = useContext(Context);
	const onSubmit = data => actions.getRegister(JSON.stringify(data));

	useEffect(() => {
		if (modalViewSign == true) {
			setSignModalContent(
				<Fragment>
					<div className="form_imputs">
						<div className="form_sign_up_header">
							<button
								className="form_sign_up_arrow_button"
								onClick={e => {
									e.preventDefault();
									setModalViewSign(false);
								}}>
								<i className="fas fa-chevron-left"></i>
							</button>
							<span className="form_sign_up_title">Sign up</span>
						</div>
						<label className="form_label">Name</label>
						<input
							{...register("name")}
							className="form_placeholder"
							type="text"
							id="name"
							placeholder="e.g. Jennifer"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Last Name</label>
						<input
							{...register("last_name")}
							className="form_placeholder"
							type="text"
							id="last_name"
							placeholder="e.g. Aniston"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Phone number</label>
						<input
							{...register("phone")}
							className="form_placeholder"
							type="text"
							id="phone"
							placeholder="e.g. 999 999 999"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Province</label>
						<input
							{...register("province")}
							className="form_placeholder"
							type="text"
							id="province"
							placeholder="e.g. Málaga"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Postal code</label>
						<input
							{...register("post_code")}
							className="form_placeholder"
							type="text"
							id="post_code"
							placeholder="Zip"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Address</label>
						<input
							{...register("adress")}
							className="form_placeholder"
							type="text"
							id="adress"
							placeholder="C/"
						/>
					</div>
					<div className="form_footer">
						<input className="get-started-button" type="submit" value="Get started"></input>
					</div>
				</Fragment>
			);
		} else {
			setSignModalContent(
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
							{...register("_password")}
							className="form_placeholder"
							type="text"
							id="password"
							placeholder="at least 8 characters"
						/>
					</div>
					<div className="form_imputs">
						<label className="form_label">Who are you?</label>
						<div className="form_check_container">
							<div className="form_check_container_flex">
								<input type="checkbox" id="particular" />
								<span className="form_check">Particular</span>
							</div>
							<div className="form_check_container_flex">
								<input type="checkbox" id="business" />
								<span className="form_check">Business</span>
							</div>
						</div>
					</div>
					<div className="form_footer">
						<ButtonSign ayuda={setModalViewSign} text="Continue" />
						<span className="form_footer_text">
							Already a member?{" "}
							<a
								className="form_link"
								onClick={() => {
									LogWorks(true);
								}}>
								Log in
							</a>
						</span>
					</div>
				</Fragment>
			);
		}
	}, [modalViewSign]);

	return <form onSubmit={handleSubmit(onSubmit)}>{signModalContent}</form>;
};

ModalSign.propTypes = {
	LogWorks: PropTypes.func.isRequired
};

export default ModalSign;
