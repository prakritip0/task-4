import React from 'react';
import Label from './Label';

interface ErrMessage {
  firstName: string;
  lastName: string;
  email: string;
}
interface InputProps {
  inputClassName?: string;
  className?: string;
  id: string;
  placeholder?: string;
  labelName?: string;
  type: 'text' | 'email';
  value: string;
  setValue: (value: string) => void;
  // formSubmitStatus: boolean;
  onBlur: () => void;
  errMessage: ErrMessage | string;
}

const Input = ({
  className,
  id,
  placeholder,
  labelName,
  type,
  value,
  setValue,
  inputClassName,
  onBlur,
  errMessage,
}: InputProps) => {
  return (
    <div className={`flex flex-col w-full items-start gap-1 ${className}`}>
      {labelName && <Label htmlFor={id} labelName={labelName} />}
      <input
        className={`${inputClassName} px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm 2xl:text-lg text-indigo-500 border  border-gray-300 rounded-lg outline-none w-full`}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={onBlur}
      />
      {errMessage[id as keyof typeof errMessage] && (
        <Label
          htmlFor='id'
          labelName={errMessage[id as keyof typeof errMessage]}
          className='text-red-700 dark:text-red-400 text-[0.7rem]'
        />
      )}
    </div>
  );
};

export default Input;
