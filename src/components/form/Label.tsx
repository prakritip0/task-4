import React from 'react'
import { LabelPropsType } from '../Types'

const Label = ({ label, ...props }:LabelPropsType) => {
  return (
    <label htmlFor={props.htmlFor} className={`text-xs text-gray-800 dark:text-white`}>{label}</label>
  )
}

export default Label