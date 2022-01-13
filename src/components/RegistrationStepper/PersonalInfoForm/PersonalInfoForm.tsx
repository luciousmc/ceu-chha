// Material UI Components
import { Grid, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import useFormValues from '../../../hooks/useFormValues';
import { personalInfoType } from '../../../types/studentInfo';

// Styled Components
import { PersonalInfoFormContainer } from './PersonalInfoForm.style';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  middleInitial: '',
  ssn: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  birthDate: '',
  phoneNumber: '',
};

function PersonalInfoForm() {
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);
  const [personalInfo, handleChange] =
    useFormValues<personalInfoType>(INITIAL_STATE);

  return (
    <PersonalInfoFormContainer>
      <Prompt
        when={isFormIncomplete}
        message='Are you Sure you want to leave?'
      />
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
              value={personalInfo.firstName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name='middleInitial'
              label='M.I.'
              id='middleInitial'
              onChange={handleChange}
              value={personalInfo.middleInitial}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              name='lastName'
              label='Last Name'
              id='lastName'
              onChange={handleChange}
              value={personalInfo.lastName}
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
              value={personalInfo.birthDate}
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
              value={personalInfo.ssn}
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
              value={personalInfo.address}
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
              value={personalInfo.city}
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
              value={personalInfo.state}
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
              value={personalInfo.zipCode}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name='email'
              label='Email'
              id='email'
              onChange={handleChange}
              value={personalInfo.email}
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
              value={personalInfo.phoneNumber}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </PersonalInfoFormContainer>
  );
}

export { PersonalInfoForm };
