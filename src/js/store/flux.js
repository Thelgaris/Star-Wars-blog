const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			info: []
		},
		
		actions: {
			getcharacters: async() => {
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json()
				setStore({characters: data.results});
			},	
			getOnecharacter: async(uid) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
				const data = await response.json()
				console.log(data)
				
				setStore({info: data.result.properties});
				console.log(getStore().info)
			}	
		}
	};
};
export default getState;
