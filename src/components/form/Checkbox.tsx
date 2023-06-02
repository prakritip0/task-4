import React from 'react';
import Label from './Label';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor='preference' label={label} />
      <input id={props.id} type='checkbox' {...props} />
    </div>
  );
};

export default Checkbox;
