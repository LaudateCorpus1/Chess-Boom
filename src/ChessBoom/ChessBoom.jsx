import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import randomMinMax from './functions';
import './chessboom.css';

const ChessBoom = () => {
	const [percent, setPercent] = useState(25);
	const [result, setResult] = useState('');
	const [rounds, setRounds] = useState(1);

	const updatePercent = (event) => {
		setPercent(parseInt(event.currentTarget.value));
	};

	const shotBomb = () => {
		const probability = randomMinMax(1, 100);

		if (probability >= percent) {
			setRounds(rounds + 1);

			setResult(<p className='result1 fade-in'>{`¡Round de paz ${rounds}!`}</p>);
		} else {
			setRounds(1);
			const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
			const colum = letters[randomMinMax(0, 7)];
			const lane = randomMinMax(1, 8);

			let lastCordenate = [colum, lane];

			let newCordenate = [colum, lane];

			if (lastCordenate !== newCordenate) {
				setResult(<p className='result2 fade-in'>{`¡Boom en ${colum}${lane}!`}</p>);
			}
		}
	};

	return (
		<div className='chessboom'>
			<h1 className='title'>Chess Boom!</h1>
			<form className='form'>
				<label className='label' htmlFor='percent'>
					<span className='percent-number'>{percent}</span>
					{`% de probabilidad de ¡Boom!`}
				</label>
				<input
					className='input'
					id='percent'
					type='range'
					step='1'
					min='0'
					max='100'
					value={percent}
					name='percent'
					onChange={updatePercent}
				></input>
			</form>

			<Button className='btn' variant='danger' onClick={shotBomb}>
				Boom?
			</Button>

			<div>{result}</div>
		</div>
	);
};

export default ChessBoom;
