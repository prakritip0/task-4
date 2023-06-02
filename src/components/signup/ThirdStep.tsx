import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';
import Input from '../form/Input';

const ThirdStep = () => {
  const [modalOn, setModalOn]= useState(false)
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();

  const openModal = () => {
    setModalOn(true);
  };
  const addExperience=()=>{
    console.log('experience added');
    setModalOn(false);
  }
console.log(modalOn);

  return (
    <div className='w-[30rem] h-full flex flex-col justify-between'>
      <div className={`modal ${modalOn? 'flex' : 'hidden'} absolute top-0 left-0 justify-center items-center bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh] z-30`}>
        <div className='addExperienceModal flex flex-col gap-2 p-[1rem] h-[30rem] w-[25rem] bg-white opacity-100 z-40 border rounded-md'>
          <h3 className='text-gray-700 font-bold text-2xl text-center'>Work Experience</h3>
          <Input labelName='Company Name' err='Company Name is required.' type='text' />
          <Input labelName='Experience (in yrs)' err='Years of experience is required.' type='number' />
          <Input labelName='Position' err='Position is required.' type='text' />
          <Input labelName='Roles & Responsibilities' err='Roles are required.' type='text' />
          <Button label='Add' disabled={false} onClick={addExperience} />
        </div>
      </div>
      <div className='experiences'></div>
      <div className='flex  flex-col gap-[64px] mt-[8rem]'>
        <div className=''>
          <p className='text-gray-500 font-normal text-center'>No experience added.</p>
        </div>
        <div className='flex flex-col justify-end items-center gap-1'>
          <button id='addNew' onClick={openModal} className='bg-indigo-500 text-white h-[2rem] w-[2rem] rounded-full'>
            +
          </button>
          {/* <Button label='+' disabled={false} onClick={openModal} className='w-[2rem] h-[2rem] bg-ingido-500 rounded-full' /> */}
          <label htmlFor='addNew' className='text-gray-800 text-xs'>
            Add new
          </label>
        </div>
      </div>
      <div className='flex gap-6'>
        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label='Next' disabled={false} onClick={moveForward} />
      </div>
    </div>
  );
};

export default ThirdStep;
