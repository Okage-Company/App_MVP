import React, { useContext } from "react";
import "../../styles/business_profile.scss";
import { Context } from "../store/appContext";

const BusinessProfile = () => {
	const { store } = useContext(Context);

	return (
		<div>
			<h1>Businesses</h1>
			<div>Title</div>
			<div>
				{store.business.map((business, index) => {
					return (
						<div key={index}>
							<div>{business.id}</div>
							<div>{business.account_id}</div>
							<div>{business.cif}</div>
							<div>{business.centre_name}</div>
							<div>{business.schedule}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BusinessProfile;
