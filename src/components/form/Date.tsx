import React from 'react';
import Label from './Label';

interface DateProps {
  id: string;
  value: string | null;
  setValue: (value: string) => void;
  onBlur:()=>void;
  errMessage: string
}

const Date = ({ id, value, setValue, onBlur, errMessage }: DateProps) => {
  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={id} labelName='Date of birth' />
      <input
        type='date'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={onBlur}
        className='py-1 px-2 md:py-2 md:px-4 text-xs md:text-sm 2xl:text-lg text-indigo-500 rounded-lg border w-[100%]'
      />
      {errMessage&& <Label htmlFor='id' labelName={errMessage} className='text-red-700' />}
    </div>
  );
};

export default Date;
