import React from "react";
import "../../styles/terms.scss";
const Contact = () => {
	return (
		<div className="infoContainer">
			<div className="cookies_info">
				<span className="tittle">Get in touch!</span>
				<span className="terms_title">Contact information</span>
				<div className="cookies-body-text-terms-div">
					<span>
						<span className="bold-terms">
							<i className="fas fa-map"></i> Direccion
						</span>
						C/Jesus del Valle, 23, Madrid, 28080{" "}
					</span>
					<span>
						<span className="bold-terms">
							<i className="fas fa-phone"></i> Telefono
						</span>
						+34 613 402 283
					</span>
					<span>
						<span className="bold-terms">
							<i className="far fa-envelope"></i> Email
						</span>
						info@okage.com
					</span>
				</div>
			</div>
		</div>
	);
};
export default Contact;
