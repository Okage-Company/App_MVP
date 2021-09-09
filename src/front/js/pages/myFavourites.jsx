import React from "react";
import { Fragment } from "react";
import "../../styles/myServices.scss";

const myFavourites = () => {
	return (
		<Fragment>
			<div className="grid_container_myServices">
				<div className="sidebar_search_page">
					<div className="search_menu_container">
						<h6>Your Favourites</h6>
						<p>Filter</p>
					</div>
				</div>
				<div className="main_search_page">Añadir todos los favoritos de un cliente logueado</div>
			</div>
		</Fragment>
	);
};

export default myFavourites;
