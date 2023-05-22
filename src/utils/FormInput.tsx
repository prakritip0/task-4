import React from 'react'

interface FormInputProps{
    classes:string,
    id:string
}

const FormInput = ({classes,id}:FormInputProps) => {
  return (
    <input className={classes} type="text" id={id} />
  )
}

export default FormInput