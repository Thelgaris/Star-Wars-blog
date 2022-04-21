const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      info: [],
      favourites: [],
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
      getPlanets: async () => {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const data = await response.json();
        setStore({ characters: data.results });
      },
      getOnecPlanet: async (uid) => {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${uid}`
        );
        const data = await response.json();
        console.log(data);
        setStore({ info: data.result.properties });
        console.log(getStore().info);
      },
    },
  };
};
export default getState;
