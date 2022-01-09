import styled from 'styled-components';

// Material UI Components
import Button from '@mui/material/Button';

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
    width: 100%;
    padding: 5px;
    border: none;
    background: #eee;
  }
  input:focus {
    outline: none;
  }
  div ~ div {
    margin-top: 15px;
  }
`;

export const InputContainer = styled.div`
  background: #eee;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px auto;
`;

export const LoginButton = styled(Button)`
  margin: 10px auto !important;
  width: 100%;
`;

export const LoginDivider = styled.p`
  text-align: center;
`;

export const RegisterText = styled.p`
  margin-top: 10px;
  color: #888;
  text-align: center;
`;
