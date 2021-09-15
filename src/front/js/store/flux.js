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
			buservicesSearch: [],
			buservicesById: {},
			account: [],
			clientId: [],
			favouritesId: [],
			businessId: [],
			BASE_URL: "https://okage2.herokuapp.com/",
			URL_API: "https://okage2.herokuapp.com/api/",
			user: {},
			currentUser: {}
		},
		actions: {
			getAccount: async () => {
				try {
					let response = await fetch(getStore().URL_API.concat("account/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ account: responseAsJson });
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getBuservices: async () => {
				console.log("fetch");
				try {
					let response = await fetch(getStore().URL_API.concat("buservices/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ buservices: responseAsJson });
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getBuservicesSearch: async data => {
				console.log(data);
				try {
					let response = await fetch(getStore().URL_API.concat("buservices/search?q=", data));
					if (response.ok) {
						let responseAsJson = await response.json();
						console.log(responseAsJson);
						setStore({ buservices: responseAsJson });
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			deleteAccount: id => {
				let token = localStorage.getItem("access_token");
				fetch(getStore().BASE_URL.concat("account/", id), {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error("Account could not be deleted");
						}
						return response.json();
					})
					.then(responseAsJson => {
						//aquí iría una redirección a la página principal de la aplicación
					})
					.catch(error => {
						console.log(error);
					});
			},
			getBuservicesById: async id => {
				try {
					let response = await fetch(getStore().URL_API.concat("buservices/", id));

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
			getClientId: async id => {
				console.log(id);
				const token = localStorage.getItem("access_token");
				try {
					let response = await fetch(getStore().URL_API.concat("account/", id), {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`
						}
					});
					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ clientId: new Array(responseAsJson) });
						console.log(getStore().clientId);
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getFavouritesId: async id => {
				console.log(id);
				const token = localStorage.getItem("access_token");
				try {
					let response = await fetch(getStore().URL_API.concat("favourites/", id), {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`
						}
					});
					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ favouritesId: new Array(responseAsJson) });
						console.log(getStore().favouritesId[0]);
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			postFavouritesId: async buservice_id => {
				const token = localStorage.getItem("access_token");
				const tokenID = localStorage.getItem("tokenID");
				try {
					console.log("buservice", JSON.stringify(buservice_id));
					let response = await fetch(getStore().URL_API.concat("favourites/", tokenID), {
						method: "POST",
						body: JSON.stringify(buservice_id),
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`
						}
					});
					if (response.ok) {
						let responseAsJson = await response.json();
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getBusinessId: id => {
				console.log(id);
				const token = localStorage.getItem("access_token");
				const tokenID = localStorage.getItem("tokenID");
				fetch(getStore().URL_API.concat("account/", id), {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
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
				fetch(getStore().URL_API.concat("business/", id), {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ businessIdCif: new Array(responseAsJson) });
						console.log(getStore().businessIdCif);
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
					localStorage.setItem("tokenID", token.sub);
				};
				const redirectToHome = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace(getStore().BASE_URL.concat("profile/", localStorage.getItem("tokenID")));
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
						console.log("ya llegaaa", responseAsJson[1]);
						localStorage.setItem("access_token", responseAsJson[1]);
						console.log(tokenDecoded);
						const tokenDecoded = tokenDecode(responseAsJson[1]);
						setUserFromToken(tokenDecoded);
						redirectToHome();
					})
					.catch(function(error) {
						console.log("There's a problem", error);
					});
			},
			getUpdateClient: (value, nameValue) => {
				const token = localStorage.getItem("access_token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./".concat(tokenID));
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
						console.log(response);
						return response.json();
						//console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
						setTimeout(() => {
							redirectToProfile();
						}, 500);
					})
					.catch(function(error) {
						console.log("Something is wrong: \n", error);
					});
			},
			getUpdateBusiness: (value, nameValue) => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./".concat(tokenID));
					}
				};
				let dataUpdated = {};
				dataUpdated[nameValue] = value;

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
						setTimeout(() => {
							redirectToProfile();
						}, 500);
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
					localStorage.setItem("tokenID", token.sub);
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
