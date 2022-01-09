import styled from 'styled-components';

// Material UI Components
import Button from '@mui/material/Button';

export const HomeContainer = styled.div`
  width: 400px;
  height: min-content;
  background: white;
  padding: 15px 30px;
  box-shadow: 1px 1px 5px gray;
  border-radius: 5px;
`;

export const LoginForm = styled.form``;

export const LoginButton = styled(Button)`
  margin: 20px auto !important;
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
