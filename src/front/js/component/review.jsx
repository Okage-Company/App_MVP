import React from "react";
import PropTypes from "prop-types";

import "../../styles/review.scss";

const Review = props => {
	return (
		<div className="review_container">
			<div className="header_review">
				<div className="review_profile_image">
					<img className="review_new_image" src={props.image}></img>
				</div>
				<div className="review_profile_text">
					<span className="review_name">{props.name}</span>
					{/* <span className="review_chat">
						<i className="fas fa-comment-dots" /> Send a message
					</span> */}
				</div>
			</div>
			<span className="review_date">{props.date}</span>
			<span className="review_text">{props.text}</span>
			<span className="review_report">
				<i className="report_icon fas fa-exclamation-circle" /> Report an abuse
			</span>
		</div>
	);
};

Review.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Review;
