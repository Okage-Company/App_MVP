import React, { Component } from "react";

const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="big">
			<div>
				<div className="column left">OKAGE</div>
				<div className="column about">
					<div>
						<a href="http://okage.es/aboutus">About</a>
					</div>
					<div>
						<a href="http://okage.es/contactus">Contact us</a>
					</div>
				</div>
				<div className="column middle" />
				<div className="column iconos">
					<i className="fa fa-facebook-official" aria-hidden="true" />
					Facebook
				</div>
			</div>
		</div>
		<div className="direcciones">
			<p>
				2021@ <a href="http://okage.es/termandconditions">Terms & Conditions</a>-
				<a href="http://okage.es/privacypolicy">Privacy Policy</a>-<a href="http://okage.es/cookies">Cookies</a>
			</p>
		</div>
	</footer>
);
export default Footer;
