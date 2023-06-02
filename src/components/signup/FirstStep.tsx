import React, { useContext, useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import Date from '../form/Date';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';
import { ChangeEvent } from 'react';
import { SignUpContext } from '../../pages/SignUp';
import Err from '../form/Err';

export let firstStepComplete: boolean;

const FirstStep = () => {
  const { userDetails, setUserDetails } = useContext(SignUpContext);
  const [err, setErr] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [genderErr, setGenderErr] = useState('');
  const [ageErr, setAgeErr] = useState('');
  const [firstNextDisabled, setFirstNextDisabled] = useState(true);
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
    isNextDisabled: boolean;
    setIsNextDisabled: () => void;
  }>();
  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, firstName: e.target.value });
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, lastName: e.target.value });
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, email: e.target.value });
  };
  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserDetails({ ...userDetails, gender: e.target.value });
  };

  // eslint-disable-next-line no-useless-escape
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const validateFirstName = () => {
    userDetails.firstName
      ? setErr({ ...err, firstName: '' })
      : setErr({ ...err, firstName: 'First name is required.' });
  };
  const validateLastName = () => {
    userDetails.lastName
      ? setErr({ ...err, lastName: '' })
      : setErr({ ...err, lastName: 'Last name is required.' });
  };
  const validateEmail = () => {
    regex.test(userDetails.email)
      ? setErr({ ...err, email: '' })
      : setErr({ ...err, email: 'Correct email is required.' });
  };
  const validateGender = () => {
    userDetails.gender ? setGenderErr('') : setGenderErr('Gender is required.');
  };

  const handleAgeChange = () => {
    let isValid = true;
    const DOB = new window.Date(userDetails.dateOfBirth);
    const currentDate = new window.Date();
    const eighteenYrs = new window.Date(
      currentDate.getUTCFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    if (DOB.valueOf() <= eighteenYrs.valueOf()) {
      return isValid;
    } else {
      isValid = false;
    }
    return isValid;
  };

  const handleDobChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = handleAgeChange();
    if (!isValid) {
      setAgeErr('You must be 18 or older.');
    } else {
      setAgeErr('');
    }
    setUserDetails({ ...userDetails, dateOfBirth: e.target.value });
  };
  useEffect(() => {
    const noErrMessage = !err.firstName && !err.lastName && !err.email && !genderErr && !ageErr;
    const isDisabled =
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.gender ||
      !userDetails.dateOfBirth ||
      !noErrMessage;
    setFirstNextDisabled(isDisabled);
  }, [
    userDetails.firstName,
    userDetails.lastName,
    userDetails.email,
    userDetails.gender,
    userDetails.dateOfBirth,
    err.firstName,
    err.lastName,
    err.email,
    genderErr,
    ageErr,
  ]);
  firstStepComplete = !firstNextDisabled;

  return (
    <div className='flex flex-col align-start justify-between pt-[6rem] h-full w-[30rem] mx-[7rem]'>
      <div className='flex flex-col  gap-10 items-start 2xl:gap-10'>
        <div className='name flex flex-row gap-4 w-full'>
          <div>
            <Input
              id='firstName'
              placeholder='Ram'
              label='First Name'
              type='text'
              value={userDetails.firstName}
              onChange={handleFirstNameChange}
              onBlur={validateFirstName}
              err={err.firstName}
            />
            <Err err={err.firstName} />
          </div>
          <div>
            <Input
              id='lastName'
              placeholder='Thapa'
              label='Last Name'
              type='text'
              value={userDetails.lastName}
              onChange={handleLastNameChange}
              onBlur={validateLastName}
              err={err.lastName}
            />
            <Err err={err.lastName} />
          </div>
        </div>
        <div className='w-full'>
          <Input
            id='email'
            placeholder='ramthapa@gmail.com'
            label='Email'
            type='email'
            value={userDetails.email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            err={err.email}
          />
          <Err err={err.email} />
        </div>
        <div className='flex gap-4 w-full'>
          <div>
            <Select
              id='gender'
              onChange={handleGenderChange}
              value={userDetails.gender}
              options={[
                { value: 'Male', label: "I'm a male." },
                { value: 'Female', label: "I'm a female." },
                { value: 'Other', label: "I'm out of this world." },
              ]}
              placeholder='Choose gender'
              onBlur={validateGender}
              err={genderErr}
              label='Gender'
            />
            <Err err={genderErr} />
          </div>
          <div>
            <Date
              id='dob'
              value={userDetails.dateOfBirth}
              onChange={handleDobChange}
              err={ageErr}
              label='Date of birth'
            />
            <Err err={ageErr} />
          </div>
        </div>
      </div>

      <div className='flex gap-6 pt-[2rem] 2xl:pt-[4rem] w-full'>
        <Button label='Back' disabled={true} onClick={goBackward} />
        <Button label={'Next'} disabled={firstNextDisabled} onClick={moveForward} />
      </div>
    </div>
  );
};
export default FirstStep;
