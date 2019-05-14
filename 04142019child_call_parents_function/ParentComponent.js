import React, {Component} from 'react';
import ChildComponent from '/ChildComponent';

class ParentComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			parentName : 'Parent'
		}
	}
	
	greetParent(){
		alert(`Hello ${this.state.parentName}`)
	}
	
	greetParentWithParameter(childName){
		alert(`Hello ${this.state.parentName} from ${childName}`)
	}

	render(){
		return(
			<div>
			{/*<ChildComponent greetHandler={this.greetParent} />*/}
			<ChildComponent greetHandlerWithParameter={this.greetParentWithParameter} />
			</div>
		)
	}
}

export default ParentComponent