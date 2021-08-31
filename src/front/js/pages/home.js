import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/profile.scss";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
		</div>
	);
};
