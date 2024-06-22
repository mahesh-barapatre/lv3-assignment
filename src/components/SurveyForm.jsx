import React, { useContext, useState } from 'react';
import useFormValidation from '../Hooks/useFromValidation';
import validate from '../utils/validate';
import Dropdown from './Dropdown';
import ConditionalField from './ConditionalField';
import AdminSummary from './AdminSummary';
import FormFields from './FormFields';
import SelectOptn from './SelectOptn';
import Button from './Button';
import { FormDataContext, AdditionalQuestionsContext } from '../context/FormContext';
import { fetchAdditionalQuestions, submitFormData } from '../mockAPI.js';

const SurveyForm = ({isSubmitted, setIsSubmitted}) => {

    const { formData, setFormData } = useContext(FormDataContext);
  const { additionalQuestions, setAdditionalQuestions } = useContext(AdditionalQuestionsContext);
  const { errors, handleChange, handleSubmit } = useFormValidation(formData, setFormData, validate);

        ///for real API requests

//   const fetchAdditionalQuestions = async (topic) => {
//     // Simulate fetching from an external API
//     const response = await fetch(`https://api.example.com/questions?topic=${topic}`);
//     const data = await response.json();
//     return data;
//   };

//   const submitForm = async () => {
//     const questions = await fetchAdditionalQuestions(formData.surveyTopic);
//     setAdditionalQuestions(questions);
//     setIsSubmitted(true);
//   };


        ///for mock API requests
        const submitForm = async () => {
            const questions = await fetchAdditionalQuestions(formData.surveyTopic);
            setAdditionalQuestions(questions);
        
            const result = await submitFormData(formData);
            console.log(result);
            setIsSubmitted(true);
        };

  return (
    <div className="max-w-md mx-auto bg-form shadow-md rounded-lg p-6 m-8">
      
        <form onSubmit={(e) => handleSubmit(e, submitForm)}>
          
          <FormFields
            fieldName="Full Name"
            name="fullName"
            type={"text"}
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder={"Your full name..."}
            icon={"icon-park-solid:edit-name"}
          />
          <FormFields 
            fieldName={"Email"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
            error={errors.email}
            placeholder={"Your email..."}
            icon={"ic:baseline-email"}
          />
          
          <SelectOptn
            fieldName={"Survey Topic"}
            value={formData.surveyTopic}
            name={"surveyTopic"}
            onChange={handleChange}
            error={errors.surveyTopic}
            icon={"gis:position-man"}
            optns={['Technology', 'Health', 'Education']}
          />

          {formData.surveyTopic === 'Technology' && (
            <>
              
              <SelectOptn
            fieldName={"Favorite Programming Language"}
            value={formData.programmingLanguage}
            name={"programmingLanguage"}
            onChange={handleChange}
            error={errors.programmingLanguage}
            icon={"mdi:language-cpp"}
            optns={['JavaScript', 'Python', 'Java', 'C#']}
          />
              <FormFields
                fieldName="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                error={errors.experience}
                placeholder={"Your relevant experience..."}
              icon={"fa-solid:business-time"}
              />
            </>
          )}
          {formData.surveyTopic === 'Health' && (
            <>
              <SelectOptn
                fieldName="Exercise Frequency"
                name="exerciseFrequency"
                optns={['Daily', 'Weekly', 'Monthly', 'Rarely']}
                value={formData.exerciseFrequency}
                onChange={handleChange}
                error={errors.exerciseFrequency}
                icon={"healthicons:exercise-running"}
              />
              <SelectOptn
                fieldName="Diet Preference"
                name="dietPreference"
                optns={['Vegetarian', 'Vegan', 'Non-Vegetarian']}
                value={formData.dietPreference}
                onChange={handleChange}
                error={errors.dietPreference}
                icon={"fluent:food-16-filled"}
              />
            </>
          )}
          {formData.surveyTopic === 'Education' && (
            <>
              <SelectOptn
                fieldName="Highest Qualification"
                name="qualification"
                optns={['High School', "Bachelor's", "Master's", 'PhD']}
                value={formData.qualification}
                onChange={handleChange}
                error={errors.qualification}
                icon={"ph:student-fill"}
              />
              <FormFields
                fieldName="Field of Study"
                name="fieldOfStudy"
                type="text"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                error={errors.fieldOfStudy}
                icon={"solar:book-bold-duotone"}
                placeholder={"Field if Study..."}
              />
            </>
          )}
          <div className="mb-4">
            <label className="text-lg">Feedback:</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded mt-1"
              rows="4"
            />
            {errors.feedback && <span className="text-red-500 text-sm font-bold">{errors.feedback}*</span>}
          </div>

          <Button
       type={"submit"}
      >
        Submit
      </Button>
        </form>
      
    </div>
  );
};

export default SurveyForm;
