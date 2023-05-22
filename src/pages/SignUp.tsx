import React from 'react';
import SignUpFirst from '../components/SignUpFirst';

const SignUp = () => {

  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800'>
      <div className='form py-4 px-2 h-[33rem] w-[90%] rounded-2xl m-auto flex flex-col items-center gap-4 bg-white dark:bg-gray-900 shadow-[0.5px_0.5px_10px_gray]'>
        <SignUpFirst/>
      </div>
    </div>
  );
};

export default SignUp;
