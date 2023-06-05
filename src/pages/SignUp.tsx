import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import SignUpDesign from '../components/signup/SignUpDesign';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StepGuide from '../components/signup/StepGuide';
import { createContext } from 'react';
interface userDetailsType {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  skill: string;
  formalDegree: string;
  degreeName: string;
  skillTags: string[];
  companyName: string;
  years: number;
  position: string;
  roles: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  jobPreferences: string[];
  salaryLowerLimit: number;
  salaryUpperLimit: number;
  imageURL:string;
  resumeFileName: string;
  agreed:boolean;
}

interface SignUpContextType {
  userDetails: userDetailsType;
  setUserDetails: Dispatch<
    SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      gender: string;
      dateOfBirth: string;
      skill: string;
      formalDegree: string;
      degreeName: string;
      skillTags: string[];
      companyName: string;
      years: number;
      position: string;
      roles: string;
      startDate: string;
      endDate: string;
      experiences: string[];
      jobPreferences: string[];
      salaryLowerLimit: number;
      salaryUpperLimit: number;
      imageURL:string;
      resumeFileName: string;
      agreed:boolean;
    }>
  >;
}
export const SignUpContext = createContext<SignUpContextType>({
  userDetails: {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    skill: '',
    formalDegree: '',
    degreeName: '',
    skillTags: [],
    companyName: '',
    years: 0,
    position: '',
    roles: 'string',
    startDate: '',
    endDate: '',
    experiences: [],
    jobPreferences: [],
    salaryLowerLimit:0,
    salaryUpperLimit:0,
    imageURL:'',
    resumeFileName: '',
    agreed:false,
  },
  setUserDetails: () => {
    return;
  },
});

const stripTrailingChar = (str: string, char: string) => {
  return str.endsWith(char) ? str.slice(0, -1) : str;
};

const SignUp = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState<userDetailsType>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    skill: '',
    formalDegree: '',
    degreeName: '',
    skillTags: [],
    companyName: '',
    years: 0,
    position: '',
    roles: '',
    startDate: '',
    endDate: '',
    experiences: [],
    jobPreferences: [],
    salaryLowerLimit:0,
    salaryUpperLimit:0,
    imageURL:'',
    resumeFileName: '',
    agreed:false,
  });

  const [signupStep, setSignupStep] = useState(0);

  const titles = [
    'Lets start with your Personal Information',
    'Your Skills and Certifications',
    'Your Work Experience',
    'Your Job Preferences',
    ''
  ];
  const navigate = useNavigate();
  const routes = ['/signup', '/signup/second-step', '/signup/third-step', '/signup/final-step', '/signup/submitted'];

  useEffect(() => {
    const pathname = stripTrailingChar(location.pathname, '/');
    setSignupStep(routes.indexOf(pathname));
  }, [location]);

  const moveForward = () => {
    const currentStep = signupStep;
    const nextStep = currentStep + 1;
    setSignupStep(nextStep);
    const route = routes[nextStep];
    navigate(`${route}`);
  };

  const goBackward = () => {
    const currentStep = signupStep;
    const prevStep = currentStep - 1;
    setSignupStep(prevStep);
    const route = routes[prevStep];
    navigate(`${route}`);
  };

  return (
    <div className=' py-10 px-4 md:px-[8rem] 2xl:px-[10rem] bg-[#fffaf2] dark:bg-gray-800 '>
      <div className='flex flex-col md:py-6 px-1 md:pl-4 2xl:pl-16 h-[33rem] 2xl:w-[90%] rounded-2xl m-auto  bg-[#f1f1f1]  dark:bg-gray-900 2xl:h-[45rem]'>
        <h4 className='text-gray-800 text-2xl 2xl:text-3xl font-bold dark:text-white'>
          {titles[signupStep]}
        </h4>

        <div className='flex justify-between  items-center m-auto  w-full '>
          <StepGuide signupStep={signupStep} />
          <SignUpContext.Provider value={{ userDetails, setUserDetails }}>
            <Outlet
              context={{
                moveForward,
                goBackward,
              }}
            />
          </SignUpContext.Provider>
          <SignUpDesign />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
