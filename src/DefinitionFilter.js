import React, { Component } from 'react';

export default class DefinitionFilter extends React.Component {
	render() {
		return (
			<div class='radio-group'>
				<form onChange={this.props.onChange} class='filter'>
          <label class='radio-label'>
  					<input
  						type="radio"
  						name="part-of-speech"
  						value="all"
  						onChange={this.handleChange}
  					/>
          <span class='inner-label'> all</span>
          </label>
          <label class='radio-label'>
  					<input
  						type="radio"
  						name="part-of-speech"
  						value="noun"
  						onChange={this.handleChange}
  					/>
            <span class='inner-label'> noun</span>
            </label>
            <label class='radio-label'>
  					<input
  						type="radio"
  						name="part-of-speech"
  						value="verb"
  						onChange={this.handleChange}
  					/>
            <span class='inner-label'> verb</span>
            </label>
            <label class='radio-label'>
  					<input
  						type="radio"
  						name="part-of-speech"
  						value="adjective"
  						onChange={this.handleChange}
  					/>
            <span class='inner-label'> adjective</span>
            </label>
				  </form>
			</div>
		);
	}
}
