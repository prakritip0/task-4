import React from 'react';
import { Link } from 'react-router-dom';
import Step from '../form/Step';
import { StepGuideProps } from '../Types';

const StepGuide = ({
  signupStep,
  firstStepComplete,
  secondStepComplete,
  thirdStepComplete,
  finalStepComplete,
}: StepGuideProps) => {
  return (
    <div className='flex flex-col relative justify-between h-[26rem] 2xl:h-[30rem] lg:py-[2rem]'>
      <div className='absolute h-[88%] lg:h-[85%] 2xl:h-[85%] w-[1.25px] bg-gray-300 left-[23%] z-0'></div>
      <Link className='z-10' to={`${firstStepComplete ? '/signup/' : ''}`}>
        <Step
          label='Step 1'
          stepNumber={0}
          signupStep={signupStep}
          stepComplete={firstStepComplete}
          path='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </Link>
      <Link className='z-10' to={`${secondStepComplete ? '/signup/second-step' : ''}`}>
        <Step
          label='Step 2'
          stepNumber={1}
          signupStep={signupStep}
          stepComplete={secondStepComplete}
          path='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
        />
      </Link>
      <Link className='z-10' to={`${thirdStepComplete ? '/signup/third-step' : ''}`}>
      <Step
          label='Step 3'
          stepNumber={2}
          signupStep={signupStep}
          stepComplete={thirdStepComplete}
          path='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
        /> 
      </Link>
      <Link className='z-10' to={`${thirdStepComplete ? '/signup/final-step' : ''}`}>
      <Step
          label='Step 4'
          stepNumber={3}
          signupStep={signupStep}
          stepComplete={finalStepComplete}
          path='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
        />
      </Link>
    </div>
  );
};

export default StepGuide;
