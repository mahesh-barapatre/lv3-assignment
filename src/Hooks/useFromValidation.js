import { useState } from 'react';

const useFormValidation = (formData, setFormData, validate) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, callback) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      await callback();
    }
  };

  return {
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;
