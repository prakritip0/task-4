import React from 'react';
import Label from './Label';

interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  options: { value: string; label: string }[];
  // labels:string[]|number[];
  placeholder: string;
  id: string;
  errMessage:string
  onBlur:()=>void
  labelName:string
}

const Select = ({ setValue, value, options, placeholder, id, errMessage,onBlur, labelName }: SelectProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={id} labelName={labelName} />
      <select
        className='px-1 py-1 md:py-[0.65rem] md:px-2 w-full text-xs md:text-sm 2xl:text-lg text-indigo-500 rounded-lg outline-none  text-gray-800 border'
        name='gender'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      >
        <option value='' selected>
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {errMessage && <Label htmlFor={id} labelName={errMessage} className='text-red-700' />}
    </div>
  );
};

export default Select;
