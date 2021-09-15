import React, { useEffect } from "react";
import { Fragment, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/myFavourites.scss";
import "../../styles/home.scss";
import Card from "../component/card.jsx";

const myFavourites = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.getFavouritesId(params.id);
	}, []);

	return (
		<Fragment>
			<div className="grid_container_myFavorites">
				<div className="sidebar_favorites_page">
					<div className="favorites_menu_container">
						<span className="my-favorites-title">Favourites</span>
						<div className="home_categories_text">
							<span>
								Keep your favorite services for later <i className="far fa-star"></i>
							</span>
						</div>
					</div>
				</div>
				<div className="main_favorites_page">
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
										image={account[i].photos}
										category={account[i].specialty}
										title={account[i].title_bus}
										profile={account[i].centre_name}
										address={account[i].adress}
										icon={<i className="fas fa-heart color-icon-heart"></i>}
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
