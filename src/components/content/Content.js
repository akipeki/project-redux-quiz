import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../../reducers/quiz';
import Welcome from './Welcome';
import Summary from './Summary';
import { CurrentQuestion } from '../questions/CurrentQuestion';

// The Content component is the main container for the quiz's content
const Content = () => {
  // Get the current step from the Redux store
  const currentStep = useSelector((store) => store.quiz.currentStep);
  // Initialize useDispatch to use Redux actions
  const dispatch = useDispatch();

  // Function to handle starting the quiz
  const handleStartQuiz = () => {
    // Set the current step in the Redux store to 'quiz'
    dispatch(quiz.actions.setCurrentStep('quiz'));
  };

  // Function to handle restarting the quiz
  const handleQuizRestart = () => {
    // Reset the quiz state in the Redux store
    dispatch(quiz.actions.restart());
    // Set the current step in the Redux store to 'welcome'
    dispatch(quiz.actions.setCurrentStep('welcome'));
  };

  // Render the appropriate component based on the current step
  if (currentStep === 'welcome') {
    // Render the Welcome component and pass the onStartQuiz function as a prop
    return <Welcome onStartQuiz={handleStartQuiz} />;
  } else if (currentStep === 'quiz') {
    // Render the CurrentQuestion component
    return <CurrentQuestion />;
  } else {
    // Render the Summary component and pass the onRestartQuiz function as a prop
    return <Summary onRestartQuiz={handleQuizRestart} />;
  }
};

export default Content;