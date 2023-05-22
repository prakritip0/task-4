import React from 'react'

interface FormLabelProps{
    labelName:string,
    id:string,
    classes:string
}

const FormLabel = ({id, labelName, classes}:FormLabelProps) => {
  return (
    <label htmlFor={id} className={classes}>{labelName}</label>
  )
}

export default FormLabel