import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Card from "/workspace/react-flask-hello/src/front/js/component/card.jsx";

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
		</div>
	);
};
