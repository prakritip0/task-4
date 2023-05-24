import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import Select from '../form/Select';
import Date from '../form/Date';

const FirstStep = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);
  const [formSubmitStatus, setFormSubmitStatus] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  // const [isValid, setIsValid] = useState({ firstName: false, lastName: false, email: false });
  const [errMessage, setErrMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [genderRequiredErr, setGenderRequiredErr] = useState('');

  useEffect(() => {
    const isDisabled = !firstName || !lastName || !email || !gender || !dateOfBirth;
    setDisabled(isDisabled);
  }, [firstName, lastName, email, gender, dateOfBirth]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitStatus(true);
  };

  // eslint-disable-next-line no-useless-escape
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const handleFristNameBlurEvent = () => {
    firstName
      ? setErrMessage({ ...errMessage, firstName: '' })
      : (setErrMessage({ ...errMessage, firstName: 'First name is required.' }),
        console.log('errrr'));
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
    gender ? setGenderRequiredErr('') : setGenderRequiredErr('Gender is required.') ;
  };
console.log(gender);
console.log(genderRequiredErr);


  return (
    <div className='flex flex-col justify-start gap-6 2xl:gap-10'>
      <h4 className='text-gray-800 text-2xl 2xl:text-3xl font-bold dark:text-white'>
        Lets start with your Personal Information
      </h4>
      <form action='/' className='flex flex-col gap-4 2xl:gap-10' onSubmit={submitForm}>
        <div className='name flex flex-row gap-4'>
          <Input
            id='firstName'
            placeholder='Ram'
            labelName='First Name'
            type='text'
            value={firstName}
            setValue={setFirstName}
            formSubmitStatus={formSubmitStatus}
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
            formSubmitStatus={formSubmitStatus}
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
          formSubmitStatus={formSubmitStatus}
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
            errMessage={genderRequiredErr}
          />
          <Date id='dateOfBirth' value={dateOfBirth} setValue={setDateOfBirth} />
        </div>

        <SubmitButton disabled={disabled} />
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
            <h4 className='dark:text-white text-gray-800'>DOB: {dateOfBirth}</h4>
          </div>
        </>
      )}
    </div>
  );
};
export default FirstStep;
