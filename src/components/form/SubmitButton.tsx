import React from 'react';

interface SubmitButtonProps {
  disabled: boolean;
}

const SubmitButton = ({ disabled }: SubmitButtonProps) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      className={`${
        disabled ? 'bg-indigo-300 ' : 'bg-indigo-500'
      } text-white text-xs md:text-lg py-1 md:py-2 w-[5rem] md:w-[7rem] rounded-lg`}
    >
      Next Step
    </button>
  );
};

export default SubmitButton;
