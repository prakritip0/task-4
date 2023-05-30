import React, { ChangeEvent, useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Input from '../form/Input';
import Select from '../form/Select';
import SkillTag from '../form/SkillTag';
import Button from '../form/Button';

const SecondStep = () => {
  const [skill, setSkills] = useState('');
  const [skillErr, setSkillErr] = useState('');
  const [formalDegree, setFormalDegree] = useState('');
  const [degreeType, setDegreeType] = useState('');
  const [formalDegreeErr, setFormalDegreeErr] = useState('');
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [secondNextDisabled, setSecondNextDisabled] = useState(true);
  const [degreeTypeErr, setDegreeTypeErr] = useState('');

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
  const validateFormalDegree = () => {
    formalDegree ? setFormalDegreeErr('') : setFormalDegreeErr('Formal Degree is required.');
  };
  const validateSkill = () => {
    if(skillTags.length===0){
      skill ? setSkillErr('') : setSkillErr('Skills are required.');
    }else{
      setSkillErr('')
    }
    
  };
  const validateDegreeType = () => {
    degreeType ? setDegreeTypeErr('') : setDegreeTypeErr("Please mention your degree's name.");
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

    const noErrMessage = !skillErr && !formalDegreeErr && !degreeTypeErr;
    const isDisabled = skillTags.length <= 0 || !formalDegree || !degreeType || !noErrMessage;
    console.log('noerr',noErrMessage);
    
    setSecondNextDisabled(isDisabled);
  }, [skillTags, formalDegree, skillErr,degreeType, formalDegreeErr, degreeTypeErr]);

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
            error={skillErr}
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
          setValue={setFormalDegree}
          options={[
            { value: 'phd', label: 'PHD' },
            { value: 'masters', label: 'Bachelors' },
            { value: 'bachelors', label: 'Masters' },
            { value: 'highschool', label: 'High School' },
            { value: 'other', label: 'Other' },
          ]}
          onBlur={validateFormalDegree}
          errMessage={formalDegreeErr}
          labelName='Formal Degree'
        />

        <Input
          id='degreeType'
          value={degreeType}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDegreeType(e.target.value)}
          placeholder='Formal Degree Name'
          labelName='Degree Name'
          type='text'
          onBlur={validateDegreeType}
          error={degreeTypeErr}
          disabled={formalDegree ? false : true}
        />
      </div>
      <div className='flex gap-6 pt-[2rem] 2xl:pt-[4rem] w-full'>
        {/* <Link to='/signup'> */}
          <Button label='Back' disabled={false} onClick={goBackward} />
        {/* </Link> */}
        {/* <Link to='/signup/third-step'> */}
          <Button label={'Next'} disabled={secondNextDisabled} onClick={moveForward} />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default SecondStep;
