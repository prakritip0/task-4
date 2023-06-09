import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Input from '../form/Input';
import Select from '../form/Select';
import Tag from '../form/Tag';
import Button from '../form/Button';
import { userDetailsType } from '../Types';

const SecondStep = () => {
  const [skillErr, setSkillErr] = useState('');
  const [formalDegreeErr, setFormalDegreeErr] = useState('');
  const [secondNextDisabled, setSecondNextDisabled] = useState(true);
  const [degreeNameErr, setDegreeNameErr] = useState('');

  const { moveForward, goBackward, userDetails, setUserDetails } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
    userDetails: userDetailsType;
    setUserDetails:React.Dispatch<React.SetStateAction<userDetailsType>>;
  }>();

  const handleInputChange = (field: string, value: string) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  const validateFormalDegree = () => {
    userDetails.formalDegree
      ? setFormalDegreeErr('')
      : setFormalDegreeErr('*Formal Degree is required.');
  };
  const validateSkill = () => {
    if (userDetails.skillTags.length === 0) {
      userDetails.skill ? setSkillErr('') : setSkillErr('*Skills are required.');
    } else {
      setSkillErr('');
    }
  };
  const validateDegreeName = () => {
    userDetails.degreeName
      ? setDegreeNameErr('')
      : setDegreeNameErr("*Please mention your degree's name.");
  };
  const removeSkill = (i: number) => {
    const updatedSkills = userDetails.skillTags;
    updatedSkills.splice(i, 1);
    setUserDetails({ ...userDetails, skillTags: [...updatedSkills] });
  };

  useEffect(() => {
    const noErrMessage = !skillErr && !formalDegreeErr && !degreeNameErr;
    const isDisabled =
      userDetails.skillTags.length <= 0 ||
      !userDetails.formalDegree ||
      !userDetails.degreeName ||
      !noErrMessage;

    setSecondNextDisabled(isDisabled);
    isDisabled
      ? setUserDetails({ ...userDetails, secondStepComplete: false })
      : setUserDetails({ ...userDetails, secondStepComplete: true });
  }, [
    userDetails.skillTags,
    userDetails.formalDegree,
    skillErr,
    userDetails.degreeName,
    formalDegreeErr,
    degreeNameErr,
  ]);

  return (
    <div className='flex flex-col h-full align-start justify-between w-[30rem] mx-[7rem] pt-[6rem]'>
      <div className='flex flex-col items-start  gap-6'>
        <div className='flex flex-col gap-1 w-full'>
          <Input
            id='skills'
            value={userDetails.skill}
            onChange={(e) => handleInputChange('skill', e.target.value)}
            placeholder='Your Skills'
            label='Skills'
            type='text'
            onBlur={validateSkill}
            err={skillErr}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (userDetails.skillTags.length !== 10) {
                  setUserDetails({
                    ...userDetails,
                    skillTags: [...userDetails.skillTags, userDetails.skill],
                    skill: '',
                  });
                }
              }
            }}
          />
          <Tag tags={userDetails.skillTags} removeTag={removeSkill} />
          {userDetails.skillTags.length === 10 && (
            <p className='text-xs text-red-700'>10 skills are enough, mate.</p>
          )}
        </div>
        <Select
          id='formalDegree'
          placeholder='Highest Formal Degree'
          value={userDetails.formalDegree}
          onChange={(e) => handleInputChange('formalDegree', e.target.value)}
          options={[
            { value: 'phd', label: 'PHD' },
            { value: 'masters', label: 'Bachelors' },
            { value: 'bachelors', label: 'Masters' },
            { value: 'highschool', label: 'High School' },
            { value: 'other', label: 'Other' },
          ]}
          onBlur={validateFormalDegree}
          err={formalDegreeErr}
          label='Formal Degree'
        />
        <Input
          id='degreeName'
          value={userDetails.degreeName}
          onChange={(e) => handleInputChange('degreeName', e.target.value)}
          placeholder='Formal Degree Name'
          label='Degree Name'
          type='text'
          onBlur={validateDegreeName}
          err={degreeNameErr}
          disabled={userDetails.formalDegree ? false : true}
        />
      </div>
      <div className='flex gap-6 pt-[2rem] 2xl:pt-[4rem] w-full'>
        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label='Next' disabled={secondNextDisabled} onClick={moveForward} />
      </div>
    </div>
  );
};

export default SecondStep;
