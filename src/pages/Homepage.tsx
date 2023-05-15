import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Homepage = () => {
  const [isDarkMode, setIsDarkMode]= useState<boolean>(false);

  const darkModeFunc = (opt: boolean) => {
    setIsDarkMode(opt)
  }

  return (
    <div className={isDarkMode? "bg-gray-800": ""}>
     <Header isDarkMode = {isDarkMode} darkModeFunc={darkModeFunc} />
     <Banner isDarkMode = {isDarkMode} />
     <hr className={isDarkMode? 'mt-[3rem] mx-[9rem] bg-gray-800' : 'mt-[3rem] mx-[9rem]'} />
     <Footer isDarkMode = {isDarkMode} />
    </div>
  )
}

export default Homepage