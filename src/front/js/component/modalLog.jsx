import React, { useState, useEffect, Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/modal.scss";
import PropTypes from "prop-types";
import { CallToActionSharp } from "@material-ui/icons";
import Button from "/workspace/App_MVP/src/front/js/component/button.jsx"; //alguien convertir a otro path i can't do itttt pleaseee help

const ModalLog = ({ closeModalLog }) => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();

	const submitAction = credentials => {
		console.log("Llega");
		actions.getLogin(JSON.stringify(credentials));
	};

	return (
		<Fragment>
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
			<div className="form_imputs">
				<Button text="Log in" type="submit" />
				<span className="form_footer_text_log">Don’t have an account? Sign up</span>
			</div>
		</Fragment>
	);
};

ModalLog.propTypes = {
	closeModalLog: PropTypes.func.isRequired
};

export default ModalLog;
