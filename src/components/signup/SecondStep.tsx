import React, { ChangeEvent, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Input from '../form/Input';
import Select from '../form/Select';
import SkillTag from '../form/SkillTag';
import Button from '../form/Button';

const SecondStep = () => {
  const [skill, setSkills] = useState('');
  const [skillErr, setSkillErr] = useState('');
  const [formalDegree, setFormalDegree] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [formalDegreeErr, setFormalDegreeErr] = useState('');
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [secondNextDisabled, setSecondNextDisabled] = useState(true);
  const [degreeNameErr, setDegreeNameErr] = useState('');

  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();

  const addSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setSkills(e.target.value);
  };
  // const addToSkillTagsArr = (e:KeyboardEvent<HTMLInputElement>)=>{
  //   if (e.key === 'Enter') {
  //     setSkillTags((prevVal) => [...prevVal, skills]);
  //     setSkills('');
  //   }
  // }

  const handleFormalDegreeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormalDegree(e.target.value);
  };
  const handleDegreeNameChange=(e: ChangeEvent<HTMLInputElement>)=>{
    setDegreeName(e.target.value)
  }
  const validateFormalDegree = () => {
    formalDegree ? setFormalDegreeErr('') : setFormalDegreeErr('Formal Degree is required.');
  };
  const validateSkill = () => {
    if (skillTags.length === 0) {
      skill ? setSkillErr('') : setSkillErr('Skills are required.');
    } else {
      setSkillErr('');
    }
  };
  const validateDegreeName = () => {
    degreeName? setDegreeNameErr('') : setDegreeNameErr("Please mention your degree's name.");
  };
  const removeTag = (i: number) => {
    const updatedSkills = skillTags;
    updatedSkills.splice(i, 1);
    setSkillTags([...updatedSkills]);
  };
  //  skillTags.length>=10 && setSkillTags((prevValue)=>[...prevValue.length===0])
  // console.log('skillz', skillTags);

  useEffect(() => {
    console.log(skillTags.length <= 0);

    const noErrMessage = !skillErr && !formalDegreeErr && !degreeNameErr;
    const isDisabled = skillTags.length <= 0 || !formalDegree || !degreeName || !noErrMessage;
    console.log('noerr', noErrMessage);

    setSecondNextDisabled(isDisabled);
  }, [skillTags, formalDegree, skillErr, degreeName, formalDegreeErr, degreeNameErr]);

  return (
    <div className='flex flex-col h-full align-start justify-between w-[30rem] mx-[7rem] pt-[6rem]'>
      <div className='flex flex-col items-start  gap-6'>
        <div className='flex flex-col gap-1 w-full'>
          <Input
            id='skills'
            value={skill}
            onChange={addSkill}
            placeholder='Your Skills'
            labelName='Skills'
            type='text'
            onBlur={validateSkill}
            err={skillErr}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setSkillTags((prevVal) => [...prevVal, skill]);
                setSkills('');
              }
            }}
          />
          <SkillTag skillTags={skillTags} removeSkill={removeTag} />
          {skillTags.length === 10 && (
            <p className='text-xs text-red-700'>10 skills are enough, mate.</p>
          )}
        </div>
        <Select
          id='foramlDegree'
          placeholder='Highest Formal Degree'
          value={formalDegree}
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
          value={degreeName}
          onChange={handleDegreeNameChange}
          placeholder='Formal Degree Name'
          labelName='Degree Name'
          type='text'
          onBlur={validateDegreeName}
          err={degreeNameErr}
          disabled={formalDegree ? false : true}
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
