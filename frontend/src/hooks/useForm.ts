/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
export const useForm = (initialFields: any, cb: (fields: any) => null) => {
  const [fields, setFields] = useState(initialFields);

  useEffect(() => {
    cb(fields);
  }, [fields]);

  const handleChange = ({ target }: any) => {
    const field: string = target.name;
    let value: boolean | number | string;
    switch (target.type) {
      case 'number':
        value = +target.value;
        break;
      case 'checkbox':
        value = target.checked;
        break;
      default:
        value = target.value;
        break;
    }
    setFields((prevFields: any) => ({ ...prevFields, [field]: value }));
  };

  return [fields, handleChange, setFields];
};
