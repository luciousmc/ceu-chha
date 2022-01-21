// React
import { useContext } from 'react';

// Material UI Components
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// Types
import type { ChangeEvent } from 'react';
import type { UseRegisterInfoType } from '../../../types/registerInfo';

// Context
import RegisterInfoContext from '../../../context/registerInfo';

// Styles
import { PersonalInfoFormContainer } from './PersonalInfoForm.style';

// Components
import FormHeader from '../FormHeader';

function PersonalInfoForm() {
  const [formValues, setFormValues] = useContext(
    RegisterInfoContext
  ) as UseRegisterInfoType;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PersonalInfoFormContainer>
      <FormHeader title='Your Personal Info' />

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <TextField
              size='small'
              required
              name='std_fName'
              label='First Name'
              id='firstName'
              onChange={handleChange}
              value={formValues.std_fName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              size='small'
              name='std_middleInitial'
              label='M.I.'
              id='middleInitial'
              onChange={handleChange}
              value={formValues.std_middleInitial}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              size='small'
              required
              name='std_lName'
              label='Last Name'
              id='lastName'
              onChange={handleChange}
              value={formValues.std_lName}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              size='small'
              required
              name='std_birthDate'
              type='date'
              InputLabelProps={{ shrink: true }}
              label='Birth Date'
              id='birthDate'
              onChange={handleChange}
              value={formValues.std_birthDate}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              size='small'
              required
              name='std_ssn'
              label='Social Security #'
              id='ssn'
              onChange={handleChange}
              value={formValues.std_ssn}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              size='small'
              required
              name='std_address'
              label='Address'
              id='address'
              onChange={handleChange}
              value={formValues.std_address}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              size='small'
              required
              name='std_city'
              label='City'
              id='city'
              onChange={handleChange}
              value={formValues.std_city}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              size='small'
              required
              name='std_state'
              label='State'
              id='state'
              onChange={handleChange}
              value={formValues.std_state}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              size='small'
              required
              name='std_zip'
              label='Zip Code'
              id='zipCode'
              onChange={handleChange}
              value={formValues.std_zip}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              size='small'
              name='std_email'
              label='Email'
              id='email'
              onChange={handleChange}
              value={formValues.std_email}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              size='small'
              required
              name='std_phoneNum'
              label='Tel #'
              id='phone'
              onChange={handleChange}
              value={formValues.std_phoneNum}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </PersonalInfoFormContainer>
  );
}

export { PersonalInfoForm };
