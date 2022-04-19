import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { favourite, setFavourite } = useState([]);

  useEffect(() => {
    actions.getcharacters();
  }, []);
 


  return (
	  <div>
	<h1>Characters</h1>
    <div className="grupo">
      
      {store.characters.map((character) => {
		 
        return (
          <div className="" key={character.uid}>
            <div className="">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top img-responsive" alt="CharacterImage" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">{store.info.gender}</p>
				  <p className="card-text">{store.info.hair_color}</p>
				  <p className="card-text">{store.info.eye_color}</p>
                  <Link to={"/single/" + character.uid}>
                    <button className="btn btn-outline-info">Learn more!</button>
                  </Link>
				  
                    <button className="btn btn-outline-info" onClick={()=>{
							
							console.log(character.uid);
					}}>Favourite</button>
                  
                </div>
              </div>
            </div>
          </div>
        );
      })}

    </div>

	</div>
  );
};
