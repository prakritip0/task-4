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
  // console.log(experiences);

  return (
    <div className='flex flex-col gap-2 w-full  flex-wrap '>
      {experiences.length > 0 &&
        experiences.length < 6 &&
        experiences.map((experience, i) => {
          return (
            <div
              key={`tag-${i}`}
              className=' flex items-start  justify-between w-full gap-2 border border-indigo-500 bg-indigo-100 text-indigo-500 rounded-lg  px-[12px] py-[8px]'
            >
              <div className='flex flex-col'>
                <p className='text-sm font-bold'>{experience.position}</p>
                <p className='text-xs font-semibold'>{experience.companyName}</p>
                <p className='text-xs'>
                  {experience.years} {experience.years > 1 ? 'years' : 'year'}
                </p>
                <p></p>
              </div>
              <button className='text-[0.7rem] cursor-pointer' onClick={() => removeExperience(i)}>
                ✗
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ExperienceTag;
