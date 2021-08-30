import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import Card from "/workspace/react-flask-hello/src/front/js/component/card.jsx";
import Modal from "/workspace/react-flask-hello/src/front/js/component/modal.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);

	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			{/* card_search_view */}
			<Card />
			<button
				className="open_modal_button"
				onClick={() => {
					setOpenModal(true);
				}}>
				Eat my shorts
			</button>
			{openModal && <Modal />}
		</div>
	);
};
