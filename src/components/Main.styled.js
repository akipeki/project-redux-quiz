import styled from 'styled-components/macro';

export const MainWrapper = styled.div`
  background: #E5E6E4; /* Creamy natural white */
  height: 102vh;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhiteWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border: 5px solid #f26a3a;
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1025px) {
    width: 60%;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;