const BASE_URL = "https://3001-cyan-catshark-l8ojkpuu.ws-eu15.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//lista donde se almacena todos los fetch que hagamos :)
			account: [],
			buservices: [],
			buservicesById: {}
		},
		actions: {
			//abrimos otra lista donde se llaman todos los fetch, una acción es hacer un fetch
			// asincrono, funcion que hace el GET ACCOUNT del BACK
			getAccount: async () => {
				try {
					let response = await fetch(BASE_URL.concat("account/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ account: responseAsJson });
						console.log(responseAsJson); // respuesta que recibo de la API, important, para ver siempre el array en la consola pa sacar los datos :) nos da un array con muchos objetos
					} else {
						throw new Error(response.statusText, "code", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getBuservices: async () => {
				try {
					let response = await fetch(BASE_URL.concat("buservices/"));

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
			}
		}
	};
};

export default getState;
