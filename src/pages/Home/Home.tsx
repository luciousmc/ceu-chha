// React Router
import { useNavigate } from 'react-router-dom';

// Material UI Components
import {
  Typography,
  TextField,
  FormControl,
  InputAdornment,
} from '@mui/material';

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

// StyledComponents
import {
  HomeContainer,
  LoginButton,
  LoginDivider,
  LoginForm,
  RegisterLink,
  RegisterText,
} from './Home.style';

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <LoginForm>
        <Typography
          variant='h2'
          sx={{ fontSize: '3rem', color: '#777' }}
          textAlign={'center'}
          gutterBottom
        >
          Student Login
        </Typography>

        <FormControl fullWidth margin='normal'>
          <TextField
            variant='standard'
            id='username'
            placeholder='Username'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField
            type='password'
            variant='standard'
            id='password'
            placeholder='Password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <LoginButton variant='contained'>Login</LoginButton>
      </LoginForm>

      <LoginDivider>---- or ----</LoginDivider>

      <RegisterText>
        Don't have an account?
        <RegisterLink onClick={() => navigate('/register')} color='error'>
          Register
        </RegisterLink>
      </RegisterText>
    </HomeContainer>
  );
}

export { Home };
