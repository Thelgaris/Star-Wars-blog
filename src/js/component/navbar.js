import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<div class="dropdown">
  						<button class="btn btn-prymary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   						Favourites
  						</button>
  						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    					<li><a class="dropdown-item" href="#">Action</a></li>
    					<li><a class="dropdown-item" href="#">Another action</a></li>
    					<li><a class="dropdown-item" href="#">Something else here</a></li>
  						</ul>
				</div>
			</div>
		</nav>
	);
};
