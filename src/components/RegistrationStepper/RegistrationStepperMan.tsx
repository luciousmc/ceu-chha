// React
import { useContext, useState } from 'react';

// Material UI Components
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';

// Context
import RegisterInfoContext from '../../context/registerInfo';

// Components
import PersonalInfoForm from './PersonalInfoForm';
import WorkInfoForm from './WorkInfoForm';
import CertificateInfoForm from './CertificateInfoForm';
import ReviewInfo from './ReviewInfo/ReviewInfo';

import type { UseRegisterInfoType } from '../../types/useRegisterInfo';

function RegistrationStepperMan() {
  const [activeStep, setActiveStep] = useState(0);

  const [values, setValues] = useContext(
    RegisterInfoContext
  ) as UseRegisterInfoType;

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
        return <PersonalInfoForm formValues={values} setValues={setValues} />;
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
    <div>
      <h1>Stepper Manual</h1>
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
        <div>{getStepContent(activeStep)}</div>
      )}

      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

export default RegistrationStepperMan;
