import React from 'react'

function Banner() {
  return (
    <div className='banner flex gap-80 h-[80vw] w-[100vw]'>
      <div className="bannerLeft mt-32 ml-40 flex flex-col gap-12">
        <div className="new border rounded-full border-gray-300 flex items-center gap-2 px-1 py-1 w-[13rem]">
            <p className='text-sm bg-indigo-500 py-1.5 px-2  rounded-full text-white' >NEW</p>
            <p className='text-sm text-indigo-500'>WE ARE HIRING</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"  strokeWidth={1.5}  stroke="currentColor" className="w-6 h-6 text-indigo-500 font-bold mt-2 ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </div>
        <h1 className='text-7xl'>The best place to <br /> find your dream job</h1>
        <p className='text-black font-light text-lg '>Find job you love and research the fastest-growing <br /> companies, and hire experienced workers.</p>
        <form className='border border-gray-300 rounded-lg py-2.5 flex gap-1 relative'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 35" strokeWidth={1.5} stroke="currentColor" className="searchIcon w-6 h-6 text-gray-300 absolute top-[1.5rem] left-2 text-xl">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input className='pl-8 py-1 mr-3 outline-none' type="text" placeholder='Job Title' />
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={0.7} stroke="currentColor" className="verticalLine  rotate-90 absolute text-gray-300 left-[10.75rem] top-0 h-[4.5rem]">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" className="location h-6 w-6 absolute top-[1.5rem] left-[13.75rem] text-gray-300" fill="none" viewBox="0 0 35 35" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
           </svg>

            <input className='pl-7 placeholder-light outline-none' type="text" placeholder='All Location'/>
            <button className='bg-indigo-500 text-white relative pl-4 pr-8 py-2 rounded-lg text-2xl ml-2.5' type='submit'>Search</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[1.6rem] right-3 text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

        </form>
        <div className="checkBoxes flex ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <p className='text-sm mr-8'>7 days free trial</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <p className='text-sm'>Easy to set up</p>

        </div>
      </div>
      <div className="bannerRight">
       <div className="gridBox border-[1px] h-[30rem] w-[45rem] mt-32"></div>
      </div>
    </div>
  )
}

export default Banner