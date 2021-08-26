import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Card from "/workspace/App_MVP/src/front/js/component/card.jsx";
import StaffCard from "/workspace/App_MVP/src/front/js/component/staffCard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
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
