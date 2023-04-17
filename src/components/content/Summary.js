// Summary.js
import React from 'react';
import { useSelector } from 'react-redux';
import { RestartButton } from '../buttons/Button.styled';
import { SummaryTitle, StyledScoreBoard, ButtonContainer } from './Summary.styled';

const Summary = ({ onRestartQuiz }) => {
  const selectedAnswers = useSelector((store) => store.quiz.answers);
  const numberOfQuestions = useSelector((store) => store.quiz.questions);

  const numberOfCorrectAnswers = selectedAnswers.filter(
    (answer) => answer.isCorrect
  ).length;

  const getMessage = (correctAnswers, totalQuestions) => {
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    if (scorePercentage >= 78) {
      return 'Wow, nature superstar! You have got a green thumb for nature knowledge!';
    } else if (scorePercentage >= 56) {
      return 'Great job! You are well on your way to becoming a nature expert!';
    } else if (scorePercentage >= 28) {
      return 'You are getting there! Keep exploring and your nature knowledge will bloom!';
    } else {
      return 'No problem! Nature is full of wonders, and you are just beginning your journey!';
    }
  };

  const message = getMessage(numberOfCorrectAnswers, numberOfQuestions.length);

  return (
    <div>
      <SummaryTitle>Summary</SummaryTitle>
      <StyledScoreBoard>
        <p>Your total score is {numberOfCorrectAnswers}/{numberOfQuestions.length}</p>
        <p>{message}</p>
      </StyledScoreBoard>
      <ButtonContainer>
        <RestartButton handleClick={onRestartQuiz}>Restart the quiz!</RestartButton>
      </ButtonContainer>
    </div>
  );
};

export default Summary;
