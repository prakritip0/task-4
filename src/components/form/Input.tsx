import React, { Dispatch, SetStateAction } from 'react';
import Label from './Label';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  inputClassName?: string;
  className?: string;
  labelName?: string;
  type: 'text' | 'email';
  error: string;
}

const Input = ({
  className,
  labelName,
  inputClassName,
  error,
  ...props
}: InputProps) => {
  return (
    <div className={`flex flex-col w-full items-start gap-1 ${className}`}>
      {labelName && <Label htmlFor={props.id as string} labelName={labelName} />}
      <input
        className={`${inputClassName} px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm 2xl:text-lg border  border-gray-300 rounded-lg outline-none w-full`}
        {...props}
      />
      {error && (
        <p className='text-red-700 dark:text-red-400 text-[0.7rem]'>{error}</p>
      )}
    </div>
  );
};

export default Input;
