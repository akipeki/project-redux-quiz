import styled from 'styled-components';

export const SummaryTitle = styled.h1`
  margin-top: -12px;
  font-size: 40px;
  padding: 100px 38px 0px 38px;
  text-align: center;
  color: #252525;
  font-weight: 800;
`;

export const StyledScoreBoard = styled.p`
   margin: 60px 34px 50px 34px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  justify-content: center;
  margin: 5px 15px 5px 15px;
  gap: 0px;
  @media (min-width: 668px){
    grid-template-columns: repeat(1);
  }
  @media (min-width: 1025px){
    grid-template-columns: repeat(1);
  }
`;
