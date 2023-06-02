import React, { ChangeEvent, useContext, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignUpContext } from '../../pages/SignUp';
import Button from '../form/Button';
import Date from '../form/Date';
import Err from '../form/Err';
import Input from '../form/Input';
import Tag from '../form/Tag';

const ThirdStep = () => {
  const { userDetails, setUserDetails } = useContext(SignUpContext);

  const [modalOn, setModalOn] = useState(false);
  const [startDateErr, setStartDateErr] = useState('');
  const [endDateErr, setEndDateErr] = useState('');
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();

  const openModal = () => {
    setModalOn(true);
  };
  const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, companyName: e.target.value });
  };
  const handleYearsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, years: Number(e.target.value) });
  };
  const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, position: e.target.value });
  };
  const handleRolesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, roles: e.target.value });
  };
  const validateDate = () => {
    let isValid = true;
    const startDate = new window.Date(userDetails.startDate);
    const endDate = new window.Date(userDetails.endDate);
    if (startDate.valueOf() <= endDate.valueOf()) {
      return isValid;
    } else {
      isValid = false;
    }
    return isValid;
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateDate();
    setUserDetails({ ...userDetails, startDate: e.target.value });
    if (!isValid) {
      setStartDateErr("Start date can't be later than end date.");
    } else {
      setStartDateErr('');
    }
  };
  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateDate();
    setUserDetails({ ...userDetails, endDate: e.target.value });
    if (!isValid) {
      setEndDateErr("End date can't be earlier than start date.");
    } else {
      setEndDateErr('');
    }
  };

  const addExperience = () => {
    setUserDetails({
      ...userDetails,
      experiences: [...userDetails.experiences, userDetails.position],
      companyName: '',
      years: 0,
      position: '',
      roles: '',
    });
    setModalOn(false);
  };

  const removeExperience = (i: number) => {
    const updatedExperiences = userDetails.experiences;
    updatedExperiences.splice(i, 1);
    setUserDetails({ ...userDetails, skillTags: [...updatedExperiences] });
  };
  console.log('experiences', userDetails.experiences);

  return (
    <div className='w-[30rem] h-full flex flex-col justify-between'>
      <div
        className={`modal ${
          modalOn ? 'flex' : 'hidden'
        } fixed top-0 left-0 justify-center items-center bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh] z-30`}
      >
        <div className='addExperienceModal flex flex-col gap-2 p-[1rem] h-[30rem] w-[25rem] bg-white opacity-100 z-40 border rounded-md'>
          <h3 className='text-gray-700 font-bold text-2xl text-center'>Work Experience</h3>

          <Input
            value={userDetails.companyName}
            onChange={handleCompanyNameChange}
            label='Company Name'
            err='Company Name is required.'
            type='text'
          />
          <Input
            value={userDetails.years}
            onChange={handleYearsChange}
            label='Experience (in yrs)'
            err='Years of experience is required.'
            type='number'
            min={0}
          />
          <Input
            value={userDetails.position}
            onChange={handlePositionChange}
            label='Position'
            err='Position is required.'
            type='text'
          />
          <Input
            value={userDetails.roles}
            onChange={handleRolesChange}
            label='Roles & Responsibilities'
            err='Roles are required.'
            type='text'
          />
          <div className='flex gap-4'>
            <div>
              <Date
                id='startDate'
                value={userDetails.startDate}
                onChange={handleStartDateChange}
                label='Start Date'
              />
              <Err err={startDateErr} />
            </div>
            <div>
              <Date
                id='endDate'
                value={userDetails.endDate}
                onChange={handleEndDateChange}
                label='End Date'
              />
              <Err err={endDateErr} />
            </div>
          </div>
          <div className='mt-8'>
            <Button label='Add' disabled={false} onClick={addExperience} />
          </div>
        </div>
      </div>
      <div className='experiences w-full mx-[1.5rem]'>
        <div className='experiences w-full'>
          <Tag tags={userDetails.experiences} removeTag={removeExperience} />
        </div>
        <div className='flex flex-col gap-[64px] mt-[8rem]'>
          <p className='text-gray-500 font-normal text-center'>No experience added.</p>
          <div className='flex flex-col justify-end items-center gap-1'>
            <button
              id='addNew'
              onClick={openModal}
              className='bg-indigo-500 text-white h-[2rem] w-[2rem] rounded-full'
            >
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
    </div>
  );
};

export default ThirdStep;
