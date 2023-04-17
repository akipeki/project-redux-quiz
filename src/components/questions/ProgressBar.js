import React from 'react';
import { useSelector } from 'react-redux';
import { CounterStyling, ProgressBarContainer, ProgressBarLine } from './ProgressBar.styled';

const ProgressBar = () => {
  const allQuestions = useSelector((state) => state.quiz.questions);
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex);

  const progressWidth = ((currentQuestion + 1) / allQuestions.length) * 100;

  return (
    <div>
      <CounterStyling>
        Question {(currentQuestion + 1)}/ {allQuestions.length}
      </CounterStyling>
      <ProgressBarContainer>
        <ProgressBarLine style={{ width: `${progressWidth}%` }} />
      </ProgressBarContainer>
    </div>
  );
};

export default ProgressBar;