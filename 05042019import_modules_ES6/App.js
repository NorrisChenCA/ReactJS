import React, {Component} from 'react';

//import * as libA  from './modules/libA';
import { add, substract, incrementNum, num } from './modules/libA';
import mult, { x } from './modules/libB';
import Car from './modules/libC';

class App extends Component {
	constructor() {
		super();
		this.newCar = new Car('speedy');
	}
	render() {
		return(
			<div className="App">
				{/*<div>{libA.add(1, 3)}</div>*/}
				{/*<div>{libA.substract(1, 3)}</div>*/}
				{/*<div>{libA.incrementNum(1, 3)}</div>*/}
				{/*<div>{libA.num}</div>*/}
				<div>{add(1, 3)}</div>
				<div>{substract(1, 3)}</div>
				<div>{incrementNum()}</div>
				<div>{num}</div>
				
				<div>-----------------------</div>
				<div>{mult(2, 3)}</div>
				<div>{ x }</div>
				
				<div>-----------------------</div>
				<div>{ this.newCar.name }</div>
			</div>
		)
	}
}

export default App;
