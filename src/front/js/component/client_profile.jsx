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
						<div className="clientProfileSidebar">hello</div>
						<div className="clientProfileMain">
							<div>Client Profile</div>
							<div>
								<div>
									<p>User ID: {account.id}</p>
								</div>
								<div>
									<p>Name: {account.name}</p>{" "}
								</div>
								<div>
									<p>Last Name: {account.last_name}</p>{" "}
								</div>
								<div>
									<p>Phone: {account.phone}</p>{" "}
								</div>
								<div>{account.address}</div>
							</div>
						</div>
					</div>
				);
			})}
			;
		</div>
	);
};

export default Client_Profile;
