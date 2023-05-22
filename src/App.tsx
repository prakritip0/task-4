import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import JobVacancy from "./pages/JobVacancy";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/jobvacancy" element={<JobVacancy />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
