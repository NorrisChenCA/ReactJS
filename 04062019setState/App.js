import React, {Component} from 'react';
import './App.css';

import Welcome from '/Welcome';
import Greet from '/Greet';


class App extends Component {
	render() {
		return(
			<div className="App">
				<Greet name="Vishwas">
					<p>This is the child</p>
				</Greet>
				<Welcome name="Vishwas">
					<p>This is the Welcome child</p>
				</Welcome>
			</div>
		)
	}
}

export default App;
