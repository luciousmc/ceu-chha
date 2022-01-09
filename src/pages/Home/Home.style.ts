import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: white;
  padding: 15px 30px;
  box-shadow: 1px 1px 5px gray;
  border-radius: 5px;
`;

export const LoginForm = styled.form`
  > label {
    display: block;
    margin-top: 15px;
  }
  input {
    width: 200px;
    padding: 5px;
    margin: 3px;
  }
  input[type='submit'] {
    display: block;
    width: 80%;
    margin: 25px auto;
  }
`;

export const LoginDivider = styled.p`
  text-align: center;
`;

export const RegisterText = styled.p`
  margin-top: 10px;
`;
