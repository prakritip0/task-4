import React, { useEffect, useState } from 'react';
import FirstStep from '../components/signup/FirstStep';
import SignUpDesign from '../components/signup/SignUpDesign';
import SubmitButton from '../components/form/SubmitButton';
import { Outlet, Link } from 'react-router-dom';

const SignUp = () => {
  const [signupStep, setSignupStep] = useState(0);
  const [forwardDisabled, setForwardDisabled] = useState<boolean>(false);
  const [backwardDisabled, setBackwardDisabled] = useState<boolean>(true);
  const [nextButtonLabel, setNextButtonLabel] = useState('Next Step');
  const [forwardRoutes, setForwardRoutes] = useState('');
  const [backwardRoutes, setBackwardRoutes] = useState('');
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
    setNextButtonLabel('Next Step')
    if (signupStep > 0) {
      // console.log('signupb', signupStep);
      setBackwardDisabled(false);
    }
    if (signupStep === 0) {
      setBackwardDisabled(true);
    }

    if (signupStep > titles.length - 2) {
      // console.log('signupf', signupStep);
      // setForwardDisabled(true);
      setNextButtonLabel('Submit');
    }
  }, [signupStep]);


  useEffect(() => {
    if (signupStep === 0) {
      setForwardRoutes('/signup/second-step');
      setBackwardRoutes('')
    } else if (signupStep === 1) {
      setForwardRoutes('/signup/third-step');
      setBackwardRoutes('/signup')
    } else if (signupStep === 2) {
      setForwardRoutes('/signup/final-step');
      setBackwardRoutes('/signup/second-step')
    } else if (signupStep === 3) {
      setBackwardRoutes('/signup/third-step')
    } 

  }, [signupStep]);
  console.log(signupStep);
  console.log('forward',forwardRoutes);
  console.log('backward',backwardRoutes);
  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800 '>
      <div className=' md:py-6 px-1 md:pl-4 h-[33rem] w-[90%] rounded-2xl m-auto  bg-[#f1f1f1]  dark:bg-gray-900 2xl:h-[40rem]'>
        <h4 className='text-gray-800 text-2xl 2xl:text-3xl font-bold dark:text-white'>
          {titles[signupStep]}
        </h4>

        <div className='flex justify-between  items-center m-auto   '>
          <Outlet />
          <SignUpDesign />
        </div>
        <div className='flex gap-6'>
          <Link to={forwardRoutes}>
            <SubmitButton
              label='Go back'
              disabled={backwardDisabled}
              onClick={goBackward}
              signupStep={signupStep}
            />
          </Link>
          <Link to={backwardRoutes}>
            <SubmitButton
              label={nextButtonLabel}
              disabled={forwardDisabled}
              onClick={moveForward}
              signupStep={signupStep}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
