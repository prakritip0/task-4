import React from "react";

const Header = () => {
  return (
    <div className="border-y-2 flex items-center flex-wrap py-6 px-20">
        <div className="logo">
        <h1 className='text-indigo-700 text-3xl font-bold'>Hirace</h1>
        </div>
        <div className="nav-items">
            <ul className="flex flex-row font-light">
                <li><a href="#">Job Vacancy</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        <div className="theme border-2 border-indigo-700 h-8 w-16 rounded-full ">
            <div className="lightMode h-7 w-7 rounded-full bg-indigo-700 mx-0.5 my-0.5" ></div>
            <div className="darkMode"></div>
        </div>
    </div>
  )
}

export default Header