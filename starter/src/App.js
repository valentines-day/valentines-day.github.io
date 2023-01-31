import React, { useState } from 'react';

export default function App() {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [score, setScore] = useState(0);

	const handleClick = (event, isCorrect) => {
		if (isCorrect) setScore(score + 1);
		setQuestionNumber(questionNumber + 1)
	  };

	const questions = [
		{
			questionText: 'What year did we start dating?',
			answerOptions: [
				{ answerText: '2019', isCorrect: false },
				{ answerText: '2017', isCorrect: false },
				{ answerText: '2018', isCorrect: true },
				{ answerText: '2016', isCorrect: false },
			],
		},
		{
			questionText: 'What was the first movie we watched alone??',
			answerOptions: [
				{ answerText: 'Avengers: Infinity War', isCorrect: false },
				{ answerText: 'Solo', isCorrect: true },
				{ answerText: 'Deadpool 2', isCorrect: false },
				{ answerText: 'Mama Mia', isCorrect: false },
			],
		},
		{
			questionText: 'When was the first time we fogged up a car',
			answerOptions: [
				{ answerText: 'Owens party parking lot', isCorrect: true },
				{ answerText: 'Gateway parking lot', isCorrect: false },
				{ answerText: 'Olive and Oil parking lot', isCorrect: false },
				{ answerText: 'Airport parking lot', isCorrect: false },
			],
		},
		{
			questionText: 'What is our animal childs name?',
			answerOptions: [
				{ answerText: 'Georgie', isCorrect: true },
				{ answerText: 'Hamtaro', isCorrect: false },
				{ answerText: 'Henrietta', isCorrect: false },
				{ answerText: 'Patricia', isCorrect: false },
			],
		},
		{
			questionText: 'When you showed me your hand with my London gift, where were we?',
			answerOptions: [
				{ answerText: 'KFC', isCorrect: false },
				{ answerText: 'My Diners', isCorrect: true },
				{ answerText: 'Olive and Oil', isCorrect: false },
				{ answerText: 'Adega', isCorrect: false },
			],
		},
		{
			questionText: 'On that same day, what gift did you buy me?',
			answerOptions: [
				{ answerText: 'A pen', isCorrect: false },
				{ answerText: 'Food', isCorrect: false },
				{ answerText: 'Phone accessories', isCorrect: true },
				{ answerText: 'Tim Tams', isCorrect: false },
			],
		},
		{
			questionText: 'Which famous star did you intentionally mis-pronounce to me multiple times?',
			answerOptions: [
				{ answerText: 'Guy fierri', isCorrect: true },
				{ answerText: 'Jamie Oliver', isCorrect: false },
				{ answerText: 'Megan Markle', isCorrect: false },
				{ answerText: 'Steve Carrel', isCorrect: false },
			],
		},
		{
			questionText: 'What was the name of the poem I wrote you?',
			answerOptions: [
				{ answerText: 'Before her', isCorrect: true },
				{ answerText: 'The tree of life', isCorrect: false },
				{ answerText: 'My everything', isCorrect: false },
				{ answerText: 'Love of my life', isCorrect: false },
			],
		},
		{
			questionText: 'Will you be my valentine?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'Absolutely', isCorrect: true },
				{ answerText: 'Always', isCorrect: true },
				{ answerText: 'Positively', isCorrect: true },
			],
		},
		{
			questionText: 'What names did you call me when when took 5 minutes to soul search the other night?',
			answerOptions: [
				{ answerText: 'Bitch', isCorrect: false },
				{ answerText: 'Asshole', isCorrect: false },
				{ answerText: 'Fucking cunt', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	];

	return (
		<>
		<div className='bg'></div>
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{questionNumber === questions.length ? (
				score === questions.length ?
				(<div className='score-section'>You scored full points! Your prize is this code: T2K2K-D5SJA-XG2VG-DWU64</div>) : 
				(<div className='score-section'>You scored {score} out of {questions.length}, try again!</div>)
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {questionNumber + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[questionNumber].questionText}</div>
					</div>
					<div className='answer-section'>
						{
							 questions[questionNumber].answerOptions.map(d => (<button onClick={event => handleClick(event, d.isCorrect)}>{d.answerText}</button>))
						}
						
					</div>
				</>
			)}
		</div>
		</>
	);
}
