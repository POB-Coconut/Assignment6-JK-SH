import { useState, useEffect } from 'react';

const useForm = (callback) => {
  const [correctedValue, setCorrectedValue] = useState([]);
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      if (callback(correctedValue)) {
        setValue('');
        setCorrectedValue([]);
        setIsSubmitting(false);
      }
    }
  }, [callback, isSubmitting, correctedValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.value);
    const correctedNums = event.target.value
      .split(',')
      .filter((el) => !isNaN(el))
      .map((el) => +el);
    setCorrectedValue(correctedNums);
  };

  return {
    handleChange,
    handleSubmit,
    value,
    correctedValue,
  };
};

export default useForm;
