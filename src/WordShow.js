import React from 'react';

export default class WordShow extends React.Component {
	state = {
		word: { definitions: [] }
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`http://localhost:3000/api/v1/words/${id}`)
			.then(res => res.json())
			.then(json => {
				this.setState(
					{
						word: json
					},
					() => {
						console.log(
							'this',
							this,
							'this.state',
							this.state,
							'this.state.word',
							this.state.word
						);
					}
				);
			});
	}

	displayWord = () => {
		return (
			<div>
				<h3>{this.state.word.word}</h3>
				{this.state.word.definitions.map(def => {
					return (
						<ul>
							<li>Part of Speech: {def.part_of_speech}</li>
							<li>Definition: {def.definition_text}</li>
							<li>Sentence: "{def.sentence}"</li>
							<li>Likes: {def.likes}</li>
						</ul>
					)
				})}
			</div>
		);
	};

	render() {
		return <div>{this.displayWord()}</div>
	}
}
