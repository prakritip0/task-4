import React from 'react';
import Label from './Label';
import { SelectPropsType } from '../Types';


const Select = ({ options, placeholder, err,onBlur, label, ...props }: SelectPropsType) => {
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
