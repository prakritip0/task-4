import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

// interface ThemeContextType{
//   darkTheme:boolean;
//   changeTheme: () => void ;
// }

// export const ThemeContext = createContext<ThemeContextType | null>(null);

const Homepage = () => {
 

  return (
    <div className='bg-[#fffaf2] dark:bg-gray-800'>
      {/* <ThemeContext.Provider value={{darkTheme, changeTheme}}> */}

     <Header/>
     <Banner/>
     <hr className='mt-[3rem] mx-[7rem] 2xl:mx-[9rem] bg-gray-800' />
     <Footer/>
      {/* </ThemeContext.Provider> */}
    </div>
  )
}

export default Homepage