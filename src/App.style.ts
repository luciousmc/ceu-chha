import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: whitesmoke;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;
