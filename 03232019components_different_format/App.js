import React, {Component} from 'react';
import './App.css';

//import the Greet with different format
//import format 1 and 2;
import Greet from './Greet';

//import format 3;
import { Greet } from './Greet';

class App extends Component {
	render() {
		return(
			<div className="App">
				<Greet />
			</div>
		)
	}
}

export default App;
