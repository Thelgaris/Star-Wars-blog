const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      info: [],
      favourites: [],
      planets: [],
      planetInfo: [],
      vehicles: [],
      vehicleInfo: [],
      characterImg: [],
      getOnecharacImg: []
      
    },

    actions: {
      getcharacters: async () => {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();
        setStore({ characters: data.results });
      },
      getOnecharacter: async (uid) => {
        const response = await fetch(
          `https://www.swapi.tech/api/people/${uid}`
        );
        const data = await response.json();
        console.log(data);
        setStore({ info: data.result.properties });
        console.log(getStore().info);
      },
      setFavourite: async (item) => {
        const store = getStore();
        if (!store.favourites.includes(item)) {
          setStore({ favourites: [...store.favourites, item] });
        }else{
			// let remove = []
			// for (let index = 0; index < store.favourites.length; index++) {
			// 	const favourite = store.favourites[index];
			// 	if(item != favourite){remove.push(favourite)}
			// }
			setStore({ favourites: store.favourites.filter( (fav)=> fav != item)  });
		}
      },
      getplanets: async () => {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const data = await response.json();
        setStore({ planets: data.results });
      },
      getOneplanet: async (uid) => {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${uid}`
        );
        const data = await response.json();
        console.log(data);
        setStore({ planetInfo: data.result.properties });
        console.log(getStore().planetInfo);
      },
      getvehicles: async () => {
        const response = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await response.json();
        setStore({ vehicles: data.results });
      },
      getOnevehicle: async (uid) => {
        const response = await fetch(
          `https://www.swapi.tech/api/vehicles/${uid}`
        );
        const data = await response.json();
        console.log(data);
        setStore({ vehicleInfo: data.result.properties });
        console.log(getStore().vehicleInfo);
      },

      getcharacterImg: async () => {
        const response = await fetch("https://starwars-visualguide.com/#/characters/page=1");
        const data = await response.json();
        setStore({ characterImg: data.results });
        console.log(getStore().characterImg);
      },

      getOnecharacImg: async (uid) => {
        const response = await fetch(
          `https://starwars-visualguide.com/#/characters/${uid}`
        );
        const data = await response.json();
        console.log(data);
        setStore({ getOnecharacImg: data.result.properties });
        console.log(getStore().getOnecharacImg);
      },
    },
  };
};
export default getState;
