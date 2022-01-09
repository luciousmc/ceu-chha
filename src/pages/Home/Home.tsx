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
import { useRef } from 'react';

function Home() {
  const navigate = useNavigate();

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.table({
      userNameRef: userNameRef.current?.value,
      passwordRef: passwordRef.current?.value,
    });
  };

  return (
    <HomeContainer>
      <LoginForm onSubmit={handleSubmit}>
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
            inputRef={userNameRef}
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
            required
          />
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField
            inputRef={passwordRef}
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
            required
          />
        </FormControl>

        <LoginButton type='submit' variant='contained'>
          Login
        </LoginButton>
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
