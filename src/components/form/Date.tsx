import React from 'react';
import { ChangeEvent } from 'react';
import Label from './Label';

interface DateProps {
  id: string;
  value: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  err: string;
}

const Date = ({ id, value, onChange, err }: DateProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={id} labelName='Date of birth' />
      <input
        type='date'
        value={value || ''}
        onChange={onChange}
        className={`py-1 px-2 md:py-2 md:px-4 text-xs md:text-sm 2xl:text-lg ${err? 'outline-red-700 dark:outline-red-500':'outline-none'} rounded-lg border w-[100%]`}
      />
      
    </div>
  );
};

export default Date;
