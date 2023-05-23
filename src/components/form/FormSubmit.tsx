import React from 'react';

interface FormSubmitProps {
  disabled: boolean;
}

const FormSubmit = ({ disabled }: FormSubmitProps) => {
  return (
    <button
      type='submit'
      // value='Next Step'
      // disabled={submitDisability}
      disabled={disabled}
      className={`${
        disabled ? 'bg-indigo-300 ' : 'bg-indigo-500'
      } text-white px-4 py-2 w-[7rem] rounded-lg`}
    >
      Next Step
    </button>
  );
};

export default FormSubmit;
