import React, { useEffect, useState } from 'react';
import SignUpDesign from '../components/signup/SignUpDesign';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StepGuide from '../components/signup/StepGuide';
import { userDetailsType } from '../components/Types';

const stripTrailingChar = (str: string, char: string) => {
  return str.endsWith(char) ? str.slice(0, -1) : str;
};

const defaultValues = {
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
  role: '',
  startDate: '',
  endDate: '',
  experiences: [],
  noExperience:false,
  jobPreferences: [],
  salaryLowerLimit: 0,
  salaryUpperLimit: 0,
  imageURL: `${localStorage.getItem('imageURL') ? `${localStorage.getItem('imageURL')}` : ''}`,
  resumeFileName: '',
  agreed: false,
  firstStepComplete: false,
  secondStepComplete: false,
  thirdStepComplete: false,
  finalStepComplete: false,
};

const SignUp = () => {
  const location = useLocation();
  // get userDetail:localStorage
  const storedUserDetails = localStorage.getItem('userDetails');
  const _userDetails = storedUserDetails ? JSON.parse(storedUserDetails) : defaultValues;

  const [userDetails, setUserDetails] = useState<userDetailsType>(_userDetails);

  useEffect(() => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }, [userDetails]);

  const [signupStep, setSignupStep] = useState(0);
  const titles = [
    'Lets start with your Personal Information',
    'Your Skills and Certifications',
    'Your Work Experience',
    'Your Job Preferences',
    '',
  ];
  const navigate = useNavigate();
  const routes = [
    '/signup',
    '/signup/second-step',
    '/signup/third-step',
    '/signup/final-step',
    '/signup/submitted',
  ];

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
          <StepGuide
            signupStep={signupStep}
            firstStepComplete={userDetails.firstStepComplete}
            secondStepComplete={userDetails.secondStepComplete}
            thirdStepComplete={userDetails.thirdStepComplete}
            finalStepComplete={userDetails.finalStepComplete}
          />
          <Outlet
            context={{
              moveForward,
              goBackward,
              userDetails,
              setUserDetails,
            }}
          />
          <SignUpDesign />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
