import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';
import Checkbox from '../form/Checkbox';
import Input from '../form/Input';
import Label from '../form/Label';

const FinalStep = () => {
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();
  return (
    <div className='w-[30rem] h-full flex flex-col justify-between ml-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-semibold text-gray-800'>How do you prefer to work?</p>
        <div className='flex w-full justify-between'>
          <Checkbox id='hybrid' label='On-Site' />
          <Checkbox id='hybrid' label='Remote' />
          <Checkbox id='hybrid' label='Hybrid' />
        </div>
      </div>
      <div className='salaryExpectation flex flex-col gap-2 '>
        <p className='text-sm font-semibold text-gray-800'>Salary Expectations (in NPR)</p>
        <div className='flex justify-between gap-4'>
          <Input type='number' err='lower limit is required.' placeholder='Lower Limit' />
          <p>to</p>
          <Input type='number' err='upper limit is required.' placeholder='upper Limit' />
        </div>
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
        <Button label='Submit' disabled={false} onClick={moveForward} />
      </div>
    </div>
  );
};

export default FinalStep;
