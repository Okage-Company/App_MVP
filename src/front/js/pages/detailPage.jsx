import React, { Fragment } from "react";

import "../../styles/detailPage.scss";
import Card from "/workspace/react-flask-hello/src/front/js/component/card.jsx";
import StaffCard from "/workspace/react-flask-hello/src/front/js/component/staffCard.jsx";
import Review from "/workspace/react-flask-hello/src/front/js/component/review.jsx";

import getState from "/workspace/react-flask-hello/src/front/js/store/flux.js";

const detailPage = () => {
	// useEffect(() => {
	// 	state.actions.getServices(); // <---- calling this function from the flux.js actions
	// }, []);

	return (
		<Fragment>
			<div className="grid_container_detail_page">
				<div className="sidebar_detail_page">
					<div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="fas fa-star small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Services</span>
						</div>
						<span className="sidebar_list_element">Children psychology</span>
						<span className="sidebar_list_element">Couple therapy</span>
						<span className="sidebar_list_element">Neuropsychology</span>
						<span className="sidebar_list_element">Psychology</span>
						<span className="sidebar_list_element">Psychopedagogy</span>
						<span className="sidebar_list_element">Sexology</span>
						<span className="sidebar_list_element">Speech therapy</span>
					</div>
					<div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="fas fa-map-marker-alt small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Address</span>
						</div>
						<span className="sidebar_list_element">C/del Chorro Fantasma 23, Madrid.</span>
					</div>
					<div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="far fa-clock small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Hours</span>
						</div>
						<span className="sidebar_list_element">10:00 a 20:00</span>
					</div>
					<div className="sidebar_detail_page_section_last">
						<div className="sidebar_title_section">
							<i className="fas fa-phone small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Contact</span>
						</div>
						<div className="sidebar_list_contact_element">
							<span className="sidebar_list_element_contact">Phone</span>
							<span className="sidebar_list_element_contact_value">915 908 364</span>
						</div>
						<div className="sidebar_list_contact_element">
							<span className="sidebar_list_element_contact">Mobile</span>
							<span className="sidebar_list_element_contact_value">661320786</span>
						</div>
						<div className="sidebar_list_contact_element">
							<span className="sidebar_list_element_contact">Mail</span>
							<span className="sidebar_list_element_contact_value">hasta@el.papo</span>
						</div>
					</div>
				</div>
				<div className="main_detail_page">
					<div className="ay-no-se">
						<div className="main_detail_page_header">
							<div className="main_detail_page_header_image" />
							<div className="main_detail_page_header_body">
								<span className="title_profile_service">ISEP Clinic Madrid</span>
								<span className="tags_profile_service">Children, Healthcare, Psychology</span>
								<div className="main_detail_page_header_footer">
									<div>
										<i className="far fa-comment-alt"></i>
										<span className="main_detail_page_header_footer_text">72 Reviews</span>
									</div>
									<div className="main_detail_page_footer_margin">
										<i className="far fa-heart"></i>
										<span className="main_detail_page_header_footer_text">Save</span>
									</div>
								</div>
							</div>
						</div>
						<span>
							Here at ISEP Clinic we are specialized in counseling, evaluation and treatment of emotional,
							learning and health problems. A task that we began in 1982 with the opening of our first
							office in Barcelona. Today, we are the largest network of psychological, psychopedagogical
							and speech therapy centers. Thanks to multidisciplinary care, we carry out personalized
							treatments for each of our patients in all areas that affect a better quality of life.
						</span>
					</div>
					<div className="staff_card_container_detail">
						<StaffCard
							name="María Placer Trujillo"
							specialty="Child psychology, Couple therapy, Neurologist, Sexology"
							studies="Diploma in Speech Therapy. Expert in Early Childhood Education. Master in Neurological Damage."
							collegiateNumber="29/1376"
						/>
					</div>
				</div>
				<div className="review_detail_page">
					<div className="card_section_title_detail">
						<span>Reviews</span>
					</div>
					<div className="review_detail_page_inside">
						<Review name="Fernando Avilés" date="04 Jun 2021" text="I didn't like that shit." />
						<Review name="Fernando Avilés" date="04 Jun 2021" text="I didn't like that shit." />
						<Review name="Fernando Avilés" date="04 Jun 2021" text="I didn't like that shit." />
					</div>
				</div>
				<div className="review_detail_more_services">
					<div className="card_section_title_detail">
						<span>More by ISEP Clinic</span>
					</div>
					<div className="review_detail_more_services_inside">
						<Card
							category="Healthcare, Psychology"
							title="ISEP Clinic Madrid"
							address="C/Jesús del Valle, 23, Bajo C"
							icon={<i className="card_icon far fa-heart" />}
						/>
						<Card
							category="Healthcare, Psychology"
							title="ISEP Clinic Madrid"
							address="C/Jesús del Valle, 23, Bajo C"
							icon={<i className="card_icon far fa-heart" />}
						/>
						<Card
							category="Healthcare, Psychology"
							title="ISEP Clinic Madrid"
							address="C/Jesús del Valle, 23, Bajo C"
							icon={<i className="card_icon far fa-heart" />}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default detailPage;
