import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Review from "/workspace/react-flask-hello/src/front/js/component/review.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Review />
		</div>
	);
};
