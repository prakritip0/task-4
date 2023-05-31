import React, { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
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

function Main() {
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
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
      <nav>
        <Nav />
      </nav>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </ThemeContext.Provider>
  );
}

export default Main;
