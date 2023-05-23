import React from 'react';

interface SelectProps {
  gender: string;
  setGender: (value: string) => void;
}

const Select = ({ setGender, gender }: SelectProps) => {
  return (
    <select
      className='w-[15rem] py-2 px-2 rounded-lg outline-none  text-gray-800'
      name='gender'
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    >
      <option value='' selected>
        Choose gender
      </option>
      <option value='Male'>I am male</option>
      <option value='Female'>I am female</option>
      <option value='Other'>Other</option>
    </select>
  );
};

export default Select;
