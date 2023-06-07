import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignUpContext } from '../../pages/SignUp';
import Button from '../form/Button';
import Checkbox from '../form/Checkbox';
import Err from '../form/Err';
import Input from '../form/Input';

const FinalStep = () => {
  const { userDetails, setUserDetails } = useContext(SignUpContext);
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();
  const [finalStepErr, setFinalStepErr] = useState({
    jobPreferences: '',
    upperLimit: '',
    salary: '',
    resume: '',
  });
  const [finalSubmitDisabled, setFinalSubmitDisabled] = useState(true);
  const handleLowerLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, salaryLowerLimit: Number(e.target.value) });
  };
  const handleUpperLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, salaryUpperLimit: Number(e.target.value) });
  };

  const vaidateSalary = () => {
    userDetails.salaryLowerLimit === 0 || null || userDetails.salaryLowerLimit === 0 || null
      ? setFinalStepErr({ ...finalStepErr, salary: '*Salary expectation is required.' })
      : setFinalStepErr({ ...finalStepErr, salary: '' });

    userDetails.salaryLowerLimit > userDetails.salaryUpperLimit
      ? setFinalStepErr({
          ...finalStepErr,
          upperLimit: "Upper limit can't be smaller than lower limit.",
        })
      : setFinalStepErr({ ...finalStepErr, upperLimit: '' });
  };

  const updateJobPreference = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'on-site') {
      if (userDetails.jobPreferences.includes('On-site')) {
        const updatedPreferences = userDetails.jobPreferences;
        const index = updatedPreferences.indexOf('On-site');
        updatedPreferences.splice(index, 1);
        setUserDetails({ ...userDetails, jobPreferences: [...updatedPreferences] });
      } else {
        setUserDetails({
          ...userDetails,
          jobPreferences: [...userDetails.jobPreferences, 'On-site'],
        });
      }
    }
    if (e.target.id === 'remote') {
      if (userDetails.jobPreferences.includes('Remote')) {
        const updatedPreferences = userDetails.jobPreferences;
        const index = updatedPreferences.indexOf('Remote');
        updatedPreferences.splice(index, 1);
        setUserDetails({ ...userDetails, jobPreferences: [...updatedPreferences] });
      } else {
        setUserDetails({
          ...userDetails,
          jobPreferences: [...userDetails.jobPreferences, 'Remote'],
        });
      }
    }
    if (e.target.id === 'hybrid') {
      if (userDetails.jobPreferences.includes('Hybrid')) {
        const updatedPreferences = userDetails.jobPreferences;
        const index = updatedPreferences.indexOf('Hybrid');
        updatedPreferences.splice(index, 1);
        setUserDetails({ ...userDetails, jobPreferences: [...updatedPreferences] });
      } else {
        setUserDetails({
          ...userDetails,
          jobPreferences: [...userDetails.jobPreferences, 'Hybrid'],
        });
      }
    }
  };
  const validateJobPreference = () => {
    userDetails.jobPreferences.length === 0
      ? setFinalStepErr({
          ...finalStepErr,
          jobPreferences: '*Please select atleast one job preference.',
        })
      : setFinalStepErr({ ...finalStepErr, jobPreferences: '' });
  };
  const handleAgreement = () => {
    setUserDetails({ ...userDetails, agreed: !userDetails.agreed });
  };
  const readResume = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedResume = e.target.files;
    const previewResume = uploadedResume && uploadedResume[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setUserDetails({ ...userDetails, resumeFileName: previewResume?.name as string });
    });
    reader.readAsDataURL(previewResume as File);
    console.log(previewResume);
    
  };
  useEffect(() => {
    const noErrMessage =
      !finalStepErr.jobPreferences && !finalStepErr.salary && !finalStepErr.resume;
    const isDisabled =
      userDetails.jobPreferences.length <= 0 ||
      !userDetails.salaryLowerLimit ||
      !userDetails.salaryUpperLimit ||
      !userDetails.resumeFileName ||
      !userDetails.agreed ||
      !noErrMessage;
    setFinalSubmitDisabled(isDisabled);
    isDisabled
      ? setUserDetails({ ...userDetails, finalStepComplete: false })
      : setUserDetails({ ...userDetails, finalStepComplete: true });
  }, [userDetails, finalStepErr]);

  useEffect(()=>{
    console.log(userDetails.resumeFileName);
  },[userDetails.resumeFileName])

  return (
    <div className='w-[30rem] h-full flex flex-col justify-between ml-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-semibold text-gray-800 dark:text-white'>
          How do you prefer to work?
        </p>
        <div className='flex flex-col gap-1'>
          <div className='flex w-full justify-between'>
            <Checkbox
              id='on-site'
              label='On-Site'
              onChange={updateJobPreference}
              onBlur={validateJobPreference}
            />
            <Checkbox
              id='remote'
              label='Remote'
              onChange={updateJobPreference}
              onBlur={validateJobPreference}
            />
            <Checkbox
              id='hybrid'
              label='Hybrid'
              onChange={updateJobPreference}
              onBlur={validateJobPreference}
            />
          </div>
          <Err err={finalStepErr.jobPreferences} />
        </div>
      </div>
      <div className='salaryExpectation flex flex-col gap-2 '>
        <p className='text-sm font-semibold text-gray-800 dark:text-white'>
          Salary Expectation (in NPR)
        </p>
        <div className='flex justify-between gap-4 items-center w-full'>
          <Input
            type='number'
            value={userDetails.salaryLowerLimit}
            onChange={handleLowerLimitChange}
            err='lower limit is required.'
            placeholder='Lower Limit'
            onBlur={vaidateSalary}
          />
          <p className='text-sm  text-gray-800 dark:text-white'>to</p>
          <div>
            <Input
              type='number'
              value={userDetails.salaryUpperLimit}
              onChange={handleUpperLimitChange}
              err='upper limit is required.'
              placeholder='upper Limit'
              onBlur={vaidateSalary}
            />
            <Err err={finalStepErr.upperLimit} />
          </div>
        </div>
        <Err err={finalStepErr.salary} />
      </div>
      <div className='flex flex-col items-start'>
        <label
          className='text-xs text-indigo-500 border border-indigo-500 rounded-sm px-1 py-1'
          htmlFor='resume'
        >
          Upload resume ↑
        </label>
        <input
          id='resume'
          type='file'
          hidden
          onChange={readResume}
          accept='text/plain, application/pdf, application/msword '
        />
        {userDetails.resumeFileName && (
          <p className='text-indig-700 text-sm'>{userDetails.resumeFileName}</p>
        )}
      </div>
      <Checkbox
        id='hybrid'
        label='I agree to all the terms and conditions.'
        onClick={handleAgreement}
      />
      <div className='flex w-full gap-6'>
        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label='Submit' disabled={finalSubmitDisabled} onClick={moveForward} />
      </div>
    </div>
  );
};

export default FinalStep;
