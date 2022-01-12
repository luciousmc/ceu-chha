import { ChangeEvent, ChangeEventHandler, useState } from 'react';

function useFormValues<T>(
  initialState: T
): [T, ChangeEventHandler<HTMLInputElement>] {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleChange];
}

export default useFormValues;
