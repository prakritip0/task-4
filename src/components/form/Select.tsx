import React from 'react';
import Label from './Label';

interface SelectProps extends React.ComponentPropsWithoutRef <'select'> {
  options: { value: string; label: string }[];
  placeholder: string;
  err:string
  onBlur:()=>void
  label:string
}

const Select = ({ options, placeholder, err,onBlur, label, ...props }: SelectProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={props.id as string} label={label} />
      <select
        className={`px-1 py-1 md:py-[0.65rem] md:px-2 w-full text-xs md:text-sm 2xl:text-lg rounded-lg ${ err? 'outline-red-700 dark:outline-red-500' :'outline-none'}  text-gray-800 border`}
        name='gender'
        value={props.value}
        onChange={props.onChange}
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
     
    </div>
  );
};

export default Select;
