import React, {Component} from 'react';
import './App.css';

import Stylesheet from '/Stylesheet';
import './appStyles.css';
import styles from './appStyles.module.css';


class App extends Component {
	render() {
		return(
			<div className="App">
				<h1 className='error'>Error</h1>{/*the style error is still work in all the children component*/}
				<h1 className='styles.success'>Success</h1>{/*the module style styles.success is not work in all the children component*/}
				<Stylesheet />
			</div>
		)
	}
}

export default App;
