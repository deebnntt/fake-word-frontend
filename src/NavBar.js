import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div className="Nav">
				<ul>
					<NavLink to="/" exact>
						Home
					</NavLink>
					<li />
					<li>
						<NavLink to="/new" exact>
							Create New
						</NavLink>
					</li>
					<li>
						<NavLink to="/list" exact>
							Definitions
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
