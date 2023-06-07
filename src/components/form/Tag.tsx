import React from 'react';
import { TagPropsType } from '../Types';

const Tag = ({ tags = [], removeTag }: TagPropsType) => (
  <div className='flex gap-1 min-w-[15rem]  flex-wrap '>
    {tags.length > 0 &&
      tags.length < 11 &&
      tags.map((tag, i) => {
        return (
          <div
            key={`tag-${i}`}
            className=' flex items-center gap-1 border border-indigo-500 bg-indigo-100 text-indigo-500 rounded-xl  2xl:py-1 px-1'
          >
            <p className='text-xs'>{tag}</p>
            <button className='text-[0.5rem] cursor-pointer' onClick={() => removeTag(i)}>
              ✗
            </button>
          </div>
        );
      })}
  </div>
);

export default Tag;
