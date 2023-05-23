import React, { createContext, useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export interface ThemeContextType {
  isDarkMode: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  changeTheme: () => {
    return;
  },
});

const Homepage = () => {
  const storedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function changeTheme() {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode === false) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else if (isDarkMode === true) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <div className='bg-[#fffaf2] dark:bg-gray-800'>
      <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
        <Nav />
        <Banner />
        <hr className='mt-[3rem] md:mx-[7rem] 2xl:mx-[9rem] ' />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default Homepage;
