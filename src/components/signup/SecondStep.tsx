import React,{useState} from 'react'
import Input from '../form/Input'

const SecondStep = () => {
  const [skills, setSkills]= useState('')
  const [skillErrMessage, setSkillErrMessage]= useState('')
  const handleSkillBlur=()=>{
    console.log('added a skill');
    
  }
  return (
    <div>
      <Input id='skills' value={skills} setValue={setSkills} placeholder='Your Skills' type='text' onBlur={handleSkillBlur} errMessage={skillErrMessage}/>
    </div>
  )
}

export default SecondStep