import React from 'react';
import { FooterWrapper, FooterParagraph } from './Footer.styled';

// Footer component to display at the bottom of the page
const Footer = () => {
  return (
    // Use styled components for wrapper and paragraph
    <FooterWrapper>
      <FooterParagraph>
        {/* Add your footer text here */}
        Big Dada
      </FooterParagraph>
    </FooterWrapper>
  );
};

// Export the Footer component for use in other parts of the application
export default Footer;