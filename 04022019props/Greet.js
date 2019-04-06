import React from 'react';

//format 1
//function Greet() {
//	return <h1>Hello Vishwas</h1>
//}

//format 2.  format 1 and format 2 is the same result, but format 2 is ES6 format.
const Greet = (props) => {
	return (
		<div>
			<h1>Hello {props.name}</h1>
			{props.children}
		</div>
	)
}
export default Greet

//format 3, this is call name export
//export const Greet = () => <h1>Hello Vishwas</h1>