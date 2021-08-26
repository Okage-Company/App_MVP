import React from "react";
import PropTypes from "prop-types";

import "../../styles/cardHome.scss";

const CardHome = props => {
	return (
		<div className="home_card_container">
			<div className="home_card_image" />
			<span className="home_card_category">{props.category}</span>
		</div>
	);
};

CardHome.propTypes = {
	category: PropTypes.string.isRequired
};

export default CardHome;
