import React from 'react';
import Label from './Label'

interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  options:{value:string, label:string}[]
  // labels:string[]|number[];
  placeholder:string
}

const Select = ({ setValue, value, options,placeholder }: SelectProps) => {
  
  return (
    <>
    <Label htmlFor='' />
    <select
      className='w-[15rem] py-2 px-2 rounded-lg outline-none  text-gray-800 border' 
      name='gender'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value='' selected>
        {placeholder}
      </option>
      {options.length>0 && options.map(option=>
         <option key={option.value} value={option.value}>{option.label}</option>
      )}
      
    </select>
    </>
  );
};

export default Select;
