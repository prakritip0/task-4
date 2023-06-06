import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner';
import FinalStep from './components/signup/FinalStep';
import FirstStep from './components/signup/FirstStep';
import FormSubmitted from './components/signup/FormSubmitted';
import SecondStep from './components/signup/SecondStep';
import ThirdStep from './components/signup/ThirdStep';
import Main from './Main';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import JobVacancy from './pages/JobVacancy';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';

const Router = () => {
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
                { path: '/signup/submitted', element: <FormSubmitted /> },
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
        <RouterProvider router={router} />
      );
    }
    

export default Router