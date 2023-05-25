import React from 'react'

function ErrorPage() {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-4'>
      <h3 className='text-2xl font-bold'>Oops!</h3>
      <p>Sorry, an unexpected error has occured.</p>
      <p className=' text-gray-500 text-sm'>Page not found.</p>
    </div>
  )
}

export default ErrorPage