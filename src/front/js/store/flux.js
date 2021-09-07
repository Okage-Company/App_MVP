import { responsiveFontSizes } from "@material-ui/core";
import { ControlCameraOutlined } from "@material-ui/icons";

//Declaramos nuestras constantes

const BASE_URL = "https://3001-brown-roundworm-pv0d4gpt.ws-eu15.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: [],
			clientId: [],
			businessId: []
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
			},
			getBusinessId: id => {
				console.log(id);
				fetch(BASE_URL.concat("business/", id))
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ businessId: new Array(responseAsJson) });
						console.log(getStore().businessId);
					});
			},
			getUpdate: (dataUpdated, newUSer) => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./client/".concat(localStorage.getItem("tokenID")));
					}
				};
				fetch(getStore().BASE_URL.concat("business/", localStorage.getItem("tokenID")), {
					method: "PATCH",
					body: dataUpdated,
					headers: {
						"Sec-Fetch-Mode": "no-cors",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't update this user!");
						}
						return response.json();
						//console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
						if (newUser[0]) {
							setTimeout(() => {
								redirectToProfile();
							}, 2000);
						} else {
							redirectToProfile();
						}
					})
					.catch(function(error) {
						console.log("Somethin is wrong: \n", error);
					});
			}
		}
	};
};
export default getState;
