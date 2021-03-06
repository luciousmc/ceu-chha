import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const HeaderContainer = styled.header`
  height: 15vh;
`;

export const StyledAppBar = styled(AppBar)`
  padding: 10px;
  position: sticky;
`;

export const LogoImg = styled.img`
  width: 50px;
`;

export const MainTitle = styled.h1`
  margin-left: 25px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
