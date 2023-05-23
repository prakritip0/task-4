import React from 'react'

 export interface LabelProps{
    labelName?:string,
    htmlFor:string,
    className?:string
}

const Label = ({htmlFor, labelName, className}:LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`text-xs text-white ${className}`}>{labelName}</label>
  )
}

export default Label