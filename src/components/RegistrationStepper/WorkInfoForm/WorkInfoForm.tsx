// React
import { useContext } from 'react';

// Material UI Components
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// Types
import type { ChangeEvent } from 'react';
import { UseRegisterInfoType } from '../../../types/registerInfo';

// Context
import RegisterInfoContext from '../../../context/registerInfo';

// Styles
import { WorkInfoFormContainer } from './WorkInfoForm.style';

// Components
import FormHeader from '../FormHeader';

function WorkInfoForm() {
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
    <WorkInfoFormContainer>
      <FormHeader title='Your Work Info' />

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              size='small'
              label='Employer Name'
              name='work_name'
              value={formValues.work_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              size='small'
              label='Employer Address'
              name='work_address'
              value={formValues.work_address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              size='small'
              label='City'
              name='work_city'
              value={formValues.work_city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size='small'
              label='State'
              name='work_state'
              value={formValues.work_state}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size='small'
              label='Zip'
              name='work_zip'
              value={formValues.work_zip}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              size='small'
              label='Phone #'
              name='work_phoneNum'
              value={formValues.work_phoneNum}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </WorkInfoFormContainer>
  );
}

export { WorkInfoForm };
