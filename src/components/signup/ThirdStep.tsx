import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
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
  const [thirdStepErr, setThirdStepErr] = useState({
    companyName: '',
    years: '',
    position: '',
    role: '',
    endDate: '',
    startDate: '',
  });
  const [addDisabled, setAddDisabled] = useState(true);
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
    setUserDetails({ ...userDetails, role: e.target.value });
  };

 const handleInputChange=(field:string, value:string)=>{
  setUserDetails({ ...userDetails, [field]: value });
 }

  const validateDate = () => {
    let isValid = true;
    const startDate = new window.Date(userDetails.startDate);
    const endDate = new window.Date(userDetails.endDate);
    if (!!startDate && !!endDate) {
      if (startDate.valueOf() <= endDate.valueOf()) {
        return isValid;
      } else {
        isValid = false;
      }
      return isValid;
    }
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateDate();
    setUserDetails({ ...userDetails, startDate: e.target.value });
    if (userDetails.startDate !== '' && userDetails.endDate !== '') {
      if (!isValid) {
        setThirdStepErr({ ...thirdStepErr, endDate: "*End date can't be earlier than start date." });
      } else {
        setThirdStepErr({ ...thirdStepErr, endDate: '' });
      }
    }
  };
  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateDate();
    setUserDetails({ ...userDetails, endDate: e.target.value });
    if (userDetails.startDate !== '' && userDetails.endDate !== '') {
      if (!isValid) {
        setThirdStepErr({ ...thirdStepErr, endDate: "*End date can't be earlier than start date." });
      } else {
        setThirdStepErr({ ...thirdStepErr, endDate: '' });
      }
    }
  };
  const validateCompanyName = () => {
    userDetails.companyName
      ? setThirdStepErr({ ...thirdStepErr, companyName: '' })
      : setThirdStepErr({ ...thirdStepErr, companyName: '*Company Name is required.' });
  };
  // const validateYears = () => {
  //   userDetails.years
  //     ? setThirdStepErr({ ...thirdStepErr, years: '' })
  //     : setThirdStepErr({ ...thirdStepErr, years: 'Company Name is required.' });
  // };
  const validatePosition = () => {
    userDetails.position
      ? setThirdStepErr({ ...thirdStepErr, position: '' })
      : setThirdStepErr({ ...thirdStepErr, position: '*Position is required.' });
  };
  const validateRoles = () => {
    userDetails.role
      ? setThirdStepErr({ ...thirdStepErr, role: '' })
      : setThirdStepErr({ ...thirdStepErr, role: '*Roles are required.' });
  };
  const validateStartDate = () => {
    userDetails.startDate
      ? setThirdStepErr({ ...thirdStepErr, startDate: '' })
      : setThirdStepErr({ ...thirdStepErr, startDate: '*Start date is required.' });
  };
  const validateEndDate = () => {
    userDetails.endDate
      ? setThirdStepErr({ ...thirdStepErr, endDate: '' })
      : setThirdStepErr({ ...thirdStepErr, endDate: '*End date is required.' });
  };
  const addExperience = () => {
    userDetails.experiences.length <= 5 &&
      setUserDetails({
        ...userDetails,
        experiences: [...userDetails.experiences, userDetails.position],
        companyName: '',
        years: 0,
        position: '',
        role: '',
        startDate: '',
        endDate: '',
      });
    setModalOn(false);
  };
  const removeExperience = (i: number) => {
    const updatedExperiences = userDetails.experiences;
    updatedExperiences.splice(i, 1);
    setUserDetails({ ...userDetails, skillTags: [...updatedExperiences] });
  };

  useEffect(() => {
    const noErrMessage =
      !thirdStepErr.companyName &&
      !thirdStepErr.years &&
      !thirdStepErr.position &&
      !thirdStepErr.role &&
      !thirdStepErr.startDate &&
      !thirdStepErr.endDate;
    const isDisabled =
      !userDetails.companyName ||
      !userDetails.years ||
      !userDetails.position ||
      !userDetails.role ||
      !userDetails.startDate ||
      !userDetails.endDate ||
      !noErrMessage;
    setAddDisabled(isDisabled);
  }, [
    userDetails.companyName,
    userDetails.companyName,
    thirdStepErr.years,
    userDetails.position,
    userDetails.role,
    userDetails.startDate,
    userDetails.endDate,
    thirdStepErr.years,
    thirdStepErr.position,
    thirdStepErr.role,
    thirdStepErr.startDate,
    thirdStepErr.endDate,
  ]);
  // console.log(addDisabled);
  return (
    <div className='w-[30rem] h-full flex flex-col justify-between'>
      <div
        className={`modal ${
          modalOn ? 'flex' : 'hidden'
        } fixed top-0 left-0 justify-center items-center bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh] z-30`}
      >
        <div className='addExperienceModal flex flex-col gap-2 p-[1rem] h-[30rem] w-[25rem] bg-white opacity-100 z-40 border rounded-md'>
          <h3 className='text-gray-700 font-bold text-2xl text-center'>Work Experience</h3>
          <>
            <Input
              value={userDetails.companyName}
              onChange={(e)=>{handleInputChange('companyName', e.target.value)}}
              label='Company Name'
              err={thirdStepErr.companyName}
              type='text'
              onBlur={validateCompanyName}
            />
            <Err err={thirdStepErr.companyName} />
          </>

          <Input
            value={userDetails.years}
            onChange={(e)=>{handleInputChange('years', e.target.value)}}
            label='Experience (in yrs)'
            type='number'
            min={0}
            err={thirdStepErr.years}
            // onBlur={validateYears}
          />
          <>
            <Input
              value={userDetails.position}
              onChange={(e)=>{handleInputChange('position', e.target.value)}}
              label='Position'
              err={thirdStepErr.position}
              type='text'
              onBlur={validatePosition}
            />
            <Err err={thirdStepErr.position} />
          </>
          <Input
            value={userDetails.role}
            onChange={(e)=>{handleInputChange('role', e.target.value)}}
            label='Roles & Responsibilities'
            err={thirdStepErr.role}
            type='text'
            onBlur={validateRoles}
          />
          <div className='flex gap-4 w-full'>
            <div className='w-full'>
              <Date
                id='startDate'
                value={userDetails.startDate}
                onChange={handleStartDateChange}
                label='Start Date'
                onBlur={validateStartDate}
              />
            </div>
            <div className='w-full'>
              <Date
                id='endDate'
                value={userDetails.endDate}
                onChange={handleEndDateChange}
                label='End Date'
                onBlur={validateEndDate}
              />
              <Err err={thirdStepErr.endDate} />
            </div>
          </div>
          <div className='mt-4'>
            <Button label='Add' disabled={addDisabled} onClick={addExperience} />
          </div>
        </div>
      </div>
      <div className='experiences w-full mx-[1.5rem]'>
        <div className='experiences w-full'>
          <Tag tags={userDetails.experiences} removeTag={removeExperience} />

          {userDetails.experiences.length === 5 && <Err err='5 experiences are enough, mate.' />}
        </div>
        <div className='flex flex-col gap-[64px] mt-[8rem]'>
          <p className='text-gray-500 font-normal text-center'>
            {userDetails.experiences.length > 0
              ? `${userDetails.experiences.length} experience(s) added.`
              : 'No experience added.'}
          </p>
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
