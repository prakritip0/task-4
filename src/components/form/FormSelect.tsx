import React from 'react'

interface FormSelectProps{
    gender:string;
    setGender: (value:string)=>void
}

const FormSelect = ({setGender, gender}:FormSelectProps) => {
  return (
    <select className='w-[15rem] py-2 px-2 rounded-lg outline-none' name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>
  )
}

export default FormSelect