import React from 'react';

const Jsx = () => {
	//with jsx retrun
	//return(
	//	<div id='hello' className='dummyClass'>
	//		<h1>Hello Vishwas</h1>
	//	</div>
	//)
	
	//without jsx retrun
	return React.createElement(
		'div',
		{id: 'hello', className: 'dummyClass'},
		React.createElement('h1', null, 'Hello Vishwas')
	)
}

export default Jsx