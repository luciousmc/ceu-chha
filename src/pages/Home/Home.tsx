import { Typography, Button } from '@mui/material';
import {
  HomeContainer,
  InputContainer,
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
        {/* <label>
          Username: <br /> */}
        <InputContainer>
          <input type='text' placeholder='Username' />
        </InputContainer>
        {/* </label> */}

        {/* <label>
          Password: <br /> */}
        <InputContainer>
          <input type='text' placeholder='Password' />
        </InputContainer>
        {/* </label> */}

        {/* <input type='submit' value='Login' /> */}
        <LoginButton variant='contained'>Login</LoginButton>
      </LoginForm>

      <LoginDivider>---- or ----</LoginDivider>

      <RegisterText>Don't have an account? Register</RegisterText>
    </HomeContainer>
  );
}

export { Home };
