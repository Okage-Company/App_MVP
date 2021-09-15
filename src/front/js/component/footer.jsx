import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () => (
	<div className="footer_container">
		<div className="life_is_what_you_make">
			<div className="footer_logo">
				<Link to="/">
					<img className="footer_logo_img" src="https://i.ibb.co/F82sCf8/0000-07.png"></img>
				</Link>
			</div>
			<div>
				<div className="footer_text">
					<Link className="a-footer" to="/about">
						About us
					</Link>
				</div>
				<div>
					<Link className="a-footer" to="/contact">
						Contact
					</Link>
				</div>
			</div>
		</div>
		<div className="footer_social">
			<i className="fab fa-instagram"></i>
			<i className="fab sm-icon fa-facebook-square"></i>
			<i className="fab sm-icon fa-twitter-square"></i>
		</div>
		<div className="footer_terms">
			<div className="footer_terms_divider" />
			<span className="footer_terms_text">
				2021©{" "}
				<Link className="a-footer" to="/terms">
					Terms & Conditions
				</Link>{" "}
				•{" "}
				<Link className="a-footer" to="/privacy">
					Privacy Policy
				</Link>{" "}
				•{" "}
				<Link className="a-footer" to="/cookies">
					Cookies
				</Link>
			</span>
		</div>
	</div>
);
export default Footer;
