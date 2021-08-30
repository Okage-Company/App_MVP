import React, { useContext } from "react";
import "../../styles/business_profile.scss";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const BusinessProfile = () => {
	const { store } = useContext(Context);
	return (
		<div>
			<h1>Businesses</h1>
			<div>Title</div>
			<div>
				{store.business.map(business => {
					return (
						<div key={business.id}>
							{business.id}
							{business.account_id}
							{business.cif}
							{business.centre_name}
							{business.schedule}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BusinessProfile;
