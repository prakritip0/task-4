import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Homepage = () => {
  
  return (
    <div className='bg-[#fffaf2] dark:bg-gray-800'>
     <Header/>
     <Banner/>
     <hr className='mt-[3rem] mx-[7rem] 2xl:mx-[9rem] bg-gray-800' />
     <Footer/>
    </div>
  )
}

export default Homepage