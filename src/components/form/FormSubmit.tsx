import React from 'react';

interface FormSubmitProps {
  submitDisability: boolean;
}

const FormSubmit = ({ submitDisability }: FormSubmitProps) => {
  return (
    <input
      type='submit'
      value='Next Step'
      disabled={submitDisability ? true : false}
      className='bg-indigo-300 text-white px-4 py-2 w-[7rem] rounded-lg'
    />
  );
};

export default FormSubmit;
