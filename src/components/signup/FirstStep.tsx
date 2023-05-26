import React, { useEffect, useRef, useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import Select from '../form/Select';
import Date from '../form/Date';

const FirstStep = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  // const [age, setAge] = useState(0);
  const [formSubmitStatus, setFormSubmitStatus] = useState<boolean>(false);

  const [errMessage, setErrMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [genderErrMessage, setGenderErrMessage] = useState('');
  const [ageErrMessage, setAgeErrMessage] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitStatus(true);
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

  return (
    <div className='flex flex-col justify-start gap-6 2xl:gap-10'>
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
      {formSubmitStatus && (
        <>
          <div className='flex gap-8'>
            <h3 className='dark:text-white text-gray-800'>First Name: {firstName}</h3>
            <h3 className='dark:text-white text-gray-800'>Last Name: {lastName}</h3>
          </div>
          <div className='flex gap-8'>
            <h4 className='dark:text-white text-gray-800'>Email: {email}</h4>
            <h4 className='dark:text-white text-gray-800'>Gender: {gender}</h4>
            <h4 className='dark:text-white text-gray-800'>
              {' '}
              <>DOB: {dateOfBirth}</>
            </h4>
          </div>
        </>
      )}
    </div>
  );
};
export default FirstStep;
