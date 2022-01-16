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
import RegistrationStepperMan from '../../components/RegistrationStepper/RegistrationStepperMan';

const Register = () => {
  return (
    <RegisterInfoProvider>
      <RegisterContainer>
        <Paper sx={{ padding: '15px' }}>
          <Typography
            variant='h2'
            sx={{ fontSize: '2rem' }}
            align='center'
            gutterBottom
          >
            Create an Account
          </Typography>
          {/* <RegistrationStepper /> */}
          <RegistrationStepperMan />
        </Paper>
      </RegisterContainer>
    </RegisterInfoProvider>
  );
};

export { Register };
