import React from "react";
import PropTypes from "prop-types";

import "../../styles/card.scss";

const Card = props => {
	return (
		<div className="card_container">
			<div className="card_image" />
			<div className="card_container_text">
				<span className="card_category">{props.category}</span>
				<span className="card_title">{props.title}</span>
				<span className="card_profile">{props.profile}</span>
				<div className="card_container_footer">
					<span className="card_address">{props.address}</span>
					{props.icon}
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	profile: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Card;