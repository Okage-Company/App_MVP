import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailPage.scss";
import Card from "../component/card.jsx";
import StaffCard from "../component/staffCard.jsx";
import Review from "../component/review.jsx";

import getState from "../store/flux.js";
import Gallery from "../component/gallery.jsx";

const detailPage = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.getBuservicesById(params.id);
	}, []);

	return (
		<Fragment>
			<div className="grid_container_detail_page">
				<div className="detail_page_gallery">
					<Gallery img1={store.buservicesById.photos} img2={store.buservicesById.tecniques} />
				</div>
				<div className="sidebar_detail_page">
					{/* <div className="sidebar_detail_page_section">
						<div className="sidebar_title_section">
							<i className="fas fa-star small_icon_sidebar"></i>
							<span className="sidebar_list_element_title">Services</span>
						</div>
						<span className="sidebar_list_element">{store.buservicesById.tecniques}</span>
					</div> */}
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
						<span className="sidebar_list_element">Mon–Fri from 9:00–21:00</span>
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
						{/* <div className="sidebar_list_contact_element">
							<span className="sidebar_list_element_contact">Mobile</span>
							<span className="sidebar_list_element_contact_value">661320786</span>
						</div> */}
						<div className="sidebar_list_contact_element">
							<span className="sidebar_list_element_contact">Mail</span>
							<span className="sidebar_list_element_contact_value">{store.buservicesById.email}</span>
						</div>
					</div>
				</div>
				<div className="main_detail_page">
					<div className="ay-no-se">
						<div className="main_detail_page_header">
							<div className="main_detail_page_header_image">
								<img className="profile_centre_new_image" src={store.buservicesById.cif}></img>
							</div>
							<div className="main_detail_page_header_body">
								<span className="title_profile_service">{store.buservicesById.title_bus}</span>
								<span className="title_profile_centre">{store.buservicesById.centre_name}</span>
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
							image={store.buservicesById.professional_techniques}
							name={store.buservicesById.professional_name}
							// specialty={store.buservicesById.professional_techniques}
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
						<Review
							name="Rebecca Black"
							image="https://i1.wp.com/hipertextual.com/wp-content/uploads/2011/06/450x364-alg_rebecca_black.jpg?fit=450%2C364&ssl=1"
							text="Excellent service. After my experience with them, I recommend it."
						/>
						<Review
							name="Fernando Avilés"
							image="https://i.ibb.co/7zvQ4Xp/Screenshot-2021-08-19-at-15-10-12.png"
							text="An extraordinary center, great professionals and a great human quality. Thanks to the team and especially to Cuca, they have made our lives easier."
						/>
						<Review
							name="Diego Lopez Zorita"
							image="https://i.ibb.co/Gd6G8WD/Screenshot-2021-09-14-at-19-10-30.png"
							text="Excellent attention and the professionalism of its professionals, in particular Marta Múgica, who has managed to strengthen our son's knowledge, sensitivity and self-esteem. And the direction in charge of Cuca, who is a professional reference in the sector, and should also be due to the love and attention that he gives us to children and parents. Thank you!"
						/>
						<Review
							name="Kim Ji-soo"
							image="https://espanol.news24viral.com/wp-content/uploads/2020/06/Esto-es-lo-que-realmente-vale-Jisoo-de-BlackPink.jpg"
							text="As a psychologist I recommend this clinic 100%, they have a multidisciplinary team in constant training, applying therapies that have proven to be effective, and all characterized by a humane and patient-centered treatment. Both in the area of ​​children and adolescents and adults are at the forefront."
						/>
					</div>
				</div>
				{/* <div className="review_detail_more_services">
					<div className="card_section_title_detail"><span>More by ISEP Clinic</span></div>
					<div className="review_detail_more_services_inside">
						{store.buservicesById.map((buservicesParameter, index) => {
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
						})}
					</div>
				</div> */}
			</div>
		</Fragment>
	);
};

export default detailPage;
