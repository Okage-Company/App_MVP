import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/client_profile.scss";

const Client_Profile = () => {
	const { store } = useContext(Context);
	return (
		<div>
			{store.account.map((account, index) => {
				return (
					<div className="clientProfileContainer" key={index}>
						<div className="clientProfileSidebar">
							<div className="clientProfileSidebar">
								<div className="clientProfileImage"></div>
							</div>
						</div>
						<div className="clientProfileMain">
							<div>
								<div className="clientProfileTitle">Your Profile</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Name</div>
										<div>{account.name}</div>
									</div>
									<div className="dataContainerEdit">Edit</div>
								</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Last Name</div>
										<div>{account.last_name}</div>
									</div>
									<div className="dataContainerEdit">Edit</div>
								</div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Email</div>
										<div>{account.email}</div>
									</div>
									<div className="dataContainerEdit">Edit</div>
								</div>
							</div>
							<div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Province</div>
										<div>{account.province}</div>
									</div>
									<div className="dataContainerEdit">Edit</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Post Code</div>
											<div>{account.post_code}</div>
										</div>
										<div className="dataContainerEdit">Edit</div>
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Address</div>
											<div>{account.adress}</div>
										</div>
										<div className="dataContainerEdit">Edit</div>
									</div>
								</div>
								<div>
									<div className="dataContainer">
										<div>
											<div className="dataContainerTitle">Phone</div>
											<div>{account.phone}</div>
										</div>
										<div className="dataContainerEdit">Edit</div>
									</div>
								</div>
							</div>
							<div>Password Update</div>
							<div>
								<div className="dataContainer">
									<div>
										<div className="dataContainerTitle">Current Password</div>
										<div>{account._password}</div>
									</div>
									<div className="dataContainerEdit">Edit</div>
								</div>
							</div>
							<div>
								<p>New Password {account._new_password}</p>{" "}
							</div>
							<div>
								<p>Confirm New Password: {account._new_password}</p>{" "}
							</div>
							<button>Update</button>
						</div>
					</div>
				);
			})}
			;
		</div>
	);
};

export default Client_Profile;
