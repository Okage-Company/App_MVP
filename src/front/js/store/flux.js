const BASE_URL = "https://3001-https://jade-landfowl-bt5fq3uo.ws-eu16.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//lista donde se almacena todos los fetch que hagamos :)
			account: []
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
			deleteAccount: (id) =>{
				let token = localStorage.getItem("access_token")
				fetch(BASE_URL.concat("account/", id),{
					method:"DELETE", 
					headers:{
						"Content-Type": "application/json", Authorization: `Bearer ${token}`
					}})
				.then((response) => {
					if (!response.ok) {
						throw Error ("Account could not be deleted")
					}
					return response.json();
				})
				.then((responseAsJson)=>{
					//aquí iría una redirección a la página principal de la aplicación
				})
				.catch ((error) => {
					console.log(error)
				});
			}
		}
	};
};

export default getState;
