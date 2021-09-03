import { responsiveFontSizes } from "@material-ui/core";
import { ControlCameraOutlined } from "@material-ui/icons";

//Declaramos nuestras constantes

const BASE_URL = "https://3001-brown-roundworm-pv0d4gpt.ws-eu16.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: [],
			clientId: []
		},
		actions: {
			getAccount: async () => {
				console.log("fetch");
				try {
					let response = await fetch(BASE_URL.concat("account/"));
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
			},
			getClientId: id => {
				console.log(id);
				fetch(BASE_URL.concat("account/", id))
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ clientId: new Array(responseAsJson) });
						console.log(getStore().clientId);
					});
			}
		}
	};
};
export default getState;
