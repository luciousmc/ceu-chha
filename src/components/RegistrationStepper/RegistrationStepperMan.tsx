import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import { useContext, useState } from 'react';
import { Button, getStepContentUtilityClass } from '@mui/material';
import RegisterInfoContext from '../../context/registerInfo';
import PersonalInfoForm from './PersonalInfoForm';
import WorkInfoForm from './WorkInfoForm';
import CertificateInfoForm from './CertificateInfoForm';
import ReviewInfo from './ReviewInfo/ReviewInfo';
import useFormValues from '../../hooks/useFormValues';
import type { studentInfoType } from '../../types/studentInfo';

function RegistrationStepperMan() {
  const [activeStep, setActiveStep] = useState(0);

  const [values, setValues] = useContext(RegisterInfoContext);

  const [formValues, handleChange] = useFormValues({} as studentInfoType);

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
        return (
          <PersonalInfoForm
            formValues={formValues}
            handleChange={handleChange}
          />
        );
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
          <Step>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <h1>Account Creation Complete</h1>
      ) : (
        <div>{getStepContent(activeStep)}</div>
      )}

      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

export default RegistrationStepperMan;
