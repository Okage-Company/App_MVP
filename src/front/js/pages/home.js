import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Client_Profile from "../component/client_profile.jsx";

//import Card from "/workspace/App_MVP/src/front/js/component/card.jsx";
//import StaffCard from "/workspace/App_MVP/src/front/js/component/staffCard.jsx";

export const Home = () => {
	return (
		<div>
			<Client_Profile />
		</div>
	);
};
