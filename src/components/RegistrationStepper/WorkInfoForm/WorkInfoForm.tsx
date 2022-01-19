// Material UI Components
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// Types
import type { Dispatch, SetStateAction } from 'react';
import type { studentInfoType } from '../../../types/studentInfo';

// Components
import FormHeader from '../FormHeader';

// Styles
import { WorkInfoFormContainer } from './WorkInfoForm.style';

interface WorkInfoFormProps {
  formValues: studentInfoType;
  setValues: Dispatch<SetStateAction<studentInfoType>>;
}

function WorkInfoForm({ formValues, setValues }: WorkInfoFormProps) {
  return (
    <WorkInfoFormContainer>
      <FormHeader title='Your Work Info' />

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label='Employer Name' name='work_name' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Employer Address' name='work_address' fullWidth />
          </Grid>

          <Grid item xs={4}>
            <TextField label='City' name='work_city' fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label='State' name='work_city' fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label='Zip' name='work_city' fullWidth />
          </Grid>

          <Grid item>
            <TextField label='Phone #' name='work_phoneNum' fullWidth />
          </Grid>
        </Grid>
      </form>
    </WorkInfoFormContainer>
  );
}

export { WorkInfoForm };
