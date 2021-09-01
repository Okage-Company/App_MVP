import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import CardHome from "/workspace/react-flask-hello/src/front/js/component/cardHome.jsx";
import Button from "/workspace/react-flask-hello/src/front/js/component/button.jsx";
import { array } from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// Maleficent used her evil forces to make us make this map, probably the worst curse that's ever been cast ! Our heroes were able to do it, but the pain it caused will forever last...
	const cardHomeImages = [
		{
			service: "Arts",
			url:
				"https://images.pexels.com/photos/8613071/pexels-photo-8613071.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
		},
		{
			service: "Healthcare",
			url:
				"https://images.unsplash.com/photo-1598207951491-255eaf139751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
		},
		{
			service: "Languages",
			url:
				"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
		},
		{
			service: "Meditation",
			url:
				"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80"
		},
		{
			service: "Meetings",
			url:
				"https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
		},
		{
			service: "Psychology",
			url:
				"https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
		},
		{
			service: "Sports",
			url:
				"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
		}
	];

	const cardHomeMap = cardHomeImages.map((parameter, index) => {
		return <CardHome key={index} category={parameter.service} image={parameter.url} />;
	});

	return (
		<div className="grid_container">
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
				<div className="button_size">
					<Button text="Get started" />
				</div>
			</div>
			<div className="grid_container_banner">
				<div className="home_banner_text">
					It is for them <i className="fas fa-arrow-left"></i> it is for you <i className="far fa-star"></i>
				</div>
			</div>
			{/* card_home */}
			<div className="grid_container_card_home">
				{cardHomeMap}
				<div className="grid_container_card_home_button_container">
					<Button text="See more" />
					<div className="home_categories_text">
						You’d be surprised to see how many things you have near you.
					</div>
				</div>
			</div>
		</div>
	);
};
