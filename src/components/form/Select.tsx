import React from 'react';
import Label from './Label'

interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  options:{value:string, label:string}[]
  // labels:string[]|number[];
  placeholder:string;
  id:string 
}

const Select = ({ setValue, value, options,placeholder, id }: SelectProps) => {
  
  return (
    <div className='flex flex-col w-[50%]'>
    <Label htmlFor={id} labelName='Gender' />
    <select
      className=' py-[0.65rem] px-2 w-[90%] rounded-lg outline-none  text-gray-800 border' 
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
    </ div>
  );
};

export default Select;
