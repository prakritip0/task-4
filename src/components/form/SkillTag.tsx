import React from 'react';

interface SkillTagProps {
  skillTags: string[];
  removeSkill: (i: number) => void;
}

console.log('Hello' && 'World');

const SkillTag = ({ skillTags = [], removeSkill }: SkillTagProps) => (
  <div className='flex gap-1 min-w-[15rem]  flex-wrap '>
    {skillTags.length > 0 &&
      skillTags.length < 11 &&
      skillTags.map((skill, i) => {
        return (
          <div
            key={`skill-${i}`}
            className=' flex items-center gap-1 border border-indigo-500 bg-indigo-100 text-indigo-500 rounded-xl  2xl:py-1 px-1'
          >
            <p className='text-xs'>{skill}</p>
            <button
              className='lg:text-[0.3rem] 2xl:text-[0.5rem] cursor-pointer'
              onClick={() => removeSkill(i)}
            >
              ✗
            </button>
          </div>
        );
      })}
  </div>
);

export default SkillTag;
