import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Client_Profile from "./client_profile.jsx";

export const Home = () => {
	return (
		<div>
			<Client_Profile />
		</div>
	);
};
