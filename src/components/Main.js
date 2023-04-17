import React from 'react';
import { MainWrapper } from './Main.styled';
import Content from './content/Content';

// Main component to wrap the Content component
const Main = () => {
  return (
    // Use styled component for the main wrapper
    <MainWrapper>
      {/* Render the Content component inside the MainWrapper */}
      <Content />
    </MainWrapper>
  );
};

// Export the Main component for use in other parts of the application
export default Main;