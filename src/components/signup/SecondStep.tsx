import React, { ChangeEvent, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Input from '../form/Input';
import Select from '../form/Select';
import SkillTag from '../form/SkillTag';
import Button from '../form/Button';

const SecondStep = () => {
  const [skills, setSkills] = useState('');
  const [skillErrMessage] = useState('');
  const [formalDegree, setFormalDegree] = useState('');
  const [degreeType, setDegreeType] = useState('');
  const [formalDegreeErrMessage] = useState('');
  const [skillTags, setSkillTags] = useState<string[]>([]);

  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();

  const handleSkillBlur = () => {
    console.log('added a skill');
  };
  const handleFormalDegreeBlur = () => {
    console.log('i log the degree');
  };

  const removeTag = (i: number) => {
    const updatedSkills = skillTags;
    updatedSkills.splice(i, 1);
    setSkillTags([...updatedSkills]);
  };

  console.log('skillz', skillTags);

  return (
    <div className='flex flex-col h-full align-start justify-center w-full gap-12 px-20 py-8'>
      <div className='flex flex-col items-start  gap-6'>
        <Input
          id='skills'
          value={skills}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSkills(e.target.value)}
          placeholder='Your Skills'
          labelName='Skills'
          type='text'
          onBlur={handleSkillBlur}
          error={skillErrMessage}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setSkillTags((prevVal) => [...prevVal, skills]);
              setSkills('');
            }
          }}
        />
        <SkillTag skillTags={skillTags} removeSkill={removeTag} />
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
            { value: 'none', label: 'None' },
          ]}
          onBlur={handleFormalDegreeBlur}
          errMessage={formalDegreeErrMessage}
          labelName='Formal Degree'
        />
        {formalDegree && formalDegree !== 'none' && (
          <Input
            id='degreeType'
            value={degreeType}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDegreeType(e.target.value)}
            placeholder='Formal Degree Name'
            labelName='Degree Name'
            type='text'
            className='w-[20rem]'
            onBlur={handleFormalDegreeBlur}
            error={'error.formalDegre'}
          />
        )}
      </div>
      <div className='flex gap-6'>
        <Link to='/signup'>
          <Button label='Back' disabled={false} onClick={goBackward} />
        </Link>
        <Link to='/signup/third-step'>
          <Button label={'Next'} disabled={false} onClick={moveForward} />
        </Link>
      </div>
    </div>
  );
};

export default SecondStep;
