import React from 'react';

interface FormSubmitProps {
  submitDisability: boolean;
}

const FormSubmit = ({ submitDisability }: FormSubmitProps) => {
  return (
    <button
      type='submit'
      // value='Next Step'
      // disabled={submitDisability ? true : false}
      className='bg-indigo-300 text-white px-4 py-2 w-[7rem] rounded-lg'
    >
      Next Step
    </button>
  );
};

export default FormSubmit;
