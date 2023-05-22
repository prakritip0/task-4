import React from 'react';
import FormLabel from '../utils/FormLabel';
import {FormLabelProps} from '../utils/FormLabel'

interface FormInputProps {
  className: string;
  id: string;
  placeholder:string;
  labelName:string;

  // label?: FormLabelProps
}

const FormInput = ({ className, id,placeholder, labelName }: FormInputProps) => {
  return (
    <div className='flex flex-col items-start gap-1'>
      <FormLabel htmlFor={id} labelName={labelName} />
      <input className={className} type='text' id={id} placeholder={placeholder}  />
    </div>
  );
};

export default FormInput;
