import React, {Component} from 'react';
import Person from '/Person';

class PersonList extends Component{
	function personList() {
		const persons =[
			{
				id: 1,
				name: 'Bruce',
				age: 30
			},
			{
				id: 2,
				name: 'Clark',
				age: 32
			},
			{
				id: 3,
				name: 'Martin',
				age: 40
			}
		]
	
	}
	
	{/*the child component can not access the key property */}
	const personList = persons.map((person, index) => (<Person key={index} person={person}></Person>)
	
	return <div>{personList}</div>
}

export default PersonList