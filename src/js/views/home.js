import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getcharacters();
  }, []);

  return (
	  <div>
	<h1>Star Wars characters</h1>
    <div className="grupo">
      
      {store.characters.map((character) => {
        return (
          <div className="" key={character.uid}>
            <div className="">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="CharacterImage" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">{}</p>
                  <Link to={"/single/" + character.uid}>
                    <button className="btn btn-primary">Get more info</button>
                  </Link>
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
