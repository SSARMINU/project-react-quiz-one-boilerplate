import React from 'react';

function ResultComponent({ totalQuestions, attemptedQuestions, correctAnswers, wrongAnswers }) {
  return (
    <div className="result">
      <h2>Quiz Results</h2>
      <p>Total number of questions: {totalQuestions}</p>
      <p>Number of attempted questions: {attemptedQuestions}</p>
      <p>Number of correct answers: {correctAnswers}</p>
      <p>Number of wrong answers: {wrongAnswers}</p>
    </div>
  );
}

export default ResultComponent;
