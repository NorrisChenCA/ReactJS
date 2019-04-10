import React from 'react';

function FunctionClick() {
	function clickHandler() {
		console.log('Button clicked')
	}
	//<button onClick={clickHandler}>Click</button>      	correct
	//<button onClick={clickHandler()}>Click</button>		incorrect
	return(
		<div>
			<button onClick={clickHandler}>Click</button>
		</div>
	)
}

export default FunctionClick