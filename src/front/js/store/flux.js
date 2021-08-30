const BASE_URL = "https://3001-brown-chicken-oj9mv0gl.ws-eu16.gitpod.io/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			business: []
		},
		actions: {
			getBusiness: async () => {
				try {
					let response = await fetch(BASE_URL.concat("business/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ business: responseAsJson });
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
