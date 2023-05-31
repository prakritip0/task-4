import React from 'react'

 export interface LabelProps extends React.ComponentPropsWithoutRef <'label'>{
    labelName?:string,
}

const Label = ({ labelName, ...props }:LabelProps) => {
  return (
    <label htmlFor={props.htmlFor} className={`text-xs text-gray-800 dark:text-white`}>{labelName}</label>
  )
}

export default Label