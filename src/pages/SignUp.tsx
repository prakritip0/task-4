import React, { useEffect, useState } from 'react';
import FirstStep from '../components/signup/FirstStep';
import SignUpDesign from '../components/signup/SignUpDesign';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitButton from '../components/form/SubmitButton';
import SecondStep from '../components/signup/SecondStep';

const SignUp = () => {
  const [signupStep, setSignupStep] = useState(0);
  const [forwardDisabled, setForwardDisabled] = useState<boolean>(false);
  const [backwardDisabled, setBackwardDisabled] = useState<boolean>(true);
  const [nextButtonLabel, setNextButtonLabel] = useState('Next Step');
  const titles = [
    'Lets start with your Personal Information',
    'Your Skills and Certifications',
    'Your Work Experience',
    'Your Job Preferences',
  ];
  const moveForward = () => {
    setSignupStep(signupStep + 1);
  };
  const goBackward = () => {
    setSignupStep(signupStep - 1);
  };
  // console.log(signupStep);

  useEffect(() => {
    if (signupStep > 0) {
      console.log('signupb', signupStep);
      setBackwardDisabled(false);
    }
    if (signupStep === 0) {
      setBackwardDisabled(true);
    }

    if (signupStep > titles.length - 1) {
      console.log('signupf', signupStep);
      // setForwardDisabled(true);
      setNextButtonLabel('Submit');
    }
  }, [signupStep]);

  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800 '>
      <div className=' md:py-6 px-1 md:pl-4 h-[33rem] w-[90%] rounded-2xl m-auto  bg-[#f1f1f1]  dark:bg-gray-900 2xl:h-[40rem]'>
        <h4 className='text-gray-800 text-2xl 2xl:text-3xl font-bold dark:text-white'>
          {titles[signupStep]}
        </h4>

        <div className='flex justify-between  items-center m-auto   '>
          {/* <Link to='/signup/first-step'>
            <FirstStep />
          </Link> */}
          
            <Routes>
              <Route path='/signup/first-step' element={<FirstStep/>} />
              <Route path='/signup/second-step' element={<SecondStep/>} />

            </Routes>
            <FirstStep />
            <SecondStep />
          
          <SignUpDesign />
        </div>
        <div className='flex gap-6'>
          <SubmitButton
            label='Go back'
            disabled={backwardDisabled}
            onClick={goBackward}
            signupStep={signupStep}
          />
          <SubmitButton
            label={nextButtonLabel}
            disabled={forwardDisabled}
            onClick={moveForward}
            signupStep={signupStep}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
