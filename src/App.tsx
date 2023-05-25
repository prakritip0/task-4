import React, { Children } from 'react';
import Main from './Main';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner';
import SignUp from './pages/SignUp';
import JobVacancy from './pages/JobVacancy';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import FirstStep from './components/signup/FirstStep';
import SecondStep from './components/signup/SecondStep';
import ThirdStep from './components/signup/ThirdStep';
import FinalStep from './components/signup/FinalStep';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Banner />,
        },
        {
          path: '/signup',
          element: <SignUp />,
          children: [
            { path: '/signup', element: <FirstStep /> },
            { path: '/signup/second-step', element: <SecondStep /> },
            { path: '/signup/third-step', element: <ThirdStep /> },
            { path: '/signup/final-step', element: <FinalStep /> },
          ],
        },
        {
          path: '/jobvacancy',
          element: <JobVacancy />,
        },
        {
          path: '/aboutus',
          element: <AboutUs />,
        },
        {
          path: '/pricing',
          element: <Pricing />,
        },
      ],
    },
  ]);
  return (
    // <Main/>
    <RouterProvider router={router} />
  );
}

export default App;
