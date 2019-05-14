import React, {Component} from 'react';

export class Counter extends Component{
	constructor(props){
		super(props)
		this.state = {
			count: 0;
		}
	}
	
	increment(){
		this.setState(
			{count: this.state.count + 1},
			() => {
				console.log('Callback value', this.state.count)
			}
		);
	}
	
	
	increment1() {
		this.setState((prevState) => {
			count: prevState.count + 1
		})
		console.log(this.state.count)
	}
	incrementFive() {
		this.increment1()
		this.increment1()
		this.increment1()
		this.increment1()
		this.increment1()
	}
	
	render(){
		return(
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={()=> this.incrementFive()}>Increment</button>
			</div>
		)
	}
}