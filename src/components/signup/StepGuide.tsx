import React from 'react';
import { Link } from 'react-router-dom';
import { StepGuideProps } from '../Types';


const StepGuide = ({
  signupStep,
  firstStepComplete,
  secondStepComplete,
  thirdStepComplete,
  finalStepComplete,
}: StepGuideProps) => {
  return (
    <div className='flex flex-col relative  justify-between h-full lg:py-[2rem]'>
      <div className='absolute h-[88%] lg:h-[85%] 2xl:h-[85%] w-[1.25px] bg-gray-300 left-[23%] z-0'></div>
      <Link className='z-10' to={`${firstStepComplete ? '/signup/' : ''}`}>
        <div className='profile flex justify-center items-center gap-1'>
          <div
            className={` border rounded-full p-3 cursor-pointer  ${
              signupStep === 0
                ? 'bg-indigo-500 border-white'
                : firstStepComplete
                ? 'bg-green-500 border-white'
                : 'bg-[#f1f1f1] border-gray-500'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6 ${
                signupStep === 0 ? 'text-white' : firstStepComplete ? 'hidden' : 'text-gray-500'
              } `}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6  text-white ${
                signupStep !== 0 && firstStepComplete ? 'block' : 'hidden'
              }`}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
            </svg>
          </div>
          <span
            className={`w-max font-bold ${signupStep === 0 ? 'text-indigo-500' : 'text-gray-500'}`}
          >
            Step 1
          </span>
        </div>
      </Link>
      <Link className='z-10' to={`${secondStepComplete ? '/signup/second-step' : ''}`}>
        <div className='skills flex justify-center items-center gap-1 '>
          <div
            className={` border rounded-full p-3 cursor-pointer  ${
              signupStep === 1
                ? 'bg-indigo-500 border-white'
                : secondStepComplete
                ? 'bg-green-500 border-white'
                : 'bg-[#f1f1f1] border-gray-500'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6 ${
                signupStep === 1 ? 'text-white' : secondStepComplete ? 'hidden' : 'text-gray-500'
              } `}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6  text-white ${
                signupStep !== 1 && secondStepComplete ? 'block' : 'hidden'
              }`}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
            </svg>
          </div>
          <span
            className={`w-max font-bold ${signupStep === 1 ? 'text-indigo-500' : 'text-gray-500'}`}
          >
            Step 2
          </span>
        </div>
      </Link>
      <Link className='z-10' to={`${thirdStepComplete ? '/signup/third-step' : ''}`}>
        <div className='work flex justify-center items-center gap-1 '>
          <div
            className={` border rounded-full p-3 cursor-pointer  ${
              signupStep === 2
                ? 'bg-indigo-500 border-white'
                : thirdStepComplete
                ? 'bg-green-500 border-white'
                : 'bg-[#f1f1f1] border-gray-500'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6 ${
                signupStep === 2 ? 'text-white' : thirdStepComplete ? 'hidden' : 'text-gray-500'
              } `}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6  text-white ${
                signupStep !== 2 && thirdStepComplete ? 'block' : 'hidden'
              }`}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
            </svg>
          </div>
          <span
            className={`w-max font-bold ${signupStep === 2 ? 'text-indigo-500' : 'text-gray-500'}`}
          >
            Step 3
          </span>
        </div>
      </Link>
      <Link className='z-10' to={`${thirdStepComplete ? '/signup/third-step' : ''}`}>
        <div className='preferences flex justify-center items-center gap-1'>
          <div
            className={`border rounded-full p-3 cursor-pointer  ${
              signupStep === 3
                ? 'bg-indigo-500 border-white'
                : finalStepComplete
                ? 'bg-green-500 border-white'
                : 'bg-[#f1f1f1] border-gray-500'
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6 ${
                signupStep === 3 ? 'text-white' : finalStepComplete ? 'hidden' : 'text-gray-500'
              }  `}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`w-6 h-6  text-white ${
                signupStep !== 3 && finalStepComplete ? 'block' : 'hidden'
              }`}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
            </svg>
          </div>
          <span
            className={`w-max font-bold ${signupStep === 3 ? 'text-indigo-500' : 'text-gray-500'}`}
          >
            Step 4
          </span>
        </div>
      </Link>
    </div>
  );
};

export default StepGuide;
