import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './pages/Homepage';
import JobVacancy from './pages/JobVacancy';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';

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
  console.log(isDarkMode);

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function changeTheme() {
    // console.log("...")
    console.log('theme: ', isDarkMode);
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
      <Router>
        <nav>
          <Nav />
        </nav>
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/jobvacancy' element={<JobVacancy />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default Main;
