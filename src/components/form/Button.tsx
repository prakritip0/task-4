import React from 'react';
import { ButtonPropsType } from '../Types';

const SubmitButton = ({ label, ...props }: ButtonPropsType) => {
  return (
    <button
      type='submit'
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${
        props.disabled ? 'bg-indigo-300 ' : 'bg-indigo-500'
      } text-white text-xs md:text-md lg:text-lg  py-1 lg:py-[0.35rem]  2xl:py-1 2 rounded-lg w-full  `}
    {...props}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
