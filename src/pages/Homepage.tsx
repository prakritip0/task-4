import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
     <Header />
     <Banner />
     <hr className='mt-[3rem] mx-[9rem]' />
     <Footer />
    </div>
  )
}

export default Homepage