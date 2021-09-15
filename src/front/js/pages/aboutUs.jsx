import React from "react";
import "../../styles/aboutUs.scss";

const AboutUs = () => {
	return (
		<div className="about-us-container">
			<div className="about-us-witch">
				<div className="about-us-image" />
			</div>
			<div className="about-us-main">
				<div className="about-header-yeah">
					<div className="about-us-logo"></div>
					<div className="about-header-yeah-dos">
						<span className="about-us-japan">おかげ</span>
						<span className="about-us-title">Okage</span>
					</div>
				</div>
				<span className="subtitle-about">A japanese word that originally means:</span>
				<div className="quote-div">
					<span>Support and benefit that you have received from another person 💜</span>
				</div>
				<span>
					Okage is the initiative of a group of conscientious people who understood the problems of people
					with ASD and their families, and decided to get down to work to facilitate access to all services
					and activities near their homes. Okage is in charge of centralizing all the federations,
					associations, centers and specialized schools in a web / app where as many as others have all the
					information according to the needs and the stage of development in which they are and consequently
					help to improve their quality of life.
				</span>
			</div>
			<div className="valores">
				<img className="img-fluid" src="https://i.ibb.co/YN9BPyg/0-Valores2-01.png"></img>
			</div>
		</div>
	);
};
export default AboutUs;
