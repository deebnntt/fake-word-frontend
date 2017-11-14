import React, { Component } from 'react';

export default class DefinitionSort extends React.Component {
	render() {
		return (
			<div>
				<select onChange={this.props.onSort} className="dropdown">
					<option value="" selected disabled hidden>
						Sort By
					</option>
					<option value="id">most recent</option>
					<option value="likes">most popular</option>
				</select>
			</div>
		);
	}
}
