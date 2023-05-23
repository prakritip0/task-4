import React from 'react'

const GridLayout = () => {
  const divs = [];
  for(let i =0; i < 89;i++){
    divs.push(<div className="grid-child h-[2.2rem] md:w-[2.85rem] 2xl:h-[3rem] 2xl:w-[5rem] border border-gray-100"></div>)
  }
  return (
    <div className='gridBox border-[1px] h-[22rem] 2xl:h-[30rem] w-[22rem] md:w-[25rem] 2xl:w-[45rem] grid grid-cols-9'>
      {divs}
    </div>
  )
}

export default GridLayout