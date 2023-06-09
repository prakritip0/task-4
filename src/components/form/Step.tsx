import React from 'react';

interface StepProps {
  signupStep: number;
  stepComplete: boolean;
  label:string;
  path:string;
  stepNumber:number
}

const Step = ({label, signupStep,stepComplete,path, stepNumber}:StepProps) => {
  return (
    <div className='flex justify-center items-center gap-1'>
      <div
        className={` border rounded-full p-3 cursor-pointer  ${
          signupStep === stepNumber
            ? 'bg-indigo-500 border-white'
            : stepComplete
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
            signupStep === stepNumber ? 'text-white' : stepComplete ? 'hidden' : 'text-gray-500'
          } `}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d={path}
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-6 h-6  text-white ${
            signupStep !== stepNumber && stepComplete ? 'block' : 'hidden'
          }`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
        </svg>
      </div>
      <span className={`w-max font-bold ${signupStep === stepNumber ? 'text-indigo-500' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
};

export default Step;
