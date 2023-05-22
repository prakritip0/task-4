import { type } from 'os';
import React from 'react';
import FormLabel from '../utils/FormLabel';
import {FormLabelProps} from '../utils/FormLabel'

interface FormInputProps {
  className: string;
  id: string;
  placeholder?:string;
  labelName?:string;
  type:string;
  value:string;
  setValue:(value:string)=>void
  // setFirstName:()=>void
  // label?: FormLabelProps
}



const FormInput = ({ className, id,placeholder, labelName, type, value, setValue }: FormInputProps) => {



  return (
    <div className='flex flex-col items-start gap-1'>
      {labelName && <FormLabel htmlFor={id} labelName={labelName} />}
      <input className={className} value={value} type={type} id={id} placeholder={placeholder} onChange={(e)=>setValue(e.target.value)} />
    </div>  
  );
};

export default FormInput;
