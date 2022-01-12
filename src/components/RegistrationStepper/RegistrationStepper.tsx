// React
import { useState } from 'react';

// Material UI Components
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Components
import PersonalInfoForm from './PersonalInfoForm';
import WorkInfoForm from './WorkInfoForm';
import CertificateInfoForm from './CertificateInfoForm';
import ReviewInfo from './ReviewInfo/ReviewInfo';

// Styled Components
import {
  RegistrationStepperContainer,
  StepContainer,
} from './RegistrationStepper.style';

const getSteps = () => {
  return [
    'Personal Information',
    'Work Information',
    'Certifications',
    'Review and Submit',
  ];
};

const getStepContent = (stepId: number) => {
  switch (stepId) {
    case 0:
      return <PersonalInfoForm />;
    case 1:
      return <WorkInfoForm />;
    case 2:
      return <CertificateInfoForm />;
    case 3:
      return <ReviewInfo />;
    default:
      return <h1>Invalid Step</h1>;
  }
};

const RegistrationStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <RegistrationStepperContainer>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <StepContainer>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {activeStep < 3 ? (
              <div>{getStepContent(activeStep)}</div>
            ) : (
              <Typography align='center'>
                {getStepContent(activeStep)}
              </Typography>
            )}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </StepContainer>
    </RegistrationStepperContainer>
  );
};

export { RegistrationStepper };
