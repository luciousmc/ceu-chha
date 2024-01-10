import { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import PersonalInfoForm from './PersonalInfoForm';
import WorkInfoForm from './WorkInfoForm';
import CertificateInfoForm from './CertificateInfoForm';
import ReviewInfo from './ReviewInfo/ReviewInfo';
import { StepContainer } from './RegistrationStepper.style';
import { useRegisterInfoContext } from '../../hooks/useRegisterInfoContext';

function RegistrationStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useRegisterInfoContext();

  const steps = [
    'Personal Info',
    'Work Info',
    'Certificate Info',
    'Review and Submit',
  ];

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleSubmit = () => {};

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <WorkInfoForm />;
      case 2:
        return <CertificateInfoForm />;
      case 3:
        return <ReviewInfo />;
      default:
        return 'Invalid Step';
    }
  };

  return (
    <StepContainer>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <div>
          <h1>Account Creation Complete</h1>
          <Button onClick={() => console.log({ values })}>
            Log the Results
          </Button>
        </div>
      ) : (
        getStepContent(activeStep)
      )}

      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </StepContainer>
  );
}

export { RegistrationStepper };
