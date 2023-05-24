import React from 'react';
import Label from './Label';

interface DateProps {
  id: string;
  value: string | null;
  setValue: (value: string) => void;
}

const Date = ({ id, value, setValue }: DateProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={id} labelName='Date of birth' />
      <input
        type='date'
        value={JSON.stringify(value)}
        onChange={(e) => setValue(e.target.value)}
        className='py-1 px-2 md:py-2 md:px-4 text-xs md:text-lg rounded-lg border w-[100%]'
      />
    </div>
  );
};

export default Date;
