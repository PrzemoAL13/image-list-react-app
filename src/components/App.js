import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

class App extends React.Component {
	async onSearchSubmit(entry) {
		// console.log(entry);
		const response = await axios.get(
			`https://pixabay.com/api/?key=29305409-8468ce75218a81b211a88e2b7&q=${entry}&image_type=photo`
		);
		console.log(response);
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: "30px" }}>
				<SearchInput onSearchSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
