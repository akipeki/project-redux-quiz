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

export const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: rgb(240, 240, 25); // yellow
  z-index: 100;
`;

export const ProgressBarLine = styled.div`
  height: 100%;
  background-color: #28FA94;
  transition: width 0.3s ease;
`;