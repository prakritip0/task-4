import React,{createContext} from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export interface ThemeContextType{
  darkTheme:boolean;
  changeTheme: () => void 
}

export const ThemeContext = createContext<ThemeContextType>({darkTheme:false, changeTheme: ()=>{return }});

const Homepage = () => {
 let darkTheme:boolean;
const storedTheme = localStorage.getItem('theme');

if(storedTheme==='dark'){
  darkTheme = true;
  document.documentElement.classList.add('dark');
 }else {
   darkTheme=false;
   document.documentElement.classList.remove('dark');
 }
 
 
 function changeTheme(){
   darkTheme=!darkTheme;
   if(darkTheme===false){
     document.documentElement.classList.remove('dark');
     localStorage.setItem('theme', 'light')
   }else if (darkTheme === true){
     document.documentElement.classList.add('dark');
     localStorage.setItem('theme', 'dark')
   }
 }

  return (
    <div className='bg-[#fffaf2] dark:bg-gray-800'>
      <ThemeContext.Provider value={{darkTheme, changeTheme}}>
     <Nav/>
     <Banner/>
     <hr className='mt-[3rem] mx-[7rem] 2xl:mx-[9rem] bg-gray-800' />
     <Footer/>
      </ThemeContext.Provider>
    </div>
  )
}

export default Homepage