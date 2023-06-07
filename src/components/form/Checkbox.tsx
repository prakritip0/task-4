import React from 'react';
import Label from './Label';
import { CheckboxPropsType } from '../Types';

const Checkbox = ({ label, ...props }: CheckboxPropsType) => {
  return (
    <div className='flex row-reverse flex-end items-center gap-2'>
      <input id={props.id} type='checkbox' {...props} onChange={props.onChange}/>
      <Label htmlFor='preference' label={label} />
    </div>
  );
};

export default Checkbox;
