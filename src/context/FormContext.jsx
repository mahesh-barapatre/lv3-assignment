// src/context/FormContext.js
import React, { createContext, useState } from 'react';

// Create contexts
export const FormDataContext = createContext();
export const AdditionalQuestionsContext = createContext();

// Create provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    programmingLanguage: '',
    experience: '',
    exerciseFrequency: '',
    dietPreference: '',
    qualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      <AdditionalQuestionsContext.Provider value={{ additionalQuestions, setAdditionalQuestions }}>
        {children}
      </AdditionalQuestionsContext.Provider>
    </FormDataContext.Provider>
  );
};
