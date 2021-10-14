import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ChessBoom = () => {
	const [percent, setPercent] = useState(25);

	return (
		<div className='chessboom'>
			<h1>Chess Boom!</h1>
			<label htmlFor='percent'>Probabilidad de ¡Boom!</label>
			<h3>{percent}</h3>
			<input
				type='range'
				id='percent'
				name='percent'
				step='1'
				min='0'
				max='100'
				value={percent}
				onChange={setPercent}
			></input>
			<Button variant='dark'>Pepe</Button>
			<p>Paragraf</p>
		</div>
	);
};

export default ChessBoom;
