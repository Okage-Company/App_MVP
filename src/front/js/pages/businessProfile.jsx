import React, { useContext } from "react";
import "../../styles/businessProfile.scss";
import { Context } from "../store/appContext";
import ButtonUploadImage from "../component/buttonUploadImage.jsx";

const BusinessProfile = () => {
	const { store } = useContext(Context);

	return (
		<div className="businessProfileContainer">
			<div className="businessProfileSidebar">
				<div className="businessProfileImage"></div>
				<div className="buttonProfileUpload">
					<ButtonUploadImage />
				</div>
			</div>
			<div className="businessProfileMain">
				<div className="businessProfileTitle">Your Profile</div>
				<div className="dataContainer">
					<div>
						<div className="dataContainerTitle">Name</div>
						<div>Fernando</div>
					</div>
					<div className="dataContainerEdit">Edit</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessProfile;
