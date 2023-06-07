import React from 'react';

interface ExperienceTagPropsType {
  experiences: {
    position: string;
    companyName: string;
    years: number;
  }[];
  removeExperience: (i: number) => void;
}

const ExperienceTag = ({ experiences, removeExperience }: ExperienceTagPropsType) => {
  console.log(experiences);

  return (
    <div className='flex gap-1 min-w-[15rem]  flex-wrap '>
      {experiences.length > 0 &&
        experiences.length < 6 &&
        experiences.map((experience, i) => {
          return (
            <div
              key={`tag-${i}`}
              className=' flex items-start gap-2 border border-indigo-500 bg-indigo-100 text-indigo-500 rounded-xl  2xl:py-1 px-1'
            >
              <div className='flex flex-col'>
                <p className='text-xs font-bold'>{experience.position}</p>
                <p className='text-xs font-semibold'>{experience.companyName}</p>
                <p className='text-xs'>{experience.years} years</p>
              </div>

              <button className='text-[0.5rem] cursor-pointer' onClick={() => removeExperience(i)}>
                ✗
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ExperienceTag;
