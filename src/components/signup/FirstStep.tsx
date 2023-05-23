import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import FormSubmit from '../form/SubmitButton';
import Select from '../form/Select';

const FirstStep = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isDisabled = !firstName || !lastName || !email || !gender;
    setDisabled(isDisabled);
  }, [firstName, lastName, email, gender]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitStatus(true);
  };

  return (
    <div className='flex flex-col gap-6'>
      <h4 className='text-gray-800 text-2xl font-bold dark:text-white'>
        Lets start with your personal Information
      </h4>
      <form action='/' className='flex flex-col gap-4 items-center' onSubmit={submitForm}>
        <div className='name flex 2xl:gap-10'>
        <Input
          id='firstName'
          placeholder='Ram'
          labelName='First Name'
          type='text'
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          className='w-[15rem] px-4 py-2 border border-gray-300 rounded-lg outline-none'
          id='lastName'
          placeholder='Thapa'
          labelName='Last Name'
          type='text'
          value={lastName}
          setValue={setLastName}
        />
        </div>
        <Input
        // className='w-[100%]'
          id='email'
          placeholder='ramthapa@gmail.com'
          labelName='Email'
          type='email'
          value={email}
          setValue={setEmail}
        />
        <Select setGender={setGender} gender={gender} />
        <FormSubmit disabled={disabled} />
      </form>
      {formSubmitStatus && (
        <>
          <h3 className='text-white'>First Name: {firstName}</h3>
          <h3 className='text-white'>Last Name: {lastName}</h3>
          <h4 className='text-white'>Email: {email}</h4>
          <h4 className='text-white'>Gender: {gender}</h4>
        </>
      )}
    </div>
  );
};
export default FirstStep;
