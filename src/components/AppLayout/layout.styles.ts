import styled from '@emotion/styled';

export const AppLayoutContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const AppLayoutMain = styled.main`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  @media (min-width: 620px) {
    height: 90vh;
    max-width: 620px;
  }
`;


