import React, { useContext } from "react";
import "../../styles/business_profile.scss";
import { Context } from "../store/appContext";

const BusinessProfile = () => {
	const { store } = useContext(Context);

	return (
		<div className="businessProfileContainer">
			<div className="businessProfileSidebar">Hello</div>
			<div className="businessProfileMain">
				<h1>Businesses</h1>
				<div>Title</div>
			</div>
		</div>
	);
};

export default BusinessProfile;
