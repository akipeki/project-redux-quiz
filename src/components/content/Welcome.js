import React from 'react';
import { WelcomeButton } from '../buttons/Button.styled';
import { WelcomeContainer, WelcomeTitle, WelcomeButtonContainer } from './Welcome.styled';

// Welcome component to display a welcome message and start button
const Welcome = ({ onStartQuiz }) => {
  // onStartQuiz is a prop that is passed to the Welcome component (from Content.js)
  // This function is called when the user clicks the "Start the quiz here!" button
  return (
    <WelcomeContainer>
      {/* Display a welcome message */}
      <WelcomeTitle>Hey there, future Earth guardians!</WelcomeTitle>
      {/* Render the Button component and pass the onStartQuiz function as a prop */}
      {/* When user clicks button, the handleClick prop will trigger the onStartQuiz function */}
      <WelcomeButtonContainer>
        <WelcomeButton handleClick={onStartQuiz}>Start the quiz here!</WelcomeButton>
      </WelcomeButtonContainer>
    </WelcomeContainer>
  );
};

// Export the Welcome component for use in other parts of the application
export default Welcome;