import React, { useState } from 'react';
import FormInput from '../utils/FormInput';
import FormButton from '../utils/FormButton';

const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('submitted');
  
};

const SignUpFirst = () => {
    const [firstName, setFirstName]= useState('');
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
          
        />
        <FormInput
          className='w-[15rem] px-4 py-2 border border-gray-300 rounded-lg outline-none'
          id='lastName'
          placeholder='Thapa'
          labelName='Last Name'
        />

        <FormButton />
      </form>
    </div>
  );
};

export default SignUpFirst;
