import { ChangeEvent, useEffect, useState } from 'react';

type PostInputs = {
  title?: string;
  description?: string;
  comment?: string;
};

type UserInputs = {
  name?: string;
  email?: string;
  password?: string;
  image?: File;
  location?: string;
  skills?: string;
  hobbies?: string;
};

type InputTypes = {
  name: string;
  type: string;
  value: string | number | File;
};

type Inputs = PostInputs & UserInputs;

export default function useForm(initialState: Inputs) {
  const [inputs, setInputs] = useState<Inputs>(initialState);

  const initialValues = Object.values(initialState).join('');

  useEffect(() => {
    setInputs(initialState);
  }, [initialValues]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>
  ) {
    let { value, name, type }: InputTypes = event.target;

    if (type === 'file' && event?.target.files) {
      [value] = event.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    clearForm,
    resetForm,
  };
}
