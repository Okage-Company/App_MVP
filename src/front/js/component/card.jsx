import React, { useContext } from "react"; // don't  forget useContext

import "../../styles/card.scss";

import { Context } from "../store/appContext"; // solo cuando es un componente :)

//un array con muchos objetos

const Card = () => {
	// dentro de la funcion / componente ejecutamos nuestro store :)
	const { store } = useContext(Context);
	return (
		<div className="card_container">
			<div className="card_image" />
			<div className="card_container_text">
				<span className="card_category">category</span>
				<span className="card_title">title</span>
				<span className="card_profile">profile</span>

				<span className="card_profile">
					{store.account.map((accountParameter, index) => {
						return (
							<div key={index}>
								<div>{accountParameter.adress}</div>
								<div>{accountParameter.last_name}</div>
							</div>
						);
					})}
				</span>
				{/* store.account está llamando al array de store account en flux
				le hacemos un map pa pillar lo que nos interesa */}

				<div className="card_container_footer">
					<span className="card_address">address</span>
					icon
				</div>
			</div>
		</div>
	);
};

// Card.propTypes = {
// 	image: PropTypes.string.isRequired,
// 	category: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	profile: PropTypes.string.isRequired,
// 	address: PropTypes.string.isRequired,
// 	icon: PropTypes.string.isRequired
// };

export default Card;