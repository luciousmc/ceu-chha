// Styled Components
import { HeaderContainer, MainTitle, StyledAppBar } from './Header.style';

// Material UI Components
import Box from '@mui/material/Box';

// React Router
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Box>
        <StyledAppBar>
          <MainTitle onClick={() => navigate('/')}>
            Coast Health Career College CEU Registration
          </MainTitle>
        </StyledAppBar>
      </Box>
    </HeaderContainer>
  );
}

export { Header };
