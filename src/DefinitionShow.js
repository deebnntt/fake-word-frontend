import React from 'react';

export default class DefinitionShow extends React.Component {
	componentDidMount() {}

	displayDefinitions = () => {
		if (this.props.definition) {
			console.log(this.props.definition);
			return (
				<div>
					<ul>
						<h3>{this.props.definition.word.word}</h3>
						<li>Part of Speech: {this.props.definition.part_of_speech}</li>
						<li>Definition: {this.props.definition.definition_text}</li>
						<li>Sentence: {this.props.definition.sentence}</li>
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
