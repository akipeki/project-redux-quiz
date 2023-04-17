import styled from 'styled-components/macro';

export const QuestionHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding: 54px 34px 6px 38px;
  margin-top: -10px;
  margin-bottom: 18px;
  text-align: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    text-align: center;
    font-size: 25px;
  }
  @media (min-width: 1025px){ 
    text-align: center;
    font-size: 30px;
    padding: 60px;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  justify-content: center;
  margin: 5px 15px 5px 15px;
  gap: 0px;
  @media (min-width: 668px){
    grid-template-columns: repeat(2, 280px);
  }
  @media (min-width: 1025px){
    grid-template-columns: repeat(2, 280px);
  }
`;

export const FactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 200px);
  justify-content: center;
  margin: 5px 15px 5px 15px;
  gap: 0px;
  @media (min-width: 668px){
    grid-template-columns: repeat(1, 250px);
  }
  @media (min-width: 1025px){
    grid-template-columns: repeat(1, 300px);
  }
`;

export const NextButtonContainer = styled.div`
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

export const QuestionText = styled.p`
  margin: 16px 0px 18px 0px;
  font-size: 14px;
  font-weight: 600;
  @media (min-width: 668px){
    font-size: 20px;
  }
  @media (min-width: 1025px){
    font-size: 20px;
  }

`;