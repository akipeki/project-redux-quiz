import styled from 'styled-components/macro';

export const QuestionHeader = styled.h1`
  font-size: 22px;
  padding: 40px 34px 10px 38px;
  margin-top: -10px;
  margin-bottom: 20px;
  text-align: Center;
  @media (min-width: 668px) and (max-width: 1024px) {
    text-align: left;
    font-size: 25px;
  }
  @media (min-width: 1025px){ 
    text-align: left;
    font-size: 30px;
    padding: 60px;
  }
`;

export const ButtonContainer = styled.div`
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

export const FactContainer = styled.div`
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

export const QuestionText = styled.p`
  margin: 24px 0px 24px 0px;
  font-size: 14px;
  font-weight: 600;
`;