import { HeaderContainer } from './Header.style';
import Box from '@mui/material/Box';
import { StyledAppBar } from './Header.style';

function Header() {
  return (
    <HeaderContainer>
      <Box>
        <StyledAppBar>
          <h1>Coast Health Career College CEU Registration</h1>
        </StyledAppBar>
      </Box>
    </HeaderContainer>
  );
}

export { Header };
