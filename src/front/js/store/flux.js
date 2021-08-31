import jwt_decode from "jwt-decode";

//localStorage es una variable que ya existe en el navegador, es decir no hay
//que declararla ni nada por el estilo.

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			BASE_URL: "https://brown-chicken-oj9mv0gl.ws-eu16.gitpod.io/",
			URL_API: "3001-https://brown-chicken-oj9mv0gl.ws-eu16.gitpod.io/api/",
			user: {},
			currentUser: {}
		},
		actions: {
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
				const tokenDecode = access_token => {
					let decoded = jwt_decode(access_token);
					return decoded;
				};
				//
				const setUserFromToken = access_token => {
					localStorage.setItem("tokenID", token.sub.id);
					localStorage.setItem("");
				};
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./profile/".concat(localStorage.getItem("tokenID")));
					}
				};

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
						localStorage.setItem("access_token", responseAsJson);
						const tokenDecoded = tokenDecode(responseAsJson);
						setUserFromToken(tokenDecoded);
						redirectToProfile();
					});
			},
			//LOGGIN FLUX
			getLogin: credentials => {
				const tokenDecode = access_token => {
					let decoded = jwt_decode(access_token);
					return decoded;
				};
				const setUserFromToken = access_token => {
					localStorage.setItem("tokenID", token.sub.id);
					localStorage.setItem("tokenName", token.sub.name);
				};
				const redirectToProfile = () => {
					if (localStorage.getItem("tokenID") != null) {
						location.replace("./profile/".concat(localStorage.getItem("tokenID")));
					}
				};
				fetch(getStore().URL_API.concat("login"), {
					method: "POST",
					body: "credentials",
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't get login!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						localStorage.setItem("access_token", responseAsJson);
						const tokenDecoded = tokenDecode(responseAsJson);
						setUserFromToken(tokenDecoded);
						redirectToProfile();
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
