import React, { Component } from 'react';

export default class DefinitionFilter extends React.Component {
	render() {
		return (
			<div>
				<form onChange={this.props.onChange}>
					<input
						type="radio"
						name="part-of-speech"
						value="all"
						onChange={this.handleChange}
					/>{' '}
					all<br />
					<input
						type="radio"
						name="part-of-speech"
						value="noun"
						onChange={this.handleChange}
					/>{' '}
					noun<br />
					<input
						type="radio"
						name="part-of-speech"
						value="verb"
						onChange={this.handleChange}
					/>{' '}
					verb<br />
					<input
						type="radio"
						name="part-of-speech"
						value="adjective"
						onChange={this.handleChange}
					/>{' '}
					adjective<br />
				</form>
			</div>
		);
	}
}
