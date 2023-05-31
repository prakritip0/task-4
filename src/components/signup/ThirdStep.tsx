import React from 'react'
import { useOutletContext} from 'react-router-dom'
import Button from '../form/Button'

const ThirdStep = () => {
  const { moveForward, goBackward } = useOutletContext<{
    moveForward: () => void;
    goBackward: () => void;
  }>();
  return (
    <div>

        <Button label='Back' disabled={false} onClick={goBackward} />
        <Button label='Next' disabled={false} onClick={moveForward} />
      
    </div>
  )
}

export default ThirdStep