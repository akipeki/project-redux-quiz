import styled from 'styled-components/macro';

// Define the color constants
const TEXT = {
  background: 'transparent',
  color: '#252525',
  border: '2px solid #252525'
};
const RED = {
  background: 'transparent',
  color: '#252525',
  border: '2px solid #FA2844'
};
const GREEN = {
  background: '#28FA94',
  color: '#252525',
  border: '2px solid #28FA94'
};

const buttonStyle = {
  default: `
    background-color: ${TEXT.background};
    color: ${TEXT.color};
    border: ${TEXT.border};
  `,
  'right-answer': `
    background-color: ${GREEN.background};
    color: ${GREEN.color};
    border: ${GREEN.border};
  `,
  'wrong-answer': `
    background-color: ${RED.background};
    color: ${RED.color};
    border: ${RED.border};
  `
};

export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 30px;
  padding: 0.4rem 0;
  margin: 0.5rem -0.8rem;
  width: 14rem;
  background: transparent;
  color: #252525;
  ${(props) => buttonStyle[props.buttonType] || buttonStyle.default}
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 18px;
    width: 16rem;
    padding: 0.7rem 0;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
    width: 16rem;
    padding: 0.7rem 0;
  }
`;

// Styled component for the Welcome page button
export const WelcomeButton = styled(StyledButton).attrs(
  (props) => ({ onClick: props.handleClick })
)`
 display: inline-block;
  border-radius: 30px;
  padding: 0.6rem 0;
  margin: 0.5rem 0%;
  width: 12rem;
  background: #28FA94;
  color: #252525;
  border: 2px solid #28FA94;
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 18px;
    width: 16rem;
    padding: 0.7rem 0;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
    width: 16rem;
    padding: 0.7rem 0;
  }
`;

export const NextQuestionButton = styled(StyledButton).attrs((props) => ({
  onClick: props.handleClick,
  children: props.buttonText
}))`
  display: inline-block;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #28FA94;
  color: #252525;
  border: 2px solid #28FA94;
  font-family: 'Sora', sans-serif;
  font-size: 15px;
  font-weight: 700;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
    width: 16rem;
    padding: 0.7rem 0;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
    width: 16rem;
    padding: 0.7rem 0;
  }
`;

export const RestartButton = styled(StyledButton).attrs(
  (props2) => ({ onClick: props2.handleClick })
)`
  display: inline-block;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 0.5rem 0%;
  width: 12rem;
  background: #28FA94;
  color: #252525;
  border: 2px solid #28FA94;
  font-family: 'Sora', sans-serif;
  font-size: 15px;
  font-weight: 700;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
    width: 16rem;
    padding: 0.7rem 0;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
    width: 16rem;
    padding: 0.7rem 0;
  }
`;