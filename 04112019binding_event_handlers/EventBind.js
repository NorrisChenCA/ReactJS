import React, {Component} from 'react';

class EventBind extends Component{
	constructor(props){
		super(props)
		this.state = {
			message: 'Hello';
		}
		
		//bind handler method three
		this.clickHandler = this.clickHandler.bind(this)
	}
	
	//bind handler method one, two, three
	//clickHandler() {
	//	this.setState({
	//		message: 'Goodbye!'
	//	})
	//}
	
	//bind handler method four
	clickHandler = () => {
		this.setState({
			message: 'Goodbye!'
		})
	}
	
	render(){
		return(
			<div>
				<div>{this.state.message}</div>
					{/*bind handler method one*/}
					{/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
					{/*bind handler method two*/}
					{/*<button onClick={() => this.clickHandler()}>Click</button>*/}
					{/*bind handler method three and four*/}
					<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default EventBind