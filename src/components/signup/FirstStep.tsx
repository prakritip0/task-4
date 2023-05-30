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

  const [errMessage, setErrMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [genderErrMessage, setGenderErrMessage] = useState('');
  const [ageErrMessage, setAgeErrMessage] = useState('');
  const [firstNextDisabled, setFirstNextDisabled] = useState(true);

  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
    isNextDisabled: boolean;
    setIsNextDisabled: () => void;
  }>();

  // eslint-disable-next-line no-useless-escape
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const validateFirstName = () => {
    firstName
      ? setErrMessage({ ...errMessage, firstName: '' })
      : setErrMessage({ ...errMessage, firstName: 'First name is required.' });
  };
  const validateLastName = () => {
    lastName
      ? setErrMessage({ ...errMessage, lastName: '' })
      : setErrMessage({ ...errMessage, lastName: 'Last name is required.' });
  };
  const validateEmail = () => {
    regex.test(email)
      ? setErrMessage({ ...errMessage, email: '' })
      : setErrMessage({ ...errMessage, email: 'Correct email is required.' });
  };
  const validateGender = () => {
    gender ? setGenderErrMessage('') : setGenderErrMessage('Gender is required.');
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
      setAgeErrMessage('You must be 18 or older.');
    } else {
      setAgeErrMessage('');
    }
    setDateOfBirth(e.target.value);
  };

  useEffect(() => {
    const noErrMessage =
      !errMessage.firstName &&
      !errMessage.lastName &&
      !errMessage.email &&
      !genderErrMessage &&
      !ageErrMessage;
    // console.log(noErrMessage);

    const isDisabled =
      !firstName || !lastName || !email || !gender || !dateOfBirth || !noErrMessage;
    setFirstNextDisabled(isDisabled);
  }, [
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    errMessage.firstName,
    errMessage.lastName,
    errMessage.email,
    genderErrMessage,
    ageErrMessage,
  ]);
  firstStepComplete = !firstNextDisabled;

  return (
    <div className='flex flex-col align-start justify-between pt-[6rem] h-full w-[30rem] mx-[7rem]'>
      <div className='flex flex-col  gap-10 items-start 2xl:gap-10'>
        <div className='name flex flex-row gap-4'>
          <Input
            id='firstName'
            placeholder='Ram'
            labelName='First Name'
            type='text'
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            // formSubmitStatus={formSubmitStatus}
            onBlur={validateFirstName}
            error={errMessage.firstName}
          />
          <Input
            id='lastName'
            placeholder='Thapa'
            labelName='Last Name'
            type='text'
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            onBlur={validateLastName}
            error={errMessage.lastName}
          />
        </div>
        <Input
          id='email'
          placeholder='ramthapa@gmail.com'
          labelName='Email'
          type='email'
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          // formSubmitStatus={formSubmitStatus}
          onBlur={validateEmail}
          error={errMessage.email}
        />
        <div className='flex gap-4'>
          <Select
            id='gender'
            setValue={setGender}
            value={gender}
            options={[
              { value: 'Male', label: "I'm a male." },
              { value: 'Female', label: "I'm a female." },
              { value: 'Other', label: "I'm out of this world." },
            ]}
            placeholder='Choose gender'
            onBlur={validateGender}
            errMessage={genderErrMessage}
            labelName='Gender'
          />
          <Date
            id='date'
            value={dateOfBirth}
            onChange={handleDobChange}
            errMessage={ageErrMessage}
          />
        </div>
      </div>

      <div className='flex gap-6 pt-[2rem] 2xl:pt-[4rem]'>
        <Button label='Back' disabled={true} onClick={goBackward} />
        <Button label={'Next'} disabled={firstNextDisabled} onClick={moveForward} />
      </div>
    </div>
  );
};
export default FirstStep;
