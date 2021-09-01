import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Delete from "../component/delete.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <Delete />;
};
