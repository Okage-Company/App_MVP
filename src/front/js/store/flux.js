import { responsiveFontSizes } from "@material-ui/core";
//Declaramos nuestrs
const BASE_URL = "https://3001-brown-roundworm-pv0d4gpt.ws-eu16.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: []
		},
		actions: {
			getAccount: async () => {
				try {
					let response = await fetch(BASE_URL.concat("account/"));

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
