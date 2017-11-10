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
		return this.state.definitions.map((def, index) => {
			if (def.word) {
				return (
					<div>
						<ul key="index">
							<h2>{def.word.word}</h2>
							<li>Part of Speech: {def.part_of_speech}</li>
							<li>Definition: {def.definition_text}</li>
							<li>Sentence: "{def.sentence}"</li>
						</ul>
					</div>
				);
			} else {
				return <p>loading...</p>;
			}
		});
	}

	render() {
		return <div>{this.displayDefinitions()}</div>;
	}
}
