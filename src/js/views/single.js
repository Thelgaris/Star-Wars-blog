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
					<img src="..." className="img-fluid" alt="..." style={{maxWidth: "80%", height: "auto"}}>{}</img>
				</div>
				<div className="col-6">
					<p> {console.log(store.info.name)}
						{store.info.name}</p>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
