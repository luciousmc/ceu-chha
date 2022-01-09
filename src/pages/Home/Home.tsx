import {
  HomeContainer,
  LoginDivider,
  LoginForm,
  RegisterText,
} from './Home.style';

function Home() {
  return (
    <HomeContainer>
      <LoginForm>
        <label>
          Username: <br />
          <input type='text' placeholder='Username' />
        </label>

        <label>
          Password: <br />
          <input type='text' placeholder='Password' />
        </label>

        <input type='submit' value='Login' />
      </LoginForm>

      <LoginDivider>---- or ----</LoginDivider>

      <RegisterText>Don't have an account? Register</RegisterText>
    </HomeContainer>
  );
}

export { Home };
