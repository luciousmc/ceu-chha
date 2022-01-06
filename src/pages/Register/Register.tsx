// Material UI Components
import { Grid, TextField, Typography } from '@mui/material';

// Types
import { studentInfo } from '../../types/studentInfo';

// Styled Components
import { RegisterContainer } from './Register.style';

function Register({
  firstNameVal,
  middleInitialVal,
  lastNameVal,
  birthDateVal,
  ssnVal,
  addressVal,
  cityVal,
  stateVal,
  zipCodeVal,
  emailVal,
  phoneVal,
}: studentInfo) {
  const handleChange = () => {};

  return (
    <RegisterContainer>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h5' align='center'>
              Your Personal Details
            </Typography>
            <Typography variant='subtitle1' align='center' gutterBottom>
              Please fill in your information then click &quot;Next&quot; to
              move on.
              <br />
              <strong>Note:</strong> * is required.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              required
              name='firstName'
              label='First Name'
              id='firstName'
              onChange={handleChange}
              value={firstNameVal}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name='middleInitial'
              label='M.I.'
              id='middleInitial'
              onChange={handleChange}
              value={middleInitialVal}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              name='lastName'
              label='Last Name'
              id='lastName'
              onChange={handleChange}
              value={lastNameVal}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              name='birthDate'
              type='date'
              InputLabelProps={{ shrink: true }}
              label='Birth Date'
              id='birthDate'
              onChange={handleChange}
              value={birthDateVal}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              name='ssn'
              label='Social Security #'
              id='ssn'
              onChange={handleChange}
              value={ssnVal}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              name='address'
              label='Address'
              id='address'
              onChange={handleChange}
              value={addressVal}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='city'
              label='City'
              id='city'
              onChange={handleChange}
              value={cityVal}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              required
              name='state'
              label='State'
              id='state'
              onChange={handleChange}
              value={stateVal}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              required
              name='zipCode'
              label='Zip Code'
              id='zipCode'
              onChange={handleChange}
              value={zipCodeVal}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name='email'
              label='Email'
              id='email'
              onChange={handleChange}
              value={emailVal}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              name='phone'
              label='Tel #'
              id='phone'
              onChange={handleChange}
              value={phoneVal}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </RegisterContainer>
  );
}

export { Register };
