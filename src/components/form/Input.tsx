import React from 'react';
import Label from './Label';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  type: 'text' | 'email'| 'number'|'textarea';
  err: string;
}

const Input = ({ label, err, ...props }: InputProps) => {
  return (
    <div className={`flex flex-col w-full items-start gap-1`}>
      {label && <Label htmlFor={props.id as string} label={label} />}
      <input
        className={`px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm 2xl:text-lg border w-full border-gray-300 rounded-lg ${
          err ? 'outline-red-700' : 'outline-none'
        } w-full`}
        min={props.min}
        {...props}
      />
      {/* {err && (
        <p className='text-red-700 dark:text-red-400 text-[0.7rem]'>{err}</p>
      )} */}
    </div>
  );
};

export default Input;
