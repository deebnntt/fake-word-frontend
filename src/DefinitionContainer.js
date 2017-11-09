import React from 'react';
import DefinitionForm from './DefinitionForm.js';
import { fetchWords } from './fetch.js';

export default class DefinitionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			words: [],
			word: ''
		};
	}

	componentDidMount() {
		fetchWords().then(json =>
			this.setState({
				words: json
			})
		);
		this.displayWord();
	}

	displayWord() {
		debugger;
		let randomI = Math.floor(Math.random() * this.state.words.length);
		return (
			<div>
				<p>{this.state.words[randomI].word}</p>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.displayWord()}
				<DefinitionForm />
			</div>
		);
	}
}
