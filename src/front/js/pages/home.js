import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Review from "/workspace/react-flask-hello/src/front/js/component/review.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Review
				name="Taloolah Winters"
				date="24 Jun 2021"
				text="WONDERFUL service in an AMAZING setting! A totally recommendable experience if you want to disconnect from your bratty kids, they will take care of them and you can like go catch a movie or something."
			/>
		</div>
	);
};
