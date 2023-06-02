import React from 'react'

 export interface LabelProps extends React.ComponentPropsWithoutRef <'label'>{
    label?:string,
}

const Label = ({ label, ...props }:LabelProps) => {
  return (
    <label htmlFor={props.htmlFor} className={`text-xs text-gray-800 dark:text-white`}>{label}</label>
  )
}

export default Label