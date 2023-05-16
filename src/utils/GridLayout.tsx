import React from 'react'

const GridLayout = () => {
  const divs = [];
  for(let i =0; i < 89;i++){
    divs.push(<div className="grid-child h-[2.2rem] w-[2.85rem] 2xl:h-[3rem] 2xl:w-[5rem] border border-gray-100"></div>)
  }
  return (
    <div className='gridBox border-[1px] h-[22rem] 2xl:h-[30rem] w-[25rem] 2xl:w-[45rem] mt-32 grid grid-cols-9'>
      {divs}
        {/* <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-00"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child h-[3rem] w-[5rem] border border-gray-100"></div>
        <div className="grid-child  h-[3rem] w-[5rem] border border-gray-100"></div> */}
    </div>
  )
}

export default GridLayout