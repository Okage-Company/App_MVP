import React, { useState, useEffect, Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/modal.scss";
import PropTypes from "prop-types";
import { CallToActionSharp } from "@material-ui/icons";
//alguien convertir a otro path i can't do itttt pleaseee help

const ModalLog = ({ closeModalLog }) => {
	const { register, handleSubmit } = useForm();
	const { store, actions } = useContext(Context);
	const onSubmit = data => actions.getLogin(JSON.stringify(data));

	return (
		<Fragment>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form_imputs">
					<div className="form_logo">
						<img className="form_logo_image" src="https://i.ibb.co/hHpLvn0/0logo-navbar-01.png"></img>
						<span className="form_logo_text">Okage</span>
					</div>
					<span className="form_main_title">Log in</span>
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
						id="password"
						placeholder="••••••••"
					/>
					<span className="form_footer_text_log">¿Forgot your password?</span>
				</div>
				<div className="wow">
					<input className="get-started-button" text="Log in" type="submit" />
					<span className="form_footer_text_log">
						Don’t have an account? <span>Sign up</span>
					</span>
				</div>
			</form>
		</Fragment>
	);
};

ModalLog.propTypes = {
	closeModalLog: PropTypes.func.isRequired
};

export default ModalLog;