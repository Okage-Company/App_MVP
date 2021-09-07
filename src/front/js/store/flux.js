
import { responsiveFontSizes } from "@material-ui/core";
import { ControlCameraOutlined } from "@material-ui/icons";
import jwt_decode from "jwt-decode";

//localStorage es una variable que ya existe en el navegador, es decir no hay
//que declararla ni nada por el estilo.

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: [],
			clientId: [],
			businessId: [],
      BASE_URL2: "https://3001-brown-roundworm-pv0d4gpt.ws-eu15.gitpod.io/api/",
      BASE_URL: "https://brown-chicken-oj9mv0gl.ws-eu15.gitpod.io/",
			URL_API: "https://3001-brown-chicken-oj9mv0gl.ws-eu15.gitpod.io/api/",
			user: {},
			currentUser: {}
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
					})
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
=======   });
  
  
  
  
  
  
  
  
          
          
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
						location.replace("./");
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
