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
				<h1 className="top-word">{this.state.word.word}</h1>
				{this.state.word.definitions.map(def => {
					return (
						<div className="chunk">
						<ul>
							<li><span className="def-display">Part of Speech: </span>{def.part_of_speech}</li>
							<li><span className="def-display">Definition: </span>{def.definition_text}</li>
							<li><span className="def-display">Sentence: </span> "{def.sentence}"</li>
							<li><span className="def-display">Likes: </span>{def.likes}</li>
						</ul>
						</div>
					)
				})}
			</div>
		);
	};

	render() {
		return <div>{this.displayWord()}</div>
	}
}
