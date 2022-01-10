// Styled Components
import {
  HeaderContainer,
  LogoImg,
  MainTitle,
  StyledAppBar,
} from './Header.style';

// Material UI Components
import Box from '@mui/material/Box';

// React Router
import { useNavigate } from 'react-router-dom';

// Images
import Logo from '../../../images/CHCC.jpg';
import { Toolbar } from '@mui/material';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Box>
        <StyledAppBar>
          <Toolbar>
            <LogoImg src={Logo} alt='Logo' />
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
