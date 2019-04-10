import React, {Component} from 'react';
import './App.css';

import FunctionClick from '/FunctionClick';
import ClassClick from '/ClassClick';


class App extends Component {
	render() {
		return(
			<div className="App">
				<ClassClick />
				<FunctionClick />
			</div>
		)
	}
}

export default App;
