import React,{useEffect, useState} from "react";

// interface HeaderProps {
//   isDarkMode: boolean,
//   darkModeToggle: () => void
// }

const Header = () => {
  const [isDarkMode, setIsDarkMode]= useState<boolean>(false);
  const darkModeToggle = () => {
    if(isDarkMode){
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }
 useEffect(()=>{
   const storedTheme = localStorage.getItem('theme')
   console.log(storedTheme);
   
 },[])
  return (
    <div className={"flex items-center flex-wrap py-5 px-32 justify-between bg-[#fffaf2] dark:bg-gray-800"}>
        <div className="logo">
        <a href="#"><h1 className='text-indigo-500 text-3xl font-semibold'>Hirace</h1></a>
        </div>
        <div className="nav-items">
            <ul className={"flex flex-row font-light gap-14"}>
                <li className={"hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white"} ><a href="#">Job Vacancy</a></li>
                <li className={"hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white"}><a href="#">Features</a></li>
                <li className={"hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white"}><a href="#">Pricing</a></li>
                <li className={"hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white"}><a href="#">About Us</a></li>
            </ul>
        </div>
        <div className="right flex items-center gap-6">
        <div className="theme border-2 border-gray-500 h-8 w-8 rounded-lg flex items-center justify-center p-1 cursor-pointer dark:border-white dark:bg-gray-800" onClick={darkModeToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='dark:hidden'>
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='hidden dark:block text-white' >
           <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>

        </div>
        <button className='bg-indigo-500 rounded-lg text-white px-4 py-2 font-light text-lg'>
            Sign Up 
        </button>
        </div>
        
    </div>
  )
}

export default Header