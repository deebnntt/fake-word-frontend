import React, { Component } from 'react';

export default class DefinitionForm extends React.Component {
	state = {
		word: '',
		partOfSpeech: '',
		definition: '',
		sentence: ''
	};

	handleSubmit = event => {
		event.preventDefault();
		let defObj = {
			part_of_speech: this.state.partOfSpeech,
			definition_text: this.state.definition,
			sentence: this.state.sentence
		};
		this.props.onAdd(defObj);
		this.setState({
			word: '',
			partOfSpeech: '',
			definition: '',
			sentence: ''
		});
	};

	handlePartOfSpeech = event => {
		this.setState({
			partOfSpeech: event.target.value
		});
	};

	handleDefintion = event => {
		this.setState({
			definition: event.target.value
		});
	};

	handleSentence = event => {
		this.setState({
			sentence: event.target.value
		});
	};

	render() {
		return (
			<div className="chunk">
				<h2 className="top-word">{this.props.displayWord()}</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="radio"
						name="part-of-speech"
						value="noun"
						onChange={this.handlePartOfSpeech}
					/>{' '}
					noun<br />
					<input
						type="radio"
						name="part-of-speech"
						value="verb"
						onChange={this.handlePartOfSpeech}
					/>{' '}
					verb<br />
					<input
						type="radio"
						name="part-of-speech"
						value="adjective"
						onChange={this.handlePartOfSpeech}
					/>{' '}
					adjective<br />
					<textarea
						placeholder="Enter your definition here"
						value={this.state.definition}
						onChange={this.handleDefintion}
					/>
					<br />
					<textarea
						placeholder="Enter your sentence here"
						value={this.state.sentence}
						onChange={this.handleSentence}
					/>
					<br />
					<input className="button" type="submit" />
				</form>
			</div>
		);
	}
}
