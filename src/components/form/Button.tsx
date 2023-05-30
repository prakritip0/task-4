import React from 'react';

interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
  label: string;
}

const SubmitButton = ({ disabled, onClick, label }: SubmitButtonProps) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? 'bg-indigo-300 ' : 'bg-indigo-500'
      } text-white text-xs md:text-md lg:text-lg  py-1   lg:py-[0.35rem]  2xl:py-1 2 rounded-lg w-full`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
