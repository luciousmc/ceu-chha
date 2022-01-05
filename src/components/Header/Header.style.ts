import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const HeaderContainer = styled.header`
  height: 20vh;
`;

export const StyledAppBar = styled(AppBar)`
  padding: 20px;
  position: sticky;
`;

export const MainTitle = styled.h1`
  letter-spacing: 0.1ch;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
