import React from "react";
import PropTypes from "prop-types";

import "../../styles/staffCard.scss";

const StaffCard = props => {
	return (
		<div className="staff_card_container">
			<div className="staff_card_image" />
			<div className="staff_card_container_text">
				<span className="staff_card_name">{props.name}</span>
				<span className="staff_card_specialty">{props.specialty}</span>
				<span className="staff_card_studies">{props.studies}</span>
				<span className="staff_card_collegiate_number">Collegiate number {props.collegiateNumber}</span>
			</div>
		</div>
	);
};

StaffCard.propTypes = {
	name: PropTypes.string.isRequired,
	specialty: PropTypes.string.isRequired,
	studies: PropTypes.string.isRequired,
	collegiateNumber: PropTypes.string.isRequired
};

export default StaffCard;