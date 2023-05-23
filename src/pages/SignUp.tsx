import React from 'react';
import FirstStep from '../components/signup/FirstStep';

const SignUp = () => {
  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800'>
      <div className='form py-4 px-2 h-[33rem] w-[90%] rounded-2xl m-auto flex flex-col items-center gap-4 bg-white dark:bg-gray-900 2xl:h-[40rem]'>
        <FirstStep />
      </div>
    </div>
  );
};

export default SignUp;
