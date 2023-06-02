import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';
import Checkbox from '../form/Checkbox';
import Input from '../form/Input';


const FinalStep = () => {
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();
  return (
    <div className='w-[30rem] h-full flex-col justify-between'>
      <div>
        <p>How do you prefer to work?</p>
        <div className='flex w-full justify-between'>
        <Checkbox id='hybrid' label='On-Site' />
        <Checkbox id='hybrid' label='Remote' />
        <Checkbox id='hybrid' label='Hybrid' />
        </div>
      </div>
      <div className='salaryExpectation flex justify-between gap-4'>
        <Input type='number' err='lower limit is required.' placeholder='Lower Limit'/>
        <p>to</p>
        <Input type='number' err='upper limit is required.' placeholder='upper Limit'/>
      </div>
      <div>
      <Button label='Upload resume' />
      </div>
      <div className='flex w-full'>
        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label='Submit' disabled={false} onClick={moveForward} />
      </div>
    </div>
  );
};

export default FinalStep;
