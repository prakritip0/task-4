import React, { ChangeEvent, useContext, useState } from 'react';
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
    salary: '',
    resume: '',
    agreement: '',
  });
  const handleLowerLimitChange = () => {};
  const handleUpperLimitChange = () => {};
  const validateLowerLimit = () => {};
  const validateUpperLimit = () => {};

  const updateHybridPreference = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.id);
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

  return (
    <div className='w-[30rem] h-full flex flex-col justify-between ml-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-semibold text-gray-800 dark:text-white'>
          How do you prefer to work?
        </p>
        <div className='flex flex-col gap-1'>
          <div className='flex w-full justify-between'>
            <Checkbox id='on-site' label='On-Site' onChange={updateHybridPreference} />
            <Checkbox id='remote' label='Remote' onChange={updateHybridPreference} />
            <Checkbox id='hybrid' label='Hybrid' onChange={updateHybridPreference} />
          </div>
          <Err err='*Please select atleast one job preference.' />
        </div>
      </div>
      <div className='salaryExpectation flex flex-col gap-2 '>
        <p className='text-sm font-semibold text-gray-800 dark:text-white'>
          Salary Expectation (in NPR)
        </p>
        <div className='flex justify-between gap-4 items-center'>
          <Input
            type='number'
            value={userDetails.salaryLowerLimit}
            err='lower limit is required.'
            placeholder='Lower Limit'
            onBlur={validateLowerLimit}
          />
          <p className='text-sm  text-gray-800 dark:text-white'>to</p>
          <Input
            type='number'
            value={userDetails.salaryUpperLimit}
            err='upper limit is required.'
            placeholder='upper Limit'
            onBlur={validateUpperLimit}
          />
        </div>
        <Err err='*Salary expectation is required.' />
      </div>
      <div className='flex flex-col items-start'>
        <label
          className='text-xs text-indigo-500 border border-indigo-500 rounded-sm px-1 py-1'
          htmlFor='resume'
        >
          Upload resume ↑
        </label>
        <input id='resume' type='file' hidden />
      </div>
      <Checkbox id='hybrid' label='I agree to all the terms and conditions.' />
      <div className='flex w-full gap-6'>
        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label='Submit' disabled={true} onClick={moveForward} />
      </div>
    </div>
  );
};

export default FinalStep;
