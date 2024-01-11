import React, { useCallback, useRef, useState } from 'react';

import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {
	const [userAnswers, setUsersAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback((selectedAnswer) => {
		setUsersAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
	}, []);

	const handleSkipAnswer = useCallback(() => {
		handleSelectAnswer(null);
	}, [handleSelectAnswer]);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers}/>
	}

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
};

export default Quiz;
