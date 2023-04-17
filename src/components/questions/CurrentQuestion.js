import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { QuestionHeader, ButtonContainer, FactContainer, QuestionText } from './CurrentQuestion.styled';
import { StyledButton, NextQuestionButton } from '../buttons/Button.styled';
import Summary from '../content/Summary';

export const CurrentQuestion = () => {
  // Get the current question from the store
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  // Get the current question index and the total number of questions from the store
  const currentQuestionIndex = useSelector((store) => store.quiz.currentQuestionIndex);
  const numberOfQuestions = useSelector((store) => store.quiz.questions.length);

  // State to track whether to show the fact or not
  const [showFact, setShowFact] = useState(false);

  useEffect(() => {
    setShowFact(false);
  }, [question]);

  const dispatch = useDispatch();

  // Function to handle moving to the next question
  const onNextQuestion = () => {
    if (currentQuestionIndex < numberOfQuestions - 1) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      dispatch(quiz.actions.setCurrentStep('summary'));
    }
  };

  // Set local state to track if the user has answered the current question
  const [hasAnswered, setHasAnswered] = useState(false);

  // Set local state to track the user's answer index for the current question
  const [userAnswerIndex, setUserAnswerIndex] = useState('');

  // Reset the local state when the question changes
  useEffect(() => {
    setHasAnswered(false);
    setUserAnswerIndex('');
  }, [question]);

  // Handle when no question is found
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    if (hasAnswered) {
      return;
    }

    setHasAnswered(true);
    setUserAnswerIndex(answerIndex);
    dispatch(
      quiz.actions.submitAnswer({
        questionId,
        answerIndex
      })
    );

    // Show the fact immediately
    setShowFact(true);
  };
  // Function to determine the className for each option based on user interaction
  const classCheck = (answerIndex) => {
    if (!showFact) {
      return 'default';
    }
    if (answerIndex === question.correctAnswerIndex) {
      return 'right-answer';
    } else if (answerIndex === userAnswerIndex) {
      return 'wrong-answer';
    } else {
      return 'default';
    }
  };

  const onRestartQuiz = () => {
    dispatch(quiz.actions.restartQuiz());
  };

  return (
    <div>
      {currentQuestionIndex < numberOfQuestions ? (
        <div>
          <QuestionHeader>{question.questionText}</QuestionHeader>
          <ButtonContainer>
            {question.options.map((option, index) => (
              <StyledButton
                // eslint-disable-next-line react/no-array-index-key
                key={`${question.id}-${index}`}
                onClick={() => onAnswerSubmit(question.id, index)}
                buttonType={classCheck(index)}
                type="button">
                {option}
              </StyledButton>
            ))}
          </ButtonContainer>
          <FactContainer>
            {showFact && (
              <QuestionText>{question.fact}</QuestionText>
            )}
          </FactContainer>
          <ButtonContainer>
            {showFact && (
              <div>
                <NextQuestionButton
                  buttonText="Next Question"
                  handleClick={onNextQuestion} />
              </div>
            )}
          </ButtonContainer>
        </div>
      ) : (
        <Summary onRestartQuiz={onRestartQuiz} />
      )}
    </div>
  );
}