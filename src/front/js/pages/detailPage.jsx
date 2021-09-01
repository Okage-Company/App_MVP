import React from "react";

import "../../styles/detailPage.scss";

const detailPage = () => {
	return (
		<div className="grid_container_detail_page">
			<div className="grid_container_title">
				<div className="home_title">
					<span className="home_title_text">We</span>
					<span className="home_title_text">
						<span className="home_title_text_background">grow</span>
					</span>
					<span className="home_title_text">together</span>
				</div>
				<div className="home_description">
					<span>
						Okage is dedicated to promoting services and solutions, across the spectrum and throughout the
						life span, for the needs of people with autism and their families.
					</span>
				</div>
				<div className="button_size"></div>
			</div>
			<div className="grid_container_banner">
				<div className="home_banner_text">
					It is for them <i className="fas fa-arrow-left"></i> it is for you <i className="far fa-star"></i>
				</div>
			</div>
			{/* card_home */}
			<div className="grid_container_card_home">
				<div className="grid_container_card_home_button_container">
					<div className="home_categories_text">
						You’d be surprised to see how many things you have near you.
					</div>
				</div>
			</div>
		</div>
	);
};

export default detailPage;
