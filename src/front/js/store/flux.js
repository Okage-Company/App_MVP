import { responsiveFontSizes } from "@material-ui/core";
import { ControlCameraOutlined } from "@material-ui/icons";
//Declaramos nuestrs
const BASE_URL = "https://3001-brown-roundworm-pv0d4gpt.ws-eu15.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: []
		},
		actions: {
			getAccount: async () => {
				console.log("fetch");
				try {
					let response = await fetch(BASE_URL.concat("account/<int:id>"));
					console.log("response", response);

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ account: responseAsJson });
						console.log(responseAsJson);
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};
export default getState;
