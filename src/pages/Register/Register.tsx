// Material UI Components
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Components
import RegistrationStepper from '../../components/RegistrationStepper';

// Styled Components
import { RegisterContainer } from './Register.style';

const Register = () => {
  return (
    <RegisterContainer>
      <Paper>
        <Typography variant='h4' align='center' gutterBottom>
          Register
        </Typography>
        <RegistrationStepper />
      </Paper>
    </RegisterContainer>
  );
};

export { Register };
