import { useState } from 'react';

type Inputs = {
  title?: string;
  description?: string;
  name?: string;
  email?: string;
  password?: string;
  skills?: string;
  location?: string;
  hobbies?: string;
  image?: File;
};

export default function useFormValidate() {
  // Create a state to handle errors
  const [formError, setFormError] = useState(false);

  //   Check for errors and handle them
  function handleError(inputs: Inputs) {
    if (inputs.password && inputs.password.length < 8) {
      setFormError(true);
      return true;
    }
  }

  return {
    formError,
    setFormError,
    handleError,
  };
}
