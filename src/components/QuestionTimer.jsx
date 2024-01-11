import React, { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		console.log('TIMER START');
		const timer = setTimeout(onTimeout, timeout);

		return () => clearTimeout(timer);
	}, [onTimeout, timeout]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevRaminingTime) => prevRaminingTime - 10);
		}, 10);

		return () => clearInterval(interval);
	}, []);

	return (
		<progress
			id='question-time'
			max={timeout}
			value={remainingTime}
			className={mode}
		/>
	);
};

export default QuestionTimer;
