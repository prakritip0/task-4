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
  const [dateOfBirth, setDateOfBirth]= useState<string|null>(null)
  const [formSubmitStatus, setFormSubmitStatus] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isDisabled = !firstName || !lastName || !email || !gender || !dateOfBirth;
    setDisabled(isDisabled);
  }, [firstName, lastName, email, gender, dateOfBirth]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitStatus(true);
  };
// console.log(dateOfBirth);

  return (
    <div className='flex flex-col gap-6'>
      <h4 className='text-gray-800 text-2xl font-bold dark:text-white'>
        Lets start with your personal Information
      </h4>
      <form
        action='/'
        className='flex flex-col gap-4 items-center'
        onSubmit={submitForm}
      >
        <div className='name flex flex-row justify-between w-[100%]'>
          <Input
            id='firstName'
            placeholder='Ram'
            labelName='First Name'
            type='text'
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            id='lastName'
            placeholder='Thapa'
            labelName='Last Name'
            type='text'
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <Input
          className='w-[100%]'
          id='email'
          placeholder='ramthapa@gmail.com'
          labelName='Email'
          type='email'
          value={email}
          setValue={setEmail}
          inputClassName='w-[100%]'
        />
        <div className='flex flex-row w-[100%]'>
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
          />
          <Date id='dateOfBirth' value={dateOfBirth} setValue={setDateOfBirth} />
        </div>

        <SubmitButton disabled={disabled} />
      </form>
      {formSubmitStatus && (
        <>
          <h3 className='dark:text-white text-gray-800'>First Name: {firstName}</h3>
          <h3 className='dark:text-white text-gray-800'>Last Name: {lastName}</h3>
          <h4 className='dark:text-white text-gray-800'>Email: {email}</h4>
          <h4 className='dark:text-white text-gray-800'>Gender: {gender}</h4>
          <h4 className='dark:text-white text-gray-800'>DOB: {dateOfBirth}</h4>
        </>
      )}
    </div>
  );
};
export default FirstStep;