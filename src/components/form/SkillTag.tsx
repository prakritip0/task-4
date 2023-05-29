import React from 'react';

interface SkillTagProps {
  skillTags: string[];
  setSkillTags: (value: string[]) => void;
}
// const removeSkill = (array: string[], i: number) => {
//   array.splice(i, 1);
// };

const SkillTag = ({ skillTags, setSkillTags }: SkillTagProps) => {
  // console.log('skills', skillTags);
  return (
    <div className='flex gap-1 max-w-[15rem]  flex-wrap '>
      {skillTags.length > 0 &&
        skillTags.map((skill, i) => {
          return (
            <div
              key={i}
              className=' flex items-center gap-1 border border-indigo-500 bg-indigo-100 text-indigo-500 rounded-xl  2xl:py-1 px-1'
            >
              <p className='text-xs'>{skill}</p>
              <p
                className='lg:text-[0.3rem] 2xl:text-[0.5rem] cursor-pointer'
                onClick={() => {
                  console.log('skills', skillTags);
                  const oldSkillTags = skillTags;
                  oldSkillTags.splice(i, 1);
                  setSkillTags(oldSkillTags);
                }}
              >
                ✕
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default SkillTag;
