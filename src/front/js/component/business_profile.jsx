import React, { useContext, useEffect } from "react";
import PasswordUpdate from "./password.jsx";
import { Context } from "../store/appContext";
import "../../styles/client_profile.scss";
import { useParams } from "react-router-dom";
import { CallToActionSharp } from "@material-ui/icons";
import ButtonUploadImage from "./buttonUploadImage.jsx";

const Business_Profile = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	console.log(params);

	useEffect(() => {
		actions.getBusinessId(params.id);
	}, []);
	return (
		<div>
			{store.businessId.map((business, index) => {
				return (
					<div className="clientProfileContainer" key={index}>
						<div className="clientProfileSidebar">
							<div className="clientProfileSidebar">
								<div className="clientProfileImage"></div>
								<ButtonUploadImage />
							</div>
						</div>
						<div className="clientProfileMain">
							<div>
								<div className="clientProfileTitle">Your Profile</div>
							</div>
							<div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Centre Name</div>
										<div>{business.centre_name}</div>
									</div>
									<div className="dataContainerEdit">Edit</div>
								</div>
							</div>
							<div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">C.I.F</div>
											<div>{business.cif}</div>
										</div>
										<div className="dataContainerEdit">Edit</div>
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Schedule</div>
											<div>{business.schedule}</div>
										</div>
										<div className="dataContainerEdit">Edit</div>
									</div>
								</div>
							</div>
							<PasswordUpdate />
						</div>
					</div>
				);
			})}
			;
		</div>
	);
};

export default Business_Profile;
