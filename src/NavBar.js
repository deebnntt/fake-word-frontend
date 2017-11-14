import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="nav-bar">
					<NavLink to="/" exact>
						Home
					</NavLink>
						<br/>
					<NavLink to="/new" exact>
						Create New
					</NavLink> <br /> <br />
			</div>
		);
	}
}

export default NavBar;
