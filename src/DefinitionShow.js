import React from 'react';

export default class DefinitionShow extends React.Component {
	componentDidMount() {
		if (this.props.definition) {
		} else {
		}
	}
	render() {
		return (
			<div>
				{this.props.definition ? <div>{this.props.definition.id}</div> : null}
			</div>
		);
	}
}
