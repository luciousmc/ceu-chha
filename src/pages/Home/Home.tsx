// React
import { useRef, useState } from 'react';

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
  ErrorMessage,
  HomeContainer,
  LoginButton,
  LoginDivider,
  LoginForm,
  RegisterLink,
  RegisterText,
} from './Home.style';

// Service Functions
import { signInUser } from '../../services/firebase';

function Home() {
  const [btnIsLoading, setBtnIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  // User input Refs
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userNameRef.current !== null && passwordRef.current !== null) {
      setBtnIsLoading(true);

      const resultError = await signInUser(
        userNameRef.current.value,
        passwordRef.current.value
      );

      if (resultError) {
        setErrorMsg(resultError);
        setBtnIsLoading(false);
      } else {
        userNameRef.current.value = '';
        passwordRef.current.value = '';
        setBtnIsLoading(false);
        navigate('/dashboard');
      }
    }
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

        {errorMsg && (
          <ErrorMessage color='error' variant='subtitle2' textAlign='center'>
            {errorMsg}
          </ErrorMessage>
        )}

        <LoginButton loading={btnIsLoading} type='submit' variant='contained'>
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
