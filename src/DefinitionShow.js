import React from 'react';

export default class DefinitionShow extends React.Component {
	state = {
		definition: { word: {} }
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`http://localhost:3000/api/v1/definitions/${id}`)
			.then(res => res.json())
			.then(json => {
				this.setState(
					{
						definition: json
					},
					() => {
						console.log(
							'this',
							this,
							'this.state',
							this.state,
							'this.state.definition',
							this.state.definition
						);
					}
				);
			});
	}

	displayDefinitions = () => {
		if (this.state.definition) {
			return (
				<div>
					<ul>
						<h3>{this.state.definition.word.word}</h3>
						<li>Part of Speech: {this.state.definition.part_of_speech}</li>
						<li>Definition: {this.state.definition.definition_text}</li>
						<li>Sentence: {this.state.definition.sentence}</li>
					</ul>
				</div>
			);
		} else {
		}
		return null;
	};

	render() {
		return <div>{this.displayDefinitions()}</div>;
	}
}
