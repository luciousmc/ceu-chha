import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --clr-white: whitesmoke;
    --clr-default: #777;
    --clr-darker: #555;

    --text-sm: .8rem;
  }
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
