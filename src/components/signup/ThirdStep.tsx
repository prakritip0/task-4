import React from 'react'
import {Link, useOutletContext} from 'react-router-dom'
import Button from '../form/Button'

const ThirdStep = () => {
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();
  return (
    <div>
      <Link to='/signup/second-step'>
        <Button label='Back' disabled={false} onClick={()=>{console.log('bye');
        }} />
        </Link>
        <Link to='/signup/final-step'>
        <Button label='Next' disabled={false} onClick={()=>{console.log('hello')}} />
        </Link>
    </div>
  )
}

export default ThirdStep