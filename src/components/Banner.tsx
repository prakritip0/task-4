import React from 'react'
import GridLayout from '../utils/GridLayout'

// interface BannerProps {
//   isDarkMode: boolean,
// }

function Banner() {
  return (
    <div className='banner flex justify-between px-[10rem] overflow-hidden bg-[#fffaf2] dark:bg-gray-800'>
      <div className="bannerLeft mt-32 flex flex-col mr-[4rem] gap-12">
        <div className="new border rounded-full border-gray-300 flex items-center gap-2 px-1 py-1 w-[13rem]">
            <p className='text-sm bg-indigo-500 py-1.5 px-2  rounded-full text-white' >NEW</p>
            <p className='text-sm text-indigo-500'>WE ARE HIRING</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"  strokeWidth={1.5}  stroke="currentColor" className="w-6 h-6 text-indigo-500 font-bold mt-2 ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </div>
        <h1 className='text-7xl text-black dark:text-gray-200'>The best place to <br /> find your dream job</h1>
        <p className='text-black font-light text-lg dark:text-gray-200 '>Find job you love and research the fastest-growing <br /> companies, and hire experienced workers.</p>
        
        <form className='border border-gray-300 rounded-lg flex justify-around items-center py-1.5 px-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 29" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 pt-0.5">
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

       
          <input className=' outline-none dark:text-gray-300 bg-[#fffaf2] dark:bg-gray-800' type="text" placeholder='Job Title' />
          
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
           </svg>

           
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
           </svg>

           <input className='placeholder-light outline-none bg-[#fffaf2] dark:bg-gray-800 dark:text-gray-300' type="text" placeholder='All Location'/>
           <button className='bg-indigo-500 text-white rounded-lg text-2xl  flex py-1.5 pl-2 gap-1' type='submit'>
            Search
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            </button>

        </form>
        
        <div className="checkBoxes flex ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <p className='text-sm text-black mr-8 dark:text-gray-300'>7 days free trial</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <p className='text-sm text-black dark:text-gray-300'>Easy to set up</p>

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