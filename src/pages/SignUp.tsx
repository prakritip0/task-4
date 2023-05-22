import React from 'react'
import FormButton from '../utils/FormButton'
import FormInput from '../utils/FormInput'
import FormLabel from '../utils/FormLabel'

const SignUp = () => {
  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2]'>
      <div className='form py-4 h-[33rem] w-[90%] rounded-2xl m-auto flex flex-col items-center gap-4 bg-white shadow-[0.5px_0.5px_10px_gray]'>
        <h4 className='text-gray-800 text-2xl font-bold'>Lets start with your personal Information</h4>
        {/* <label className='text-xs' htmlFor="applicantName">Enter your name</label> */}
        <FormLabel id='applicantName' labelName ='Enter your name' />
        {/* <input className=' w-[15rem] px-4 py-2 border border-gray-300 rounded-lg' id='applicantName' type="text" /> */}
        <FormInput classes="w-[15rem] px-4 py-2 border border-gray-300 rounded-lg" id='applicantName' />
        <FormButton />
      </div>
    </div>
  )
}

export default SignUp