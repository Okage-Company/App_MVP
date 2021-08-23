import React from "react";
import PropTypes from "prop-types";

import "/workspace/react-flask-hello/src/front/styles/review.scss";

const Review = props => {
	return (
		<div className="review_container">
			<header>
				<div className="review_profile_image" />
				<div className="review_profile_text">
					<span className="review_name">Taloolah Winters</span>
					<span className="review_chat">
						<i className="fas fa-comment-dots" /> Send a message
					</span>
				</div>
			</header>
			<div className="review_title">
				<span className="review_star_icons">
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
				</span>
				<span className="review_title_text">My kids love it!</span>
			</div>
			<span className="review_date">24 Jun 2021</span>
			<span className="review_text">
				WONDERFUL service in an AMAZING setting! A totally recommendable experience if you want to disconnect
				from your bratty kids, they will take care of them and you can like go catch a movie or something. We
				fell in love with the great Wanda and the rest of...
			</span>
			<span className="review_keep_reading">Keep reading</span>
			<footer>
				<i className="report_icon fas fa-exclamation-circle" /> <span>Report an abuse</span>
			</footer>
		</div>
	);
};

Review.propTypes = {
	size: PropTypes.string,
	image: PropTypes.string,
	category: PropTypes.string,
	title: PropTypes.string,
	profile: PropTypes.string,
	address: PropTypes.string,
	icon: PropTypes.string
};

export default Review;
