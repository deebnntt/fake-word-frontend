import React from 'react';
import DefinitionForm from './DefinitionForm.js';
import { fetchWords } from './fetch.js';

export default class DefinitionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			words: [{}],
			word: ''
		};
	}

	componentDidMount() {
		fetchWords().then(json =>
			this.setState({
				words: json
			})
		);
	}

	displayWord() {
		const arr = [...this.state.words];
		const randomI = Math.floor(Math.random() * arr.length);
		return <div>{arr[randomI].word}</div>;
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
