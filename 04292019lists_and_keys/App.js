import React, {Component} from 'react';
import './App.css';

import PersonList from '/PersonList';


class App extends Component {
	render() {
		return(
			<div className="App">
				<PersonList />
			</div>
		)
	}
}

export default App;
