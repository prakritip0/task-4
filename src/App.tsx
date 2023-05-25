import React, { Children } from "react";
import Main from "./Main";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/Banner";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import JobVacancy from "./pages/JobVacancy";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Banner />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/jobvacancy",
          element: <JobVacancy />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        }

      ]
      
    }
  ])
  return (
    // <Main/>
    <RouterProvider router={router} />
  );
}

export default App;
