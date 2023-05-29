import React, { useEffect, useState } from 'react';
import SignUpDesign from '../components/signup/SignUpDesign';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StepGuide from '../components/signup/StepGuide';

const SignUp = () => {
  const location = useLocation();

  const [signupStep, setSignupStep] = useState(0);

  const titles = [
    'Lets start with your Personal Information',
    'Your Skills and Certifications',
    'Your Work Experience',
    'Your Job Preferences',
  ];
  const navigate = useNavigate();
  const routes = ['/', '/second-step', '/third-step'];

  useEffect(()=>{
    if (location.pathname === '/signup') {
      setSignupStep(0);
    }else if(location.pathname === '/signup/second-step'){
      setSignupStep(1);
    }else if(location.pathname === '/signup/third-step'){
      setSignupStep(2);
    }else if(location.pathname === '/signup/final-step'){
      setSignupStep(3);
    }
  },[location])
  
// console.log(signupStep);

  const moveForward = () => {
    const currentStep = signupStep;
    const nextStep = currentStep + 1;
    setSignupStep(nextStep);
    const route = routes[nextStep];
    navigate(`/signup${route}`);
  };

  const goBackward = () => {
    const currentStep = signupStep;
    const prevStep = currentStep - 1;
    setSignupStep(prevStep);
    const route = routes[prevStep];
    navigate(`/signup${route}`);
  };
  console.log('fromSignUp', signupStep);
  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800 '>
      <div className='flex flex-col md:py-6 px-1 md:pl-4 2xl:pl-16 h-[33rem] w-[90%] rounded-2xl m-auto  bg-[#f1f1f1]  dark:bg-gray-900 2xl:h-[45rem]'>
        <h4 className='text-gray-800 text-2xl 2xl:text-3xl font-bold dark:text-white'>
          {titles[signupStep]}
        </h4>

        <div className='flex justify-between  items-center m-auto  w-full '>
          <StepGuide signupStep= {signupStep} />
          <Outlet
            context={{
              moveForward,
              goBackward,
            }}
          />
          <SignUpDesign />
        </div>
        {/* <div className='flex gap-6'>
          <Link to={backwardRoutes}>
            <SubmitButton label='Go back' disabled={backwardDisabled} onClick={goBackward} />
          </Link>
          <Link to={forwardRoutes}>
            <SubmitButton
              label={nextButtonLabel}
              disabled={forwardDisabled}
              onClick={moveForward}
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
