import React from 'react';
import Label from './Label';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div className='flex row-reverse flex-end items-center gap-2'>
      <input id={props.id} type='checkbox' {...props} />
      <Label htmlFor='preference' label={label} />
    </div>
  );
};

export default Checkbox;
