import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function FormHeader({ title }: { title: string }) {
  return (
    <Grid item xs={12}>
      <Typography variant='h5' align='center'>
        {title}
      </Typography>

      <Typography
        variant='caption'
        sx={{ display: 'block', textAlign: 'center', my: '10px' }}
      >
        Please fill in your information then click &quot;Next&quot; to move on.
        <br />
        <strong>Note:</strong> * is required.
      </Typography>
    </Grid>
  );
}

export { FormHeader };
