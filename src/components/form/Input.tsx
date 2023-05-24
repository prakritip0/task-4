import React from 'react';
import Label from './Label';

interface InputProps {
  inputClassName?: string;
  className?: string;
  id: string;
  placeholder?: string;
  labelName?: string;
  type: 'text' | 'email';
  value: string;
  setValue: (value: string) => void;
  // setFirstName:()=>void
  // label?: FormLabelProps
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
}: InputProps) => {
  return (
    <div className={`flex flex-col w-full items-start gap-1 ${className}`}>
      {labelName && <Label htmlFor={id} labelName={labelName} />}
      <input
        className={`${inputClassName} px-2 py-1 md:px-4 md:py-2 text-xs md:text-lg border border-gray-300 rounded-lg outline-none w-full`}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
