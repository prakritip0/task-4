import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Input from '../form/Input';
import Select from '../form/Select';
import SkillTag from '../form/SkillTag';
import Button from '../form/Button';
import { SignUpContext } from '../../pages/SignUp';

const SecondStep = () => {
  const { userDetails, setUserDetails } = useContext(SignUpContext);

  // const [skill, setSkills] = useState('');
  const [skillErr, setSkillErr] = useState('');
  // const [formalDegree, setFormalDegree] = useState('');
  // const [degreeName, setDegreeName] = useState('');
  const [formalDegreeErr, setFormalDegreeErr] = useState('');
  // const [skillTags, setSkillTags] = useState<string[]>([]);
  const [secondNextDisabled, setSecondNextDisabled] = useState(true);
  const [degreeNameErr, setDegreeNameErr] = useState('');

  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();

  const addSkill = (e: ChangeEvent<HTMLInputElement>) => {
    // setSkills(e.target.value);
    setUserDetails({ ...userDetails, skill: e.target.value });
  };
  // const addToSkillTagsArr = (e:KeyboardEvent<HTMLInputElement>)=>{
  //   if (e.key === 'Enter') {
  //     setSkillTags((prevVal) => [...prevVal, skills]);
  //     setSkills('');
  //   }
  // }

  const handleFormalDegreeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // setFormalDegree(e.target.value);
    setUserDetails({ ...userDetails, formalDegree: e.target.value });
  };
  const handleDegreeNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setDegreeName(e.target.value)
    setUserDetails({ ...userDetails, degreeName: e.target.value });
  };
  const validateFormalDegree = () => {
    userDetails.formalDegree
      ? setFormalDegreeErr('')
      : setFormalDegreeErr('Formal Degree is required.');
  };
  const validateSkill = () => {
    if (userDetails.skillTags.length === 0) {
      userDetails.skill ? setSkillErr('') : setSkillErr('Skills are required.');
    } else {
      setSkillErr('');
    }
  };
  const validateDegreeName = () => {
    userDetails.degreeName
      ? setDegreeNameErr('')
      : setDegreeNameErr("Please mention your degree's name.");
  };
  const removeTag = (i: number) => {
    const updatedSkills = userDetails.skillTags;
      updatedSkills.splice(i, 1);
      // setSkillTags([...updatedSkills]);
      setUserDetails({ ...userDetails, skillTags: [...updatedSkills] });
    
  };
  //  skillTags.length>=10 && setSkillTags((prevValue)=>[...prevValue.length===0])
  // console.log('skillz', skillTags);

  useEffect(() => {
    // console.log(userDetails.skillTags.length <= 0);

    const noErrMessage = !skillErr && !formalDegreeErr && !degreeNameErr;
    const isDisabled =
      userDetails.skillTags.length <= 0 ||
      !userDetails.formalDegree ||
      !userDetails.degreeName ||
      !noErrMessage;
    console.log('noerr', noErrMessage);

    setSecondNextDisabled(isDisabled);
  }, [
    userDetails.skillTags,
    userDetails.formalDegree,
    skillErr,
    userDetails.degreeName,
    formalDegreeErr,
    degreeNameErr,
  ]);

  console.log("skillTags",userDetails.skillTags);
  

  return (
    <div className='flex flex-col h-full align-start justify-between w-[30rem] mx-[7rem] pt-[6rem]'>
      <div className='flex flex-col items-start  gap-6'>
        <div className='flex flex-col gap-1 w-full'>
          <Input
            id='skills'
            value={userDetails.skill}
            onChange={addSkill}
            placeholder='Your Skills'
            labelName='Skills'
            type='text'
            onBlur={validateSkill}
            err={skillErr}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // setSkillTags((prevVal) => [...prevVal, userDetails.skill]);
                setUserDetails({ ...userDetails, skillTags: [userDetails.skill] });
                // setSkills('');
                setUserDetails({ ...userDetails, skill: '' });
              }
            }}
          />
          <SkillTag skillTags={userDetails.skillTags} removeSkill={removeTag} />
          {userDetails.skillTags && userDetails.skillTags.length === 10 && (
            <p className='text-xs text-red-700'>10 skills are enough, mate.</p>
          )}
        </div>
        <Select
          id='foramlDegree'
          placeholder='Highest Formal Degree'
          value={userDetails.formalDegree}
          onChange={handleFormalDegreeChange}
          options={[
            { value: 'phd', label: 'PHD' },
            { value: 'masters', label: 'Bachelors' },
            { value: 'bachelors', label: 'Masters' },
            { value: 'highschool', label: 'High School' },
            { value: 'other', label: 'Other' },
          ]}
          onBlur={validateFormalDegree}
          err={formalDegreeErr}
          labelName='Formal Degree'
        />

        <Input
          id='degreeName'
          value={userDetails.degreeName}
          onChange={handleDegreeNameChange}
          placeholder='Formal Degree Name'
          labelName='Degree Name'
          type='text'
          onBlur={validateDegreeName}
          err={degreeNameErr}
          disabled={userDetails.formalDegree ? false : true}
        />
      </div>
      <div className='flex gap-6 pt-[2rem] 2xl:pt-[4rem] w-full'>
        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label={'Next'} disabled={secondNextDisabled} onClick={moveForward} />
      </div>
    </div>
  );
};

export default SecondStep;
