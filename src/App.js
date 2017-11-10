import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import DefinitionContainer from './DefinitionContainer.js';
import DefinitionList from './DefinitionList.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<h1 className="App-title">Fake Word App</h1>
					<Route exact path="/" render={() => <h1>Welcome</h1>} />
					<Route path="/" component={DefinitionContainer} />
					<Route exact path="/list" component={DefinitionList} />
				</div>
			</Router>
		);
	}
}

export default App;
