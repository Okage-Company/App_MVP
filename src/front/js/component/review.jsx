import React from "react";
import PropTypes from "prop-types";

import "/workspace/react-flask-hello/src/front/styles/review.scss";

const Review = props => {
	return (
		<div className="review_container">
			<header>
				<div className="review_profile_image" />
				<div className="review_profile_text">
					<span className="review_name">{props.name}</span>
					<span className="review_chat">
						<i className="fas fa-comment-dots" /> Send a message
					</span>
				</div>
			</header>
			<span className="review_date">{props.date}</span>
			<span className="review_text">{props.text}</span>
			<span className="review_report">
				<i className="report_icon fas fa-exclamation-circle" /> Report an abuse
			</span>
		</div>
	);
};

Review.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string
};

export default Review;
