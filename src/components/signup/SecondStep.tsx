import React, { useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SkillTag from '../form/SkillTag';

const SecondStep = () => {
  const [skills, setSkills] = useState('');
  const [skillErrMessage, setSkillErrMessage] = useState('');
  const [formalDegree, setFormalDegree] = useState('');
  const [degreeType, setDegreeType] = useState('');
  const [formalDegreeErrMessage, setFormalDegreeErrMessage] = useState('');
  const [skillTags, setSkillTags] = useState<string[]>([]);

  const handleSkillBlur = () => {
    console.log('added a skill');
  };
  const handleFormalDegreeBlur = () => {
    console.log('i log the degree');
  };
  console.log(skillTags);

  const setTags = (tags: string[]) => {
    setSkillTags(tags);
  };

  return (
    <div className='flex flex-col items-start gap-6'>
      <Input
        id='skills'
        value={skills}
        setValue={setSkills}
        placeholder='Your Skills'
        labelName='Skills'
        type='text'
        className='w-[20rem]'
        onBlur={handleSkillBlur}
        errMessage={skillErrMessage}
        setSkillTags={setTags}
        skillTags={skillTags}
      />
      <SkillTag />
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
          setValue={setDegreeType}
          placeholder='Formal Degree Name'
          labelName='Degree Name'
          type='text'
          className='w-[20rem]'
          onBlur={handleSkillBlur}
          errMessage={skillErrMessage}
        />
      )}
    </div>
  );
};

export default SecondStep;
