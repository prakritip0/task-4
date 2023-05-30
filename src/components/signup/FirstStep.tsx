import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import Date from '../form/Date';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';
import { ChangeEvent } from 'react';

export let firstStepComplete: boolean;

const FirstStep = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

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
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  };
  const handleGenderChange=(e:ChangeEvent<HTMLSelectElement>)=>{
   setGender(e.target.value)
  }

  // eslint-disable-next-line no-useless-escape
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const validateFirstName = () => {
    firstName
      ? setErr({ ...err, firstName: '' })
      : setErr({ ...err, firstName: 'First name is required.' });
  };
  const validateLastName = () => {
    lastName
      ? setErr({ ...err, lastName: '' })
      : setErr({ ...err, lastName: 'Last name is required.' });
  };
  const validateEmail = () => {
    regex.test(email)
      ? setErr({ ...err, email: '' })
      : setErr({ ...err, email: 'Correct email is required.' });
  };
  const validateGender = () => {
    gender ? setGenderErr('') : setGenderErr('Gender is required.');
  };

  const handleAgeChange = () => {
    let isValid = true;
    const DOB = new window.Date(dateOfBirth);
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
    setDateOfBirth(e.target.value);
  };

  useEffect(() => {
    const noErrMessage = !err.firstName && !err.lastName && !err.email && !genderErr && !ageErr;

    const isDisabled =
      !firstName || !lastName || !email || !gender || !dateOfBirth || !noErrMessage;
    setFirstNextDisabled(isDisabled);
  }, [
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
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
          <Input
            id='firstName'
            placeholder='Ram'
            labelName='First Name'
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
            // formSubmitStatus={formSubmitStatus}
            onBlur={validateFirstName}
            err={err.firstName}
          />
          <Input
            id='lastName'
            placeholder='Thapa'
            labelName='Last Name'
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
            onBlur={validateLastName}
            err={err.lastName}
          />
        </div>
        <Input
          id='email'
          placeholder='ramthapa@gmail.com'
          labelName='Email'
          type='email'
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
          err={err.email}
        />
        <div className='flex gap-4 w-full'>
          <Select
            id='gender'
            onChange={handleGenderChange}
           
            value={gender}
            options={[
              { value: 'Male', label: "I'm a male." },
              { value: 'Female', label: "I'm a female." },
              { value: 'Other', label: "I'm out of this world." },
            ]}
            placeholder='Choose gender'
            onBlur={validateGender}
            err={genderErr}
            labelName='Gender'
          />
          <Date id='date' value={dateOfBirth} onChange={handleDobChange} errMessage={ageErr} />
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
