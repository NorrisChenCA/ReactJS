import React, {Component} from 'react';

class ClassClick extends Component {
	clickHandler() {
		console.log('clicked the button')
	}
	
	// <button onClick={this.clickHandler()}>Click me</button> if the click handler with (). the mean return, that the function will be call when initial the component
	// <button onClick={this.clickHandler}>Click me</button> so the handler must be no ().
	render() {
		return(
			<div>
				<button onClick={this.clickHandler}>Click me</button>
			</div>
		)
	}
}

export default ClassClick
