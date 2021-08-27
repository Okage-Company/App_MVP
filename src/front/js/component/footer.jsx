import React, { Component } from "react";

const Footer = () => (
	<div className="footer_container">
		<div className="footer_logo">
			<img className="footer_logo_img" src="https://i.ibb.co/F82sCf8/0000-07.png"></img>
		</div>
		<div>
			<div className="footer_text">About us</div>
			<div>Contact</div>
		</div>
		<div className="footer_social">
			<i className="fab fa-instagram"></i>
			<i className="fab sm-icon fa-facebook-square"></i>
			<i className="fab sm-icon fa-twitter-square"></i>
		</div>
		<div className="footer_terms"></div>
		<div className="footer_terms">2021© Terms & Conditions • Privacy Policy • Cookies</div>
	</div>
);
export default Footer;
