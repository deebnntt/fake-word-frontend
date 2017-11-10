import React from 'react';
import DefinitionForm from './DefinitionForm.js';
import DefinitionShow from './DefinitionShow.js';
import { fetchWords } from './fetch.js';
import { Route } from 'react-router-dom';

export default class DefinitionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			words: [{}],
			currentWord: {},
			redirect: false,
			definitionId: null
		};
	}

	componentWillMount() {
		fetchWords().then(json =>
			this.setState(
				{
					words: json
				},
				() => this.setCurrentWord()
			)
		);
	}

	setCurrentWord = () => {
		console.log(this.state);
		const randomI = Math.floor(Math.random() * this.state.words.length);
		const currentWord = this.state.words[randomI];
		this.setState(
			{
				currentWord: currentWord
			},
			() => {
				console.log(
					'this',
					this,
					'this.state',
					this.state,
					'this.state.currentWord',
					this.state.currentWord
				);
			}
		);
	};

	displayWord = () => {
		return (
			<div>
				<h3>{this.state.currentWord.word}</h3>
			</div>
		);
	};

	handlePost = defObj => {
		console.log(defObj);
		const id = this.state.currentWord.id;
		console.log(id);
		const obj = Object.assign(defObj, { word_id: id });
		fetch('http://localhost:3000/api/v1/definitions', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(obj)
		})
			.then(res => res.json())
			.then(def => {
				console.log(def.id);
				this.setState({
					redirect: true,
					defintionId: def.id,
					newDefinition: def
				});

				this.props.history.push(`/definitions/${def.id}`);
			});
	};

	render() {
		console.log('Container');
		return (
			<div>
				<Route
					path="/new"
					render={() => {
						console.log('Hey Matching');
						return (
							<DefinitionForm
								onAdd={this.handlePost}
								displayWord={this.displayWord}
							/>
						);
					}}
				/>
				<Route
					path="/definitions/:id"
					render={props => (
						<DefinitionShow {...props} definition={this.state.newDefinition} />
					)}
				/>
			</div>
		);
	}
}
