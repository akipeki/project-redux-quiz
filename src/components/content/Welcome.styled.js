import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

export const WelcomeTitle = styled.h1`
  margin-top: -12px;
  font-size: 48px;
  padding: 100px 38px 18px 38px;
  text-align: center;
  color: #252525;
  font-weight: 800;
`;

export const WelcomeImage = styled.img`
  width: 220px;
  height: 220px;
  display: block;
  margin: 0 auto; /* center the image horizontally */
`;

export const WelcomeButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 200px);
  justify-content: center;
  margin: 5px 15px 5px 15px;
  gap: 0px;
  @media (min-width: 668px){
    grid-template-columns: repeat(2, 250px);
  }
  @media (min-width: 1025px){
    grid-template-columns: repeat(2, 300px);
  }
`;

