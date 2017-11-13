import React, { Component } from 'react';

export default class DefinitionSearch extends React.Component {
	state = {
		input: ''
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSearch(this.state.input);
	};

	handleChange = event => {
		this.setState({
			input: event.target.value
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Search by Definition or Sentence Text"
						value={this.state.input}
						onChange={this.handleChange}
					/>
					<input className="button" type="submit" />
				</form>
			</div>
		);
	}
}
