import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Button from "../component/button.jsx";
import Gallery from "../component/gallery.jsx";

import Card from "/workspace/react-flask-hello/src/front/js/component/card.jsx";
import StaffCard from "/workspace/react-flask-hello/src/front/js/component/staffCard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
<<<<<<< HEAD
		<div className="text-center mt-5">
			<Button />
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
			<Gallery />
=======
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
>>>>>>> fe73792420548444915709473675c48e4199d9f3
		</div>
	);
};
