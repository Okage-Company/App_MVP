import React from "react";
import { Fragment } from "react";
import "../../styles/myServices.scss";

const myServices = () => {
	return (
		<Fragment>
			<div className="grid_container_myServices">
				<div className="sidebar_search_page">
					<div className="search_menu_container">
						<h6>Your Services</h6>
						<p>Active</p>
						<p>Disabled</p>
						<button>Create new +</button>
					</div>
				</div>
				<div className="main_search_page">Aquí hay que hacer un map del back de Paloma</div>
			</div>
		</Fragment>
	);
};

export default myServices;
