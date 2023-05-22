import React, { useState } from 'react';
import FormInput from '../utils/FormInput';
import FormButton from '../utils/FormButton';

const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('submitted');
  
};

const SignUpFirst = () => {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    console.log(firstName);
  return (
    <div className='flex flex-col gap-6'>
      <h4 className='text-gray-800 text-2xl font-bold dark:text-white'>
        Lets start with your personal Information
      </h4>
      <form action='/' className='flex flex-col gap-4 items-center' onSubmit={submitForm}>
        <FormInput
          className='w-[15rem] px-4 py-2 border border-gray-300 rounded-lg outline-none'
          id='firstName'
          placeholder='Ram'
          labelName='First Name' 
          type='text'
          value={firstName}
          setValue={setFirstName}
        />
        <FormInput
          className='w-[15rem] px-4 py-2 border border-gray-300 rounded-lg outline-none'
          id='lastName'
          placeholder='Thapa'
        //   labelName='Last Name'
          type='text'
          value={lastName}
          setValue={setLastName}
        />
        {/* 
        <FormInput
          className='w-[15rem] px-4 py-2 border border-gray-300 rounded-lg outline-none'
          id='email'
          placeholder='ramthapa@gmail.com'
          labelName='Email'
          type='email'
        />
        <FormInput
          className='w-[15rem] px-4 py-2 border border-gray-300 rounded-lg outline-none'
          id='gender'
          labelName='Gender'
          type='radio'
        /> */}

        <FormButton />
      </form>
    </div>
  );
};

export default SignUpFirst;
