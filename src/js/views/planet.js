import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();

	useEffect(() => {
		actions.getOneplanet(uid)
	}, [])



	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src="https://picsum.photos/400/200" className="img-fluid" alt="Planet Image" style={{maxWidth: "80%", height: "auto"}}></img>
				</div>
				<div className="col-6">
					<h2> {console.log(store.planetInfo.name)} {store.planetInfo.name}</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
					
				</div>
			</div>
			<div className="row">
				<div className="col-2"><p>Name</p> <p>{store.planetInfo.name}</p></div>
                <div className="col-2"><p>Population</p> <p>{store.planetInfo.population}</p></div>
				<div className="col-2"><p>Climate</p> <p>{store.planetInfo.climate}</p></div>
				<div className="col-2"><p>Terrain</p> <p>{store.planetInfo.terrain}</p></div>
				<div className="col-2"><p>Gravity</p> <p>{store.planetInfo.gravity}</p></div>				
				<div className="col-2"><p>Diameter</p> <p>{store.planetInfo.diameter}</p></div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};