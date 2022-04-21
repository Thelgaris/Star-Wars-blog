import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="container-fluid navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				
				<div className="btn-group">
  						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   						Favourites
  						</button>
  						<ul className="dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1" >
						  {store.favourites.map((item, index) =>{
							  return (
							  <li className="dropdown-item" key={index}>
								  <div className="row">
								  <div className="col-8">{item}</div> <div className="col-2"><button onClick={()=>actions.setFavourite(item)}>X</button></div>
								  </div>
								  </li>
							  )
						  })}
    					
    					
  						</ul>
				</div>
			</div>
		</nav>
	);
};
