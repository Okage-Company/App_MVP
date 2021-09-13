import React from "react";
import PropTypes from "prop-types";

import "../../styles/cardHome.scss";

const CardHome = props => {
	return (
		<div
			className="home_card_container"
			onClick={e => {
				e.preventDefault();
				location.replace("/search");
			}}>
			<div className="home_card_image">
				<img className="home_card_image_img" src={props.image}></img>
			</div>
			<span className="home_card_category">{props.category}</span>
		</div>
	);
};

CardHome.propTypes = {
	category: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default CardHome;
