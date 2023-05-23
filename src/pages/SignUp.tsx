import React from 'react';
import FirstStep from '../components/signup/FirstStep';
import SignUpDesign from '../components/signup/SignUpDesign';

const SignUp = () => {
  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800 '>
      <div className='py-4 pl-4 h-[33rem] w-[90%] rounded-2xl m-auto flex justify-between  items-center  bg-[#f1f1f1]  dark:bg-gray-900 2xl:h-[40rem]'>
        <FirstStep />
        <SignUpDesign />
      </div>
    </div>
  );
};

export default SignUp;
