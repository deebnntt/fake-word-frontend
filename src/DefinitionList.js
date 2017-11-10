import React from 'react';
import { fetchDefinitions } from './fetch.js';

export default class DefinitionList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			definitions: [{}]
		};
	}

	componentDidMount() {
		fetchDefinitions().then(json =>
			this.setState({
				definitions: json
			})
		);
	}

	displayDefinitions() {
		return this.state.definitions.map(def => {
			return (
				<div>
					<ul>
						<li>{def.part_of_speech}</li>
						<li>{def.definition_text}</li>
						<li>{def.sentence}</li>
					</ul>
				</div>
			);
		});
	}

	render() {
		return <div>{this.displayDefinitions()}</div>;
	}
}
