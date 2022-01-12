// React
import { useState } from 'react';

// Material UI Components
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Components
import RegistrationStepper from '../../components/RegistrationStepper';

// Context
import { RegisterInfoProvider } from '../../context/registerInfo';

// Styled Components
import { RegisterContainer } from './Register.style';

const Register = () => {
  return (
    <RegisterInfoProvider>
      <RegisterContainer>
        <Paper sx={{ padding: '15px' }}>
          <Typography variant='h4' align='center' gutterBottom>
            Register
          </Typography>
          <RegistrationStepper />
        </Paper>
      </RegisterContainer>
    </RegisterInfoProvider>
  );
};

export { Register };
