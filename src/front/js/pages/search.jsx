import React, { useState, useContext, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import SelectCategory from "../component/selectCategory.jsx";
import SelectInsurance from "../component/selectInsurance.jsx";
import SelectLocation from "../component/selectLocation.jsx";
import Card from "../component/card.jsx";
import { useParams } from "react-router";
import "../../styles/button.scss";
import Button from "../component/button.jsx";
import { Link } from "react-router-dom";

import "../../styles/search.scss";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import LocationMenu from "../component/locationMenu.jsx";

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
						<h5>
							<span className="h6">Location</span>
						</h5>
						<div className="search_menu_container">
							<SelectLocation placeholder="Location" />
						</div>
					</div>
					<div>
						<h5>
							<span className="h6">Category</span>
						</h5>
						<div className="search_menu_container">
							<SelectCategory placeholder="Categories" />
						</div>
					</div>
					<div>
						<h5>
							<span className="h6">Insurance</span>
						</h5>
						<div className="search_menu_container"></div>
						<SelectInsurance placeholder="Insurance" />
					</div>
					<div className="seach_menu_submit">
						<div className="search_menu_container">
							<button
								className="button"
								type="button"
								onClick={e => {
									e.preventDefault();
									location.replace("/");
									location.replace("/search");
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
					{store.buservices.map((account, index) => {
						let ind = index + 1;
						return (
							<Card
								key={index.toString()}
								i={ind.toString()}
								category={account.specialty}
								title={account.title_bus}
								profile={account.professional_name}
								address={account.adress}
								icon={<i className="card_icon far fa-heart" />}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Search;
