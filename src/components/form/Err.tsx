import React from 'react'
import { ErrPropsType } from '../Types'

const Err = ({err}:ErrPropsType) => {
  return (
    <p className='text-red-700 dark:text-red-500 text-xs' >{err}</p>
  )
}

export default Err