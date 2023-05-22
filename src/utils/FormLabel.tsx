import React from 'react'

interface FormLabelProps{
    labelName:string,
    id:string
}

const FormLabel = ({id, labelName}:FormLabelProps) => {
  return (
    <label htmlFor={id}>{labelName}</label>
  )
}

export default FormLabel