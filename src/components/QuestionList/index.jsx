import React from "react";
import { QuestionItem } from "../QuestionItem";
import { useState } from "react";
export const QuestionList = ({ questions }) => {
  const [userAnswer, setUserAnswer] = useState([]);

  const handleSaveAnswer = (optionId) => {
    const newAnswer = [...userAnswer, optionId]
    setUserAnswer(newAnswer );
  }; 

  if (!questions) return null;

  return (
    <section id="question-list">
      <h1>Selecione as Opções</h1>

      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} saveAnswer={handleSaveAnswer} userAnswer={userAnswer}/>
      ))}
    </section>
  );
};
