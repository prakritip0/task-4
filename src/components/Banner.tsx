import React from 'react'
import GridLayout from '../utils/GridLayout'

interface BannerProps {
  isDarkMode: boolean,
}

function Banner({isDarkMode}:BannerProps) {
  return (
    <div className={isDarkMode? 'banner flex justify-between px-[10rem] overflow-hidden bg-gray-800' : 'banner flex justify-between px-[10rem] overflow-hidden'}>
      <div className="bannerLeft mt-32 flex flex-col mr-[4rem] gap-12">
        <div className="new border rounded-full border-gray-300 flex items-center gap-2 px-1 py-1 w-[13rem]">
            <p className='text-sm bg-indigo-500 py-1.5 px-2  rounded-full text-white' >NEW</p>
            <p className='text-sm text-indigo-500'>WE ARE HIRING</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"  strokeWidth={1.5}  stroke="currentColor" className="w-6 h-6 text-indigo-500 font-bold mt-2 ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </div>
        <h1 className={isDarkMode ? 'text-7xl text-gray-200' : 'text-7xl'}>The best place to <br /> find your dream job</h1>
        <p className={isDarkMode? 'font-light text-lg text-gray-200 ' : 'text-black font-light text-lg '}>Find job you love and research the fastest-growing <br /> companies, and hire experienced workers.</p>
        <form className='border border-gray-300 rounded-lg py-2.5 flex gap-1 relative'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 35" strokeWidth={1.5} stroke="currentColor" className="searchIcon w-6 h-6 text-gray-300 absolute top-[1.5rem] left-2 text-xl">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input className={isDarkMode? 'pl-8 py-1 mr-3 outline-none bg-gray-800 text-gray-300' : 'pl-8 py-1 mr-3 outline-none' }type="text" placeholder='Job Title' />
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={0.7} stroke="currentColor" className="verticalLine  rotate-90 absolute text-gray-300 left-[10.75rem] top-0 h-[4.5rem]">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" className="location h-6 w-6 absolute top-[1.5rem] left-[13.75rem] text-gray-300" fill="none" viewBox="0 0 35 35" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
           </svg>

            <input className={isDarkMode? 'pl-7 placeholder-light outline-none bg-gray-800 text-gray-300' : 'pl-7 placeholder-light outline-none'} type="text" placeholder='All Location'/>
            <button className='bg-indigo-500 text-white relative pl-4 pr-8 py-2 rounded-lg text-2xl ml-2.5' type='submit'>Search</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[1.6rem] right-3 text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

        </form>
        <div className="checkBoxes flex ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <p className={isDarkMode ? 'text-sm mr-8 text-gray-300' : 'text-sm mr-8'}>7 days free trial</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <p className={isDarkMode? 'text-sm text-gray-300' :'text-sm'}>Easy to set up</p>

        </div>
      </div>
      <div className="bannerRight relative">
        <GridLayout />
        <div className="bannerDesign h-[25rem] w-[24rem] absolute top-[10.5rem] left-[10.5rem] rounded-3xl border border-indigo-700 shadow-[4px_4px_0_0] shadow-indigo-500 bg-white flex items-center justify-center">
         <div className="suggestions w-[22rem] h-[21rem] bg-gray-100 mt-8 rounded-2xl">
          <h4 className='font-semi-bold mx-4 mt-4'>Suggested Work</h4>
          <div className="dummyJob border bg-white w-[20rem] h-[15rem] rounded-2xl flex flex-col gap-8 ml-[1rem] mt-[1rem] ">
            <div className="suggestedTop flex px-2 mt-6 ml-2">
            <p className='text-white bg-black rounded-full h-[3rem] w-[3rem] text-center pt-2' >-_-</p>
            <div className="dummyTitle ml-3 mr-14">
              <h4>Product Designer</h4>
              <p className='text-gray-400 text-sm '>Framer</p>
            </div>
            <p className='text-indigo-500 text-sm mt-2'>Apply</p>
            </div>
            <div className="suggestedBottom flex flex-col gap-4 ml-5">
              <div className="longLine h-2 w-[15rem] bg-gray-200 rounded-full">
              </div>
              <div className="shortLine w-[5rem] h-2 bg-gray-200 rounded-full">

              </div>
              <div className="shortLine">

              </div>
            </div>
            <hr />
            <div className="suggestedCardIcons flex justify-between mx-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-gray-300 top-[-10px] right-[17rem]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
              <div className="lines h-2 w-[4rem] bg-gray-300 rounded-full">
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute text-gray-300 top-[-10px] right-[11rem]" viewBox="0 0 20 20" fill="currentColor">
               <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <div className="lines h-2 w-[4rem] bg-gray-300 rounded-full">
              </div>
              <div className="lines h-2 w-[4rem] bg-gray-300 rounded-full">
              </div>
            </div>
          </div>
         </div>
        </div>
        <div className="topRating absolute bottom-[5rem] right-[30rem] flex gap-4 bg-white border shadow-[2px_2px_0_0_black] border-black rounded-xl px-4 py-3">
          <h3 className='bg-orange-700 h-[3rem] w-[3rem] rounded-full text-center pt-2 text-2xl text-white'>P</h3>
          <div>
            <p>Top Rating App</p>
            <p className='text-yellow-400'>★★★★★</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner