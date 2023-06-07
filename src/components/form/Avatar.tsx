import React from 'react';

interface AvatarProps{
    src:string;
}

const Avatar = ({src}:AvatarProps) => {
  return (
    <div className="h-[5rem] w-[5rem] bg-[url('https://pcgacademia.pl/wp-content/themes/pcgacademia-child/images/png/avatar-placeholder.png')] bg-cover rounded-full overflow-hidden">
      {src && (
        <img src={src} className='w-full h-full object-cover' alt='img' />
      )}
    </div>
  );
};

export default Avatar;
