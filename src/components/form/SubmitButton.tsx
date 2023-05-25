import React from 'react';

interface SubmitButtonProps {
  disabled: boolean;
  signupStep: number;
  onClick: () => void;
  label:string
}

const SubmitButton = ({ disabled, signupStep, onClick, label}: SubmitButtonProps) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? 'bg-indigo-300 ' : 'bg-indigo-500'
      } text-white text-xs md:text-lg py-1 md:py-2 w-[5rem] md:w-[7rem] rounded-lg`}
    >
     {label}
    </button>
  );
};

export default SubmitButton;
