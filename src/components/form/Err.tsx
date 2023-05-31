import React from 'react'

interface ErrProps{
  err: string
}

const Err = ({err}:ErrProps) => {
  return (
    <p className='text-red-700 dark:text-red-500 text-xs' >{err}</p>
  )
}

export default Err