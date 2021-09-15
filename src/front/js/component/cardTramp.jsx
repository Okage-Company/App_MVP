import React from "react"; // don't  forget useContext
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useState } from "react";
import { useParams } from "react-router";

import "../../styles/card.scss";

const CardTramp = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	const [heartIcon, setHeartIcon] = useState(<i className="far fa-heart heart-icon-class"></i>);
	const [fill, setFill] = useState(true);

	const changeHeart = () => {
		if (fill == true) {
			setHeartIcon(<i className="fas fa-heart color-icon-heart"></i>);
			setFill(false);
		} else {
			setHeartIcon(<i className="far fa-heart"></i>);
			setFill(true);
		}
	};

	const linkToBuserviceId = "/buservices/".concat(props.i);
	return (
		<div className="card_container">
			<Link className="link-card-search" to={linkToBuserviceId}>
				<div className="card_image">
					<img className="card_search_new_image" src={props.image}></img>
				</div>
				<div className="card_container_text">
					<span className="card_category">{props.category}</span>
					<span className="card_title">{props.title}</span>
					<span className="card_profile">{props.profile}</span>
					<div className="card_container_footer">
						<span className="card_address">{props.address}</span>
						<div
							className="card_icon"
							onClick={e => {
								e.preventDefault();
								changeHeart();
								actions.postFavouritesId(props.i);
							}}>
							{heartIcon}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

CardTramp.propTypes = {
	image: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	profile: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	icon: PropTypes.string,
	i: PropTypes.string.isRequired
};

export default CardTramp;
