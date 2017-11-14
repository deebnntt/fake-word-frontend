import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import DefinitionContainer from './DefinitionContainer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<h1 className="App-title">Fake Word App</h1>
					<NavBar />
					<Route path="/" component={DefinitionContainer}/>
				</div>
			</Router>
		);
	}
}

export default App;
