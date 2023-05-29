import React from 'react'
import { useOutletContext,Link } from 'react-router-dom';
import Button from '../form/Button'

const FinalStep = () => {
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();
  return (
    <div><Link to='/signup/third-step'>
    <Button label='Back' disabled={false} onClick={()=>{console.log('bye');
    }} />
    </Link>
    <Link to='/signup/final-step'>
    <Button label='Submit' disabled={false} onClick={()=>{console.log('hello')}} />
    </Link></div>
  )
}

export default FinalStep