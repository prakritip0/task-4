import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import Date from '../form/Date';
import { useOutletContext } from 'react-router-dom';
import Button from '../form/Button';
import { ChangeEvent } from 'react';
import { userDetailsType } from '../Types';
import Err from '../form/Err';
import Avatar from '../form/Avatar';

const FirstStep = () => {
  const [err, setErr] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [genderErr, setGenderErr] = useState('');
  const [ageErr, setAgeErr] = useState('');
  const [firstNextDisabled, setFirstNextDisabled] = useState(true);
  const { moveForward, goBackward, userDetails, setUserDetails } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
    userDetails: userDetailsType;
    setUserDetails:React.Dispatch<React.SetStateAction<userDetailsType>>;
  }>();

  const handleInputChange = (field: string, value: string) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  // eslint-disable-next-line no-useless-escape
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const validateFirstName = () => {
    userDetails.firstName
      ? setErr({ ...err, firstName: '' })
      : setErr({ ...err, firstName: '*First name is required.' });
  };
  const validateLastName = () => {
    userDetails.lastName
      ? setErr({ ...err, lastName: '' })
      : setErr({ ...err, lastName: '*Last name is required.' });
  };
  const validateEmail = () => {
    regex.test(userDetails.email)
      ? setErr({ ...err, email: '' })
      : setErr({ ...err, email: '*Correct email is required.' });
  };
  const validateGender = () => {
    userDetails.gender ? setGenderErr('') : setGenderErr('*Gender is required.');
  };

  const validateAge = () => {
    let isValid = true;
    const DOB = new window.Date(userDetails.dateOfBirth);
    const currentDate = new window.Date();
    const eighteenYrs = new window.Date(
      currentDate.getUTCFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    if (DOB.valueOf() <= eighteenYrs.valueOf()) {
      return isValid;
    } else {
      isValid = false;
    }
    return isValid;
  };

  const handleDobChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validateAge();
    if (!isValid) {
      setAgeErr('*You must be 18 or older.');
    } else {
      setAgeErr('');
    }
    setUserDetails({ ...userDetails, dateOfBirth: e.target.value });
    localStorage.setItem('dateOfBirth', e.target.value)
  };
  const readImage = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = e.target.files;
    const previewImage = uploadedImage && uploadedImage[0];

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setUserDetails({ ...userDetails, imageURL: reader.result as string });
    });
    reader.readAsDataURL(previewImage as File);
    localStorage.setItem('imageURL', e.target.value)
  };

  useEffect(() => {
    const noErrMessage = !err.firstName && !err.lastName && !err.email && !genderErr && !ageErr;
    const isDisabled =
      !userDetails.imageURL ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.gender ||
      !userDetails.dateOfBirth ||
      !noErrMessage;
    setFirstNextDisabled(isDisabled);
    isDisabled
      ? (setUserDetails({ ...userDetails, firstStepComplete: false }))
      : setUserDetails({ ...userDetails, firstStepComplete: true });
  }, [
    userDetails.imageURL,
    userDetails.firstName,
    userDetails.lastName,
    userDetails.email,
    userDetails.gender,
    userDetails.dateOfBirth,
    err.firstName,
    err.lastName,
    err.email,
    genderErr,
    ageErr,
  ]);

  return (
    <div className='flex flex-col align-start justify-between  h-full w-[30rem] mx-[7rem]'>
      <div className='flex flex-col  gap-10 items-start 2xl:gap-10'>
        <div className='profilepic flex items-center w-full gap-6'>
          <Avatar src={userDetails.imageURL} />
          <input
            type='file'
            id='image'
            accept='image/png, image/jpg, image/jpeg'
            onChange={readImage}
            hidden
          />
          <label
            htmlFor='image'
            className='text-xs text-indigo-500 border border-indigo-500 rounded-sm px-1 py-1'
          >
            Upload Image ↑
          </label>
        </div>
        <div className='name flex flex-row gap-4 w-full'>
          <div>
            <Input
              id='firstName'
              placeholder='Ram'
              label='First Name'
              type='text'
              value={userDetails.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              onBlur={validateFirstName}
              err={err.firstName}
            />
            <Err err={err.firstName} />
          </div>
          <div>
            <Input
              id='lastName'
              placeholder='Thapa'
              label='Last Name'
              type='text'
              value={userDetails.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              onBlur={validateLastName}
              err={err.lastName}
            />
            <Err err={err.lastName} />
          </div>
        </div>
        <div className='w-full'>
          <Input
            id='email'
            placeholder='ramthapa@gmail.com'
            label='Email'
            type='email'
            value={userDetails.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={validateEmail}
            err={err.email}
          />
          <Err err={err.email} />
        </div>
        <div className='flex gap-4 w-full'>
          <div>
            <Select
              id='gender'
              onChange={(e) => handleInputChange('gender', e.target.value)}
              value={userDetails.gender}
              options={[
                { value: 'Male', label: "I'm a male." },
                { value: 'Female', label: "I'm a female." },
                { value: 'Other', label: "I'm out of this world." },
              ]}
              placeholder='Choose gender'
              onBlur={validateGender}
              err={genderErr}
              label='Gender'
            />
            <Err err={genderErr} />
          </div>
          <div>
            <Date
              id='dob'
              value={userDetails.dateOfBirth}
              onChange={handleDobChange}
              err={ageErr}
              label='Date of birth'
            />
            <Err err={ageErr} />
          </div>
        </div>
      </div>
      <div className='flex gap-6 pt-[2rem] 2xl:pt-[4rem] w-full'>
        <Button label='Back' disabled={true} onClick={goBackward} />
        <Button label={'Next'} disabled={firstNextDisabled} onClick={moveForward} />
      </div>
    </div>
  );
};
export default FirstStep;
