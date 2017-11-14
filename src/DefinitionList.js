import React from 'react';
import { Link } from 'react-router-dom';
import { fetchDefinitions } from './fetch.js';

export default class DefinitionList extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps) {
			return true;
		}
	}

	displayDefinitions() {
		return this.props.definitions.map((def, index) => {
			if (def.word) {
				return (
					<div className="chunk">
						<ul key="index">
							<h2 className="top-word">
								<Link to={`/words/${def.word.id}`}>{def.word.word}</Link>
							</h2>
							<li><span className="title">Part of Speech: </span>{def.part_of_speech}</li>
							<li><span className="title">Definition: </span>{def.definition_text}</li>
							<li><span className="title">Sentence: </span>"{def.sentence}"</li>
							<li>
								Likes: { (def.likes === null)? 0 : def.likes}
								<br />
								<button
									value={def.id}
									type="button"
									onClick={this.props.onLike}
								>
									Like
								</button>
								<button
									value={def.id}
									type="button"
									onClick={this.props.onDelete}
								>
									Delete
								</button>
							</li>
						</ul>
					</div>
				)
			} else {
				return <p>loading...</p>;
			}
		});
	}

	render() {
		return <div>{this.displayDefinitions()}</div>
	}
}
