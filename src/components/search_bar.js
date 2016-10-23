import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			term : "" 
		};

	}

	render() {
		return <div>

			 <input value = {this.state.term} onChange = {this.onInputChange.bind(this)} />
			 Value of the term : {this.state.term}
		</div>
	}

	onInputChange(event) {
		this.setState({
			term : event.target.value
		});
	}
}


export default SearchBar;