import React from 'react'
import { useSelector } from 'react-redux';
import { CounterStyling } from './ProgressBar.styled';

const ProgressBar = () => {
  const allQuestions = useSelector((state) => state.quiz.questions)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  return (
    <div>
      <CounterStyling>Question {(currentQuestion + 1)}/ {allQuestions.length}</CounterStyling>
    </div>
  )
}

export default ProgressBar;