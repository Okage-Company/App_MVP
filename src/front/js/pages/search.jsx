import React, { useState, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import SelectCategory from "../component/selectCategory.jsx";
import SelectInsurance from "../component/selectInsurance.jsx";
import SelectLocation from "../component/selectLocation.jsx";
import Card from "../component/card.jsx";

import "../../styles/search.scss";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import LocationMenu from "../component/locationMenu.jsx";

const Search = () => {
	const { store, actions } = useContext(Context);
	const [openLocationMenu, setOpenLocationMenu] = useState(false);

	return (
		<Fragment>
			<div className="grid_container_search_page">
				<div className="sidebar_search_page">
					<div className="search_menu_container">
						<SelectLocation placeholder="Location" />
					</div>
					<div className="search_menu_container">
						<SelectCategory placeholder="Categories" />
					</div>
					<SelectInsurance placeholder="Insurance" />
					{/* <span className="search_menu_placeholder">Location</span>
						<span
							onClick={() => {
								setOpenLocationMenu(true);
							}}
							className="search_menu_arrow">
							<i className="fas fa-chevron-down"></i>
						</span>
						{openLocationMenu && <LocationMenu />} */}
				</div>
				<div className="map_search_page">
					<Map className="mapita" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[51.505, -0.09]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</Map>
				</div>
				<div className="main_search_page">
					<Card
						category="Healthcare, Psychology"
						title="ISEP Clinic Madrid"
						profile="ISEP Clinic"
						address="C/Jesús del Valle, 23, Bajo C"
						icon={<i className="card_icon far fa-heart" />}
					/>
					<Card
						category="Healthcare, Psychology"
						title="ISEP Clinic Madrid"
						profile="ISEP Clinic"
						address="C/Jesús del Valle, 23, Bajo C"
						icon={<i className="card_icon far fa-heart" />}
					/>
					<Card
						category="Healthcare, Psychology"
						title="ISEP Clinic Madrid"
						profile="ISEP Clinic"
						address="C/Jesús del Valle, 23, Bajo C"
						icon={<i className="card_icon far fa-heart" />}
					/>
					<Card
						category="Healthcare, Psychology"
						title="ISEP Clinic Madrid"
						profile="ISEP Clinic"
						address="C/Jesús del Valle, 23, Bajo C"
						icon={<i className="card_icon far fa-heart" />}
					/>
					<Card
						category="Healthcare, Psychology"
						title="ISEP Clinic Madrid"
						profile="ISEP Clinic"
						address="C/Jesús del Valle, 23, Bajo C"
						icon={<i className="card_icon far fa-heart" />}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Search;
