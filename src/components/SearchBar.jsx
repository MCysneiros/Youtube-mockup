import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { term: '' };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className='ui segment search-bar'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Video Search</label>
						<input
							value={this.state.term}
							type='text'
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
