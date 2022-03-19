// React
import { useContext } from 'react';

// Material UI Components
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

// Types
import type { UseRegisterInfoType } from '../../../types/registerInfo';
import type { ChangeEvent } from 'react';

// Context
import RegisterInfoContext from '../../../context/registerInfo';

// Styles
import { CertificateInfoFormContainer } from './CertificateInfoForm.style';

// Components
import FormHeader from '../FormHeader';

function CertificateInfoForm() {
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
    <CertificateInfoFormContainer>
      <FormHeader title='Certification Info' />

      <form>
        <Grid container spacing={3}>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <TextField
              label='CEU License #'
              name='ceu_license_num'
              value={formValues.ceu_license_number}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              size='small'
              label='Exp Date'
              type='date'
              InputLabelProps={{ shrink: true }}
              name='ceu_license_exp_date'
              value={formValues.ceu_license_exp_date}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <TextField
              label='CHHA License #'
              name='chha_license_num'
              value={formValues.chha_license_number}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Exp Date'
              type='date'
              InputLabelProps={{ shrink: true }}
              name='chha_license_exp_date'
              value={formValues.chha_license_exp_date}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </form>
    </CertificateInfoFormContainer>
  );
}

export { CertificateInfoForm };
