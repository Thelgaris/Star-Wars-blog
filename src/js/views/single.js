import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();

	useEffect(() => {
		actions.getOnecharacter(uid)
		
	}, [])



	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src="" className="img-fluid" alt="Character Image" style={{maxWidth: "80%", height: "auto"}}></img>
				</div>
				<div className="col-6">
					<h2> {console.log(store.info.name)} {store.info.name}</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
					
				</div>
			</div>
			<div className="row">
				<div className="col-2"><p>Name</p> <p>{store.info.name}</p></div>
				<div className="col-2"><p>Year of Birth</p> <p>{store.info.birth_year}</p></div>
				<div className="col-2"><p>Gender</p> <p>{store.info.gender}</p></div>
				<div className="col-2"><p>Height</p> <p>{store.info.height}</p></div>
				<div className="col-2"><p>Skin color</p> <p>{store.info.skin_color}</p></div>
				<div className="col-2"><p>Eye color</p> <p>{store.info.eye_color}</p></div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
