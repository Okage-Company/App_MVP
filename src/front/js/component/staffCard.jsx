import React from "react";
import PropTypes from "prop-types";

import "/workspace/react-flask-hello/src/front/styles/staffCard.scss";

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
	name: PropTypes.string,
	specialty: PropTypes.string,
	category: PropTypes.string,
	studies: PropTypes.string,
	collegiateNumber: PropTypes.string
};

export default StaffCard;
