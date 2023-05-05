import React from 'react'

function Banner() {
  return (
    <div className='banner flex'>
      <div className="bannerLeft mt-32 ml-40 flex flex-col gap-6">
        <div className="new border rounded-full border-indigo-500 flex items-center gap-2 px-0.5 py-0.15 w-44">
            <p className='text-xs bg-indigo-500 py-1 px-1.5  rounded-full text-white' >NEW</p>
            <p className='text-xs text-indigo-500'>WE ARE HIRING</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"  strokeWidth={1.5}  stroke="currentColor" className="w-6 h-6 text-indigo-500 font-bold mt-2 ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </div>
        <h1 className='text-5xl'>The best place to <br /> find your dream job</h1>
        <p className='text-gray-400 font-light'>Find job you love and research the fastest-growing <br /> companies, and hire experienced workers.</p>
        <form className='border border-gray-300 rounded-lg p-2'>
            <input className='pl-6 ' type="text" placeholder='Job Title' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 35" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 absolute bottom-52 left-41">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input className='relative' type="text" placeholder='All Location'/>
            <button className='bg-indigo-500 text-white relative' type='submit'>Search</button>
        </form>
      </div>
      <div className="bannerRight">

      </div>
    </div>
  )
}

export default Banner