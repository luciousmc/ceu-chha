// Material UI Components
import { Grid, Paper, Typography } from '@mui/material';

// React Router
import { useNavigate } from 'react-router-dom';

// Styled Components
import { LandingButton, LandingContainer } from './Landing.style';

function Landing() {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Paper elevation={5} sx={{ padding: 2 }}>
        <Typography variant='h4' align='center' gutterBottom>
          Welcome! Choose an option below
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <LandingButton
              variant='contained'
              color='primary'
              onClick={() => navigate('/register')}
            >
              First-Time Student
            </LandingButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LandingButton
              variant='contained'
              color='secondary'
              onClick={() => navigate('/login')}
            >
              Returning Student
            </LandingButton>
          </Grid>
        </Grid>
      </Paper>
    </LandingContainer>
  );
}

export { Landing };
