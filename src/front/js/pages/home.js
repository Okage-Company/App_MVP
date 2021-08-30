import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Card from "/workspace/react-flask-hello/src/front/js/component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{/* card_search_view */}
			<Card />
		</div>
	);
};
