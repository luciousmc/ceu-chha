// Styled Components
import {
  HeaderContainer,
  LogoImg,
  MainTitle,
  StyledAppBar,
} from './Header.style';

// Material UI Components
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// React Router
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Box>
        <StyledAppBar>
          <Toolbar>
            <LogoImg src='/images/CHCC.jpg' alt='Logo' />
            <MainTitle onClick={() => navigate('/')}>
              Class Registration
            </MainTitle>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </HeaderContainer>
  );
}

export { Header };
