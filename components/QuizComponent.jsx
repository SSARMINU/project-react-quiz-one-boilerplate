import React, { useState } from "react";
import "../css/QuizComponent.css";
import questions from "../resources/quizQuestions.json";

export default function QuizComponent() {
  const [currIdx, setCurrIdx] = useState(0);

  const handlePrev = () => {
    if (currIdx > 0) {
      setCurrIdx((prevState) => prevState - 1);
    }
  };

  const handleNxt = () => {
    if (currIdx < questions.length - 1) {
      setCurrIdx((prevState) => prevState + 1);
    }
  };

  const handleQuit = () => {
    if (window.confirm("Do you want to quit?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="question">
      <h2>Question</h2>
      <div>
        <span>{currIdx + 1} of {questions.length}</span>
        <h5>{questions[currIdx].question}</h5>
      </div>
      <div className="option-container">
        <p className="option">{questions[currIdx].optionA}</p>
        <p className="option">{questions[currIdx].optionB}</p>
      </div>
      <div className="option-container">
        <p className="option">{questions[currIdx].optionC}</p>
        <p className="option">{questions[currIdx].optionD}</p>
      </div>
      <div className="button-container">
        <button className="button previous" onClick={handlePrev}>Previous</button>
        <button className="button next" onClick={handleNxt}>Next</button>
        <button className="button quit" onClick={handleQuit}>Quit</button>
      </div>
    </div>
  );
}
