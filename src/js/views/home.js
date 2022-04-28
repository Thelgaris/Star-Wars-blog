import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getcharacters();
    actions.getplanets();
    actions.getvehicles();
    actions.getcharacterImg();
  }, []);

  return (
    <div className="body">
      <div className="characters">
        <h1>Characters</h1>
        <div className="grupo">
          {store.characters.map((character) => {
            return (
              <div className="" key={character.uid}>
                <div className="">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/characters/" +
                        character.uid +
                        ".jpg"
                      }
                      className="card-img-top img-responsive"
                      alt="CharacterImage"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{character.name}</h5>
                      <Link to={"/single/" + character.uid}>
                        <button className="btn btn-outline-info">
                          Learn more!
                        </button>
                      </Link>

                      <button
                        className="btn btn-outline-info"
                        onClick={() => {
                          actions.setFavourite(character.name);
                        }}
                      >
                        Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Planets">
        <h1>Planets</h1>
        <div className="grupo">
          {store.planets.map((planet) => {
            return (
              <div className="" key={planet.uid}>
                <div className="">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/planets/" +
                        planet.uid +
                        ".jpg"
                      }
                      className="card-img-top img-responsive"
                      alt="PlanetImage"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{planet.name}</h5>
                      <Link to={"/planet/" + planet.uid}>
                        <button className="btn btn-outline-info">
                          Learn more!
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-info"
                        onClick={() => {
                          actions.setFavourite(planet.name);
                        }}
                      >
                        Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Vehicles">
        <h1>Vehicles</h1>
        <div className="grupo">
          {store.vehicles.map((vehicle) => {
            return (
              <div className="" key={vehicle.uid}>
                <div className="">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/vehicles/" +
                        vehicle.uid +
                        ".jpg"
                      }
                      className="card-img-top img-responsive"
                      alt="CharacterImage"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{vehicle.name}</h5>
                      <Link to={"/vehicle/" + vehicle.uid}>
                        <button className="btn btn-outline-info">
                          Learn more!
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-info"
                        onClick={() => {
                          actions.setFavourite(vehicle.name);
                        }}
                      >
                        Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
