// Material UI Components
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Hooks
import useFormValues from '../../../hooks/useFormValues';

// Types
import type {
  personalInfoType,
  studentInfoType,
} from '../../../types/studentInfo';

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

interface Props {
  formValues: studentInfoType;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function PersonalInfoForm({ formValues, handleChange }: Props) {
  // const [personalInfo, handleChange] =
  //   useFormValues<personalInfoType>(INITIAL_STATE);

  return (
    <PersonalInfoFormContainer>
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
              value={formValues.firstName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name='middleInitial'
              label='M.I.'
              id='middleInitial'
              onChange={handleChange}
              value={formValues.middleInitial}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              name='lastName'
              label='Last Name'
              id='lastName'
              onChange={handleChange}
              value={formValues.lastName}
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
              value={formValues.birthDate}
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
              value={formValues.ssn}
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
              value={formValues.address}
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
              value={formValues.city}
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
              value={formValues.state}
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
              value={formValues.zipCode}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name='email'
              label='Email'
              id='email'
              onChange={handleChange}
              value={formValues.email}
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
              value={formValues.phoneNumber}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </PersonalInfoFormContainer>
  );
}

export { PersonalInfoForm };
