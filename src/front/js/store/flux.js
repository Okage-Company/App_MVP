import { responsiveFontSizes } from "@material-ui/core";
import { ControlCameraOutlined } from "@material-ui/icons";
import jwt_decode from "jwt-decode";

//localStorage es una variable que ya existe en el navegador, es decir no hay
//que declararla ni nada por el estilo.

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//lista donde se almacena todos los fetch que hagamos :)
			buservices: [],
			buservicesById: {},
			account: [],
			clientId: [],
			businessId: [],
			BASE_URL: "https://kumquat-stork-h2a6bqzx.ws-eu16.gitpod.io/",
			URL_API: "https://3001-kumquat-stork-h2a6bqzx.ws-eu16.gitpod.io/api/",
			user: {},
			currentUser: {}
		},
		actions: {
			getAccount: async () => {
				console.log("fetch");
				try {
					let response = await fetch(URL_API.concat("account/"));
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
			getBuservices: async () => {
				try {
					let response = await fetch(URL_API.concat("buservices/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ buservices: responseAsJson });
						console.log(responseAsJson); // respuesta que recibo de la API, important, para ver siempre el array en la consola pa sacar los datos :) nos da un array con muchos objetos
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getBuservicesById: async id => {
				try {
					let response = await fetch(BASE_URL.concat("buservices/", id));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ buservicesById: responseAsJson });
						console.log(responseAsJson); // respuesta que recibo de la API, important, para ver siempre el array en la consola pa sacar los datos :) nos da un array con muchos objetos
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getClientId: id => {
				console.log(id);
				fetch(getStore().URL_API.concat("account/", id))
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
				fetch(URL_API.concat("business/", id))
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
			verifyLogin: () => {
				if (!localStorage.getItem("access_token")) {
					location.replace(getStore().BASE_URL.concat("login"));
				}
			},
			isLoggedUser: () => {
				if (localStorage.getItem("access_token")) {
					location.replace(getStore().BASE_URL.concat("profile/", localStorage.getItem("tokenID")));
				}
			},
			//REGISTER FLUX
			getRegister: credentials => {
				//Decodificar el token
				console.log("Llega");
				const tokenDecode = access_token => {
					let decoded = jwt_decode(access_token);
					return decoded;
				};
				//
				const setUserFromToken = token => {
					localStorage.setItem("tokenID", token.sub.id);
					console.log(localStorage);
				};
				const redirectToHome = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./");
					}
				};
				console.log(credentials);
				fetch(getStore().URL_API.concat("register"), {
					method: "POST",
					headers: new Headers({
						"Content-type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}),
					body: credentials
				})
					.then(function(response) {
						console.log(response);
						if (!response.ok) {
							throw Error("This account can't be registered");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log("ya llegaaa", responseAsJson);
						localStorage.setItem("access_token", responseAsJson[1]);
						const tokenDecoded = tokenDecode(responseAsJson[1]);
						setUserFromToken(tokenDecoded);
						redirectToHome();
					})
					.catch(function(error) {
						console.log("There's a problem", error);
					});
			},
			getUpdateClient: (value, newUser, nameValue) => {
				const token = localStorage.getItem("access_token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./client/".concat(tokenID));
					}
				};
				let dataUpdated = {};
				dataUpdated[nameValue] = value;
				console.log(dataUpdated);
				fetch(getStore().URL_API.concat("client/", localStorage.getItem("tokenID")), {
					method: "PATCH",
					body: JSON.stringify(dataUpdated),
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
						console.log("Something is wrong: \n", error);
					});
			},
			getUpdate: (dataUpdated, newUser) => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./client/".concat(localStorage.getItem("tokenID")));
					}
				};
				fetch(getStore().URL_API.concat("business/", localStorage.getItem("tokenID")), {
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
			},
			//LOGGIN FLUX
			getLogin: credentials => {
				const tokenDecode = access_token => {
					let decoded = jwt_decode(access_token);
					return decoded;
				};
				const setUserFromToken = token => {
					localStorage.setItem("tokenID", token.sub.id);
				};
				const redirectToHome = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("../");
					}
				};
				console.log(credentials);
				fetch(getStore().URL_API.concat("login"), {
					method: "POST",
					body: credentials,
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("Login failed");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log("ya llegaaa", responseAsJson);
						localStorage.setItem("access_token", responseAsJson.token);
						const tokenDecoded = tokenDecode(responseAsJson.token);
						setUserFromToken(tokenDecoded);
						redirectToHome();
					})
					.catch(function(error) {
						alert("User/password incorrects");
						localStorage.removeItem("access_token");
					});
			}
		}
	};
};
export default getState;
