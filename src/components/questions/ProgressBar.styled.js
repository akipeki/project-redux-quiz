import styled from 'styled-components/macro';

export const CounterStyling = styled.h1`
  font-size: 18px;
  font-family: 'Quicksand', sans-serif;
  margin-top: 10px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 22px;
  }
  @media (min: 1024px) {
    font-size: 25px;
  }
`;