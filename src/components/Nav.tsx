import React, { useContext, useState } from 'react';
import { ThemeContext } from '../pages/Homepage';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);

  const [mobileMenuOn, setmobileMenuOn] = useState(false);
  //  console.log(darkTheme);

  return (
    <nav
      className={
        'flex flex-row w-[100vw] items-center justify-between border border-gray-300 dark:border-gray-800 flex-wrap py-2 px-3 lg:py-5 lg:px-32  bg-[#fffaf2] dark:bg-gray-800'
      }
    >
      <Link to='/'>
        <h1 className='text-indigo-500 text-3xl font-semibold'>Hirace</h1>
      </Link>

      <div
        className='hamburger-icons ml-[auto] md:hidden'
        onClick={() => setmobileMenuOn(!mobileMenuOn)}
      >
        {mobileMenuOn === true ? (
          <>
            <div className='w-[100vw] h-[100vh]  bg-gray-800 opacity-30 fixed top-0 right-0'></div>
            <div className='slide-in-menu hdden w-[70vw] h-[100vh]  bg-[#fffaf2] fixed top-0 right-0 z-20 flex  flex-col items-center gap-10 pt-4 px-4 dark:bg-gray-800'>
              <div className='w-[100%]  flex justify-end'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 dark:text-white'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </div>

              <ul
                className={
                  'flex flex-col items-center font-light gap-5 2xl:gap-[5rem] lg:gap-[3rem]'
                }
              >
                <li className={'text-black dark:text-white'}>
                  <Link to='/jobvacancy'>Job Vacancy</Link>
                </li>

                <li className={'text-black dark:text-white'}>
                  <a href='#'>Features</a>
                </li>
                <li className={'text-black dark:text-white'}>
                  <a href='#'>Pricing</a>
                </li>
                <li className={'text-black dark:text-white'}>
                  <a href='#'>About Us</a>
                </li>
              </ul>
              {
                isDarkMode ? (
                  <button
                    className='border border-gray-800 px-2 rounded-lg py-2 bg-[#fffaf2] '
                    onClick={changeTheme}
                  >
                    Light Mode
                  </button>
                ) : (
                  // document.documentElement.classList.add('dark');
                  <button
                    className='border px-2 rounded-lg py-2 text-white bg-gray-800'
                    onClick={changeTheme}
                  >
                    Dark Mode
                  </button>
                )
                // document.documentElement.classList.remove('dark');
              }

              <button className='bg-indigo-500 rounded-lg text-white  px-4 py-2 font-light  text-lg'>
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 dark:text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        )}
      </div>

      <div className='flex items-center justify-between md:gap-[8rem] lg:gap-[10rem] 2xl:gap-[30rem]'>
        <div className='nav-items hidden md:block'>
          <ul className={'flex flex-row font-light gap-5 2xl:gap-[5rem] lg:gap-[3rem]'}>
            <li
              className={
                'hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white'
              }
            >
              <Link to='/jobvacancy'>Job Vacancy</Link>
            </li>
            <li
              className={
                'hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white'
              }
            >
              <Link to='/features'>Features</Link>
            </li>
            <li
              className={
                'hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white'
              }
            >
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li
              className={
                'hover:text-gray-300 focus:text-gray-400 text-md text-black dark:text-white'
              }
            >
              <Link to='/aboutus'>About Us</Link>
            </li>
          </ul>
        </div>
        <div className='right hidden md:flex items-center gap-6'>
          <div
            className='theme border-2 border-gray-500 h-8 w-8 rounded-lg flex items-center justify-center p-1 cursor-pointer dark:border-white dark:bg-gray-800'
            onClick={() => changeTheme()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 hidden dark:block text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 dark:hidden'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
              />
            </svg>
          </div>
          <button className='bg-indigo-500 rounded-lg text-white  px-4 py-2 font-light  text-lg'>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
