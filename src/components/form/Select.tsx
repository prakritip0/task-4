import React from 'react';
import Label from './Label';

interface SelectProps extends React.ComponentPropsWithoutRef <'select'> {
  setValue: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  errMessage:string
  onBlur:()=>void
  labelName:string
}

const Select = ({ setValue, options, placeholder, errMessage,onBlur, labelName, ...props }: SelectProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={props.id as string} labelName={labelName} />
      <select
        className='px-1 py-1 md:py-[0.65rem] md:px-2 w-full text-xs md:text-sm 2xl:text-lg rounded-lg outline-none  text-gray-800 border'
        name='gender'
        value={props.value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        {...props}
      >
        <option value='' >
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {errMessage && <Label htmlFor={props.id as string} labelName={errMessage} className='text-red-700' />}
    </div>
  );
};

export default Select;
