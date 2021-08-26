import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Card from "/workspace/react-flask-hello/src/front/js/component/card.jsx";
import CardHome from "/workspace/react-flask-hello/src/front/js/component/cardHome.jsx";
import StaffCard from "/workspace/react-flask-hello/src/front/js/component/staffCard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="grid-container">
			<span>Here write something</span>
			<div className="home_title">
				<span className="home_title_text">A new</span>
				<span className="home_title_text">pulse of</span>
				<span className="home_title_text">dream</span>
			</div>
			<span>
				Okage is dedicated to promoting services and solutions, across the spectrum and throughout the life
				span, for the needs of people with autism and their families.
			</span>
			{/* card_home */}
			<CardHome category="Healthcare" />

			{/* card_search_view */}
			<Card
				category="Healthcare, Psychology"
				title="ISEP Clinic Madrid"
				profile="ISEP Clinic"
				address="C/Jesús del Valle, 23, Bajo C"
				icon={<i className="card_icon far fa-heart" />}
			/>

			{/* card_your_services */}
			<Card
				category="Healthcare, Psychology"
				title="ISEP Clinic Madrid"
				address="C/Jesús del Valle, 23, Bajo C"
				icon={<i className="card_icon fas fa-cog" />}
			/>

			{/* card_detail_view_more_services */}
			<Card
				category="Healthcare, Psychology"
				title="ISEP Clinic Madrid"
				address="C/Jesús del Valle, 23, Bajo C"
				icon={<i className="card_icon far fa-heart" />}
			/>

			{/* card_staff */}
			<StaffCard
				name="María Placer Trujillo"
				specialty="Child psychology, Couple therapy, Neurologist, Sexology"
				studies="Diploma in Speech Therapy. Expert in Early Childhood Education. Master in Neurological Damage."
				collegiateNumber="29/1376"
			/>
		</div>
	);
};
