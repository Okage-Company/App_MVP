import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailPage.scss";
import Card from "../component/card.jsx";
import StaffCard from "../component/staffCard.jsx";
import Review from "../component/review.jsx";

import getState from "../store/flux.js";

const detailPage = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.getBuservices();
		actions.getBuservicesById(params.id);
	}, []);

	useEffect(() => {
		if (store.buservicesById) {
			console.log("something", store.buservicesById);
		}
	}, [store.buservicesById]);

	return (
		<Fragment>
			<div className="grid_container_detail_page">
				<div className="sidebar_detail_page">
					<div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="fas fa-star small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Services</span>
						</div>
						<span className="sidebar_list_element">{store.buservicesById.tecniques}</span>
					</div>
					<div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="fas fa-map-marker-alt small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Address</span>
						</div>
						<span className="sidebar_list_element">{store.buservicesById.adress}</span>
					</div>
					<div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="far fa-clock small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Hours</span>
						</div>
						<span className="sidebar_list_element">FETCH HORARIO</span>
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
								<span className="title_profile_service">{store.buservicesById.title_bus}</span>
								<span className="title_profile_service">
									{/* {store.buservicesById.business[0].centre_name} */}FETCH CENTRE NAME
								</span>
								<span className="tags_profile_service">{store.buservicesById.specialty}</span>
								<div className="main_detail_page_header_footer">
									<div>
										<i className="far fa-heart"></i>
										<span className="main_detail_page_header_footer_text">Save</span>
									</div>
								</div>
							</div>
						</div>
						<span>{store.buservicesById.description}</span>
					</div>
					<div className="staff_card_container_detail">
						<StaffCard
							name={store.buservicesById.professional_name}
							specialty={store.buservicesById.professional_techniques}
							studies={store.buservicesById.professional_studies}
							collegiateNumber={store.buservicesById.numero_colegiado}
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
						{/* {store.buservicesById.map((buservicesParameter, index) => {
							return (
								<Card
									key={index}
									category={buservicesParameter.specialty}
									title={buservicesParameter.title_bus}
									// user={store.buservicesById.userAquiii}
									address={buservicesParameter.adress}
									icon={<i className="card_icon far fa-heart" />}
								/>
							);
						})} */}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default detailPage;
