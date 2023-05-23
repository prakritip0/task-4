import React from 'react'

interface FormSelectProps{
    gender:string;
    setGender: (value:string)=>void
}

const FormSelect = ({setGender, gender}:FormSelectProps) => {
  return (
    <select className='w-[15rem] py-2 px-2 rounded-lg outline-none text-gray-800' name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} >
        <option value="" selected >Choose gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
  )
}

export default FormSelect