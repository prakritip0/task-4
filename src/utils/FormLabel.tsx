import React from 'react'

 export interface FormLabelProps{
    labelName?:string,
    htmlFor:string,
    className?:string
}

const FormLabel = ({htmlFor, labelName, className}:FormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`text-xs text-red-300 ${className}`}>{labelName}</label>
  )
}

export default FormLabel