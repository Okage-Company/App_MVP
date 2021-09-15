import React, { useState, useContext, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import SelectCategory from "../component/selectCategory.jsx";
import SelectInsurance from "../component/selectInsurance.jsx";
import SelectLocation from "../component/selectLocation.jsx";
import Card from "../component/card.jsx";
import CardTramp from "../component/cardTramp.jsx";
import { useParams } from "react-router";
import "../../styles/button.scss";
import "../../styles/search.scss";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import LocationMenu from "../component/locationMenu.jsx";
let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Search = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	const [openLocationMenu, setOpenLocationMenu] = useState(false);

	useEffect(() => {
		actions.getBuservices(params.id);
	}, []);

	return (
		<Fragment>
			<div className="grid_container_search_page">
				<div className="sidebar_search_page">
					<div>
						<div className="search_menu_container">
							<SelectLocation placeholder="Location" />
						</div>
					</div>
					<div>
						<div className="search_menu_container">
							<SelectCategory placeholder="Categories" />
						</div>
					</div>
					<div>
						<div className="search_menu_container">
							<SelectInsurance placeholder="Insurance" />
						</div>
					</div>
					<div className="seach_menu_submit">
						<div className="search_menu_container">
							<button
								className="button"
								type="submit"
								onClick={e => {
									e.preventDefault();
									if (e.target.value === "") {
										location.replace("/search");
									} else {
										actions.getBuservicesSearch(e.target.value);
									}
									// location.replace("/");
									// location.replace("/search");
								}}>
								Search
							</button>
						</div>
					</div>
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
					<Map className="mapita" center={[40.4258, -3.7038]} zoom={14} scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[40.4168, -3.7038]}>
							<Popup>ISEP Clinic</Popup>
						</Marker>
						<Marker position={[40.4168, -3.705]}>
							<Popup>Therapeutic Painting for Children</Popup>
						</Marker>
						<Marker position={[40.42, -3.7008]}>
							<Popup>Soccer Club</Popup>
						</Marker>
						<Marker position={[40.4248, -3.7018]}>
							<Popup>Swimming Weekends</Popup>
						</Marker>
						<Marker position={[40.4208, -3.7058]}>
							<Popup>Introduction to Meditation</Popup>
						</Marker>
						<Marker position={[40.4288, -3.7138]}>
							<Popup>Intensive Preschool ABA Services</Popup>
						</Marker>
						<Marker position={[40.4248, -3.7138]}>
							<Popup>Diagnostic for Children and Adults</Popup>
						</Marker>
						<Marker position={[40.4138, -3.6958]}>
							<Popup>English Trivia Nights</Popup>
						</Marker>
						<Marker position={[40.4138, -3.7138]}>
							<Popup>Speed Friending</Popup>
						</Marker>
						<Marker position={[40.4138, -3.7148]}>
							<Popup>French Catch Up!</Popup>
						</Marker>
					</Map>
				</div>
				<div className="main_search_page">
					{store.buservices.map((account, index) => {
						let ind = index + 1;
						return (
							<CardTramp
								image={account.photos}
								key={index.toString()}
								i={ind.toString()}
								category={account.specialty}
								title={account.title_bus}
								profile={account.centre_name}
								address={account.adress}
								// icon={<span onClick={() => changeHeart()}>{heartIcon}</span>}
								icon={<i className="far fa-heart"></i>}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Search;
