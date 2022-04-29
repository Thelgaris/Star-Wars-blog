import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = props => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();

	useEffect(() => {
		actions.getOnevehicle(uid)
	}, [])



	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src="https://picsum.photos/400/200" className="img-fluid" alt="Vehicle Image" style={{maxWidth: "80%", height: "auto"}}></img>
				</div>
				<div className="col-6">
					<h2> {console.log(store.vehicleInfo.name)} {store.vehicleInfo.name}</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
					
				</div>
			</div>
			<div className="row">
				<div className="col-2"><p>Name</p> <p>{store.vehicleInfo.name}</p></div>
				<div className="col-2"><p>Model</p> <p>{store.vehicleInfo.model}</p></div>
				<div className="col-2"><p>Crew</p> <p>{store.vehicleInfo.crew}</p></div>
				<div className="col-2"><p>Length</p> <p>{store.vehicleInfo.length}</p></div>
				<div className="col-2"><p>Vehicle Class</p> <p>{store.vehicleInfo.vehicle_class}</p></div>
				<div className="col-2"><p>Manufacturer</p> <p>{store.vehicleInfo.manufacturer}</p></div>
			</div>
		</div>
	);
};

Vehicle.propTypes = {
	match: PropTypes.object
};