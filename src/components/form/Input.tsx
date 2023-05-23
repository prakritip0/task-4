import React from 'react';
import Label from './Label';

interface InputProps {
  inputClassName?:string;
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
  inputClassName
}: InputProps) => {
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      {labelName && <Label htmlFor={id} labelName={labelName} />}
      <input
        className={`${inputClassName} px-4 py-2 border border-gray-300 rounded-lg outline-none`}
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
