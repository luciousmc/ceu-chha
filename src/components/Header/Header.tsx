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
import { useLocation, useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === ROUTES.DASHBOARD) return null;

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
