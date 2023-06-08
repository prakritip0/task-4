import React from 'react';
import Label from './Label';
import { DatePropsType } from '../Types';

const Date = ({ id, value, onChange, err, label, onBlur }: DatePropsType) => {
  const currDate = new window.Date();
  const formattedCurrDate = currDate.toISOString().split('T')[0];
  // console.log(formattedCurrDate);

  return (
    <div className='flex flex-col w-full'>
      <Label htmlFor={id} label={label} />
      <input
        type='date'
        value={value || ''}
        onChange={onChange}
        className={`py-1 px-2 md:py-2 md:px-4 text-xs md:text-sm 2xl:text-lg ${
          err ? 'outline-red-700 dark:outline-red-500' : 'outline-none'
        } rounded-lg border w-[100%]`}
        onBlur={onBlur}
        max={formattedCurrDate}
      />
    </div>
  );
};

export default Date;
