import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import Date from '../form/Date';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';

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

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    dateOfBirth && handleAgeChange();
  }, [dateOfBirth]);

  // eslint-disable-next-line no-useless-escape
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const handleFristNameBlurEvent = () => {
    firstName
      ? setErrMessage({ ...errMessage, firstName: '' })
      : setErrMessage({ ...errMessage, firstName: 'First name is required.' });
  };
  const handleLastNameBlurEvent = () => {
    lastName
      ? setErrMessage({ ...errMessage, lastName: '' })
      : setErrMessage({ ...errMessage, lastName: 'Last name is required.' });
  };
  const handleEmailBlurEvent = () => {
    regex.test(email)
      ? setErrMessage({ ...errMessage, email: '' })
      : setErrMessage({ ...errMessage, email: 'Correct email is required.' });
  };
  const handleGenderBlurEvent = () => {
    gender ? setGenderErrMessage('') : setGenderErrMessage('Gender is required.');
  };

  const handleAgeChange = () => {
    console.log('state value', dateOfBirth);
    const DOB = new window.Date(dateOfBirth);
    const currentDate = new window.Date();
    const eighteenYrs = new window.Date(
      currentDate.getUTCFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    console.log('Date eighteen years ago', eighteenYrs);
    console.log('DOB', DOB);

    if (DOB.valueOf() <= eighteenYrs.valueOf()) {
      setAgeErrMessage('');
    } else {
      setAgeErrMessage('You must be 18 or older.');
    }
  };

  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();

  return (
    <div className='flex flex-col justify-start align-start gap-6 2xl:gap-10 h-full'>
      <form action='/' className='flex flex-col gap-10 2xl:gap-10' onSubmit={submitForm}>
        <div className='name flex flex-row gap-4'>
          <Input
            id='firstName'
            placeholder='Ram'
            labelName='First Name'
            type='text'
            value={firstName}
            setValue={setFirstName}
            // formSubmitStatus={formSubmitStatus}
            onBlur={handleFristNameBlurEvent}
            errMessage={errMessage}
          />
          <Input
            id='lastName'
            placeholder='Thapa'
            labelName='Last Name'
            type='text'
            value={lastName}
            setValue={setLastName}
            // formSubmitStatus={formSubmitStatus}
            onBlur={handleLastNameBlurEvent}
            errMessage={errMessage}
          />
        </div>
        <Input
          id='email'
          placeholder='ramthapa@gmail.com'
          labelName='Email'
          type='email'
          value={email}
          setValue={setEmail}
          // formSubmitStatus={formSubmitStatus}
          onBlur={handleEmailBlurEvent}
          errMessage={errMessage}
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
            onBlur={handleGenderBlurEvent}
            errMessage={genderErrMessage}
            labelName='Gender'
          />
          <Date
            id='date'
            value={dateOfBirth}
            setValue={setDateOfBirth}
            onInput={handleAgeChange}
            errMessage={ageErrMessage}
          />
        </div>
      </form>

      <div className='flex gap-6'>
        <Button label='Go back' disabled={true} onClick={goBackward} />
        <Button label={'Next'} disabled={false} onClick={moveForward} />
      </div>
    </div>
  );
};
export default FirstStep;
