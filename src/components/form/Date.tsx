import React from 'react'
import Label from './Label'

interface DateProps{
  id:string;
  value:string |null;
  setValue:(value:string)=>void
}

const Date = ({id, value, setValue}:DateProps) => {
  return (
    <div className='flex flex-col w-[50%]'>
      <Label htmlFor={id} labelName='Date of birth' />
      <input type="date" value={JSON.stringify(value)} onChange={(e)=>setValue(e.target.value)}  className='py-2 px-4 rounded-lg border w-[100%]' />
    </div>
  )
}

export default Date