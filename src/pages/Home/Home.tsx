import { Typography, Button, TextField, FormControl } from '@mui/material';
import {
  HomeContainer,
  LoginButton,
  LoginDivider,
  LoginForm,
  RegisterText,
} from './Home.style';

function Home() {
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

        <FormControl fullWidth margin='dense'>
          <TextField variant='standard' id='username' label='Username' />
        </FormControl>

        <FormControl fullWidth margin='dense'>
          <TextField variant='standard' id='password' label='Password' />
        </FormControl>

        <LoginButton variant='contained'>Login</LoginButton>
      </LoginForm>

      <LoginDivider>---- or ----</LoginDivider>

      <RegisterText>Don't have an account? Register</RegisterText>
    </HomeContainer>
  );
}

export { Home };
