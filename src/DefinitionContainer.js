import React from 'react';
import DefinitionList from './DefinitionList.js';
import DefinitionForm from './DefinitionForm.js';
import DefinitionShow from './DefinitionShow.js';
import DefinitionFilter from './DefinitionFilter.js';
import DefinitionSearch from './DefinitionSearch.js';
import { fetchWords } from './fetch.js';
import { fetchDefinitions } from './fetch.js';
import { Route } from 'react-router-dom';

export default class DefinitionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			words: [{}],
			currentWord: {},
			redirect: false,
			definitionId: null,
			definitions: [{}],
			liked: 0
		};
	}

	componentWillMount() {
		fetchDefinitions().then(json =>
			this.setState({
				definitions: json,
				allDefinitions: json
			})
		);
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

	handleFilter = event => {
		let term = event.target.value;
		console.log(term);
		const filteredDefinitions = this.state.allDefinitions.filter(def => {
			return def.part_of_speech === term;
		});
		this.setState({
			definitions: filteredDefinitions
		});
	};

	handleSearch = term => {
		const filteredDefinitions = this.state.allDefinitions.filter(def => {
			return def.definition_text.includes(term) || def.sentence.includes(term);
		});
		this.setState({
			definitions: filteredDefinitions
		});
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

	handleLike = event => {
		let id = event.target.value;
		let newDefinitions = this.state.definitions.map(def => {
			if (parseInt(def.id) === parseInt(id)) {
				def.likes++;
				return def;
			} else {
				return def;
			}
		});
		let obj = { likes: 'update' };
		fetch(`http://localhost:3000/api/v1/definitions/${id}`, {
			method: 'put',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(obj)
		}).then(
			this.setState({
				definitions: newDefinitions
			})
		);
	};

	render() {
		console.log('Container');
		return (
			<div>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<div>
								<DefinitionFilter onChange={this.handleFilter} />
								<DefinitionSearch onSearch={this.handleSearch} />
								<DefinitionList
									onLike={this.handleLike}
									definitions={this.state.definitions}
								/>
							</div>
						);
					}}
				/>
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
