import React from "react";
import PropTypes from "prop-types";

import "../../styles/staffCard.scss";

const StaffCard = props => {
	return (
		<div className="staff_card_container">
			<div className="staff_card_image">
				<img className="staff_new_image" src={props.image}></img>
			</div>
			<div className="staff_card_container_text">
				<span className="staff_card_name">
					<i className="fas fa-user-md icon-right-margin"></i>
					{props.name}
				</span>
				{/* <span className="staff_card_specialty">{props.specialty}</span> */}
				<span className="staff_card_studies">{props.studies}</span>
				<span className="staff_card_collegiate_number">Collegiate number {props.collegiateNumber}</span>
			</div>
		</div>
	);
};

StaffCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	specialty: PropTypes.string.isRequired,
	studies: PropTypes.string.isRequired,
	collegiateNumber: PropTypes.string.isRequired
};

export default StaffCard;
