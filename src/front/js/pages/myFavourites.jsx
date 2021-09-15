import React, { useEffect } from "react";
import { Fragment, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/myServices.scss";
import Card from "../component/card.jsx";

const myFavourites = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.getFavouritesId(params.id);
	}, []);

	return (
		<Fragment>
			<div className="grid_container_myServices">
				<div className="sidebar_search_page">
					<div className="search_menu_container">
						<h6>Your Favourites</h6>
					</div>
				</div>
				<div className="main_search_page">
					{store.favouritesId.map((account, index) => {
						// console.log(account[4].id);
						console.log(account.length);
						console.log(account);
						console.log(Object.keys(account).length);
						const maxLength = Math.max.apply(null, Object.keys(account));
						console.log(maxLength);
						// Cambiar el .length por el MAX.
						const arrayF = [];
						for (let i = 1; i <= maxLength; i++) {
							if (account[i] != undefined) {
								arrayF.push(
									<Card
										key={i.toString()}
										i={i.toString()}
										category={account[i].specialty}
										title={account[i].title_bus}
										profile={account[i].professional_name}
										address={account[i].adress}
										icon={<i className="card_icon far fa-heart" />}
									/>
								);
							}
						}
						return arrayF;
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default myFavourites;
