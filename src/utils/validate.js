const validate = (formData) => {
    let formErrors = {};
  
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.surveyTopic) formErrors.surveyTopic = 'Survey Topic is required';
  
    if (formData.surveyTopic === 'Technology') {
      if (!formData.programmingLanguage) formErrors.programmingLanguage = 'Favorite Programming Language is required';
      if (!formData.experience) {
        formErrors.experience = 'Years of Experience is required';
      } else if (isNaN(formData.experience) || formData.experience <= 0) {
        formErrors.experience = 'Years of Experience must be a number greater than 0';
      }
    }
  
    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) formErrors.exerciseFrequency = 'Exercise Frequency is required';
      if (!formData.dietPreference) formErrors.dietPreference = 'Diet Preference is required';
    }
  
    if (formData.surveyTopic === 'Education') {
      if (!formData.qualification) formErrors.qualification = 'Highest Qualification is required';
      if (!formData.fieldOfStudy) formErrors.fieldOfStudy = 'Field of Study is required';
    }
  
    if (!formData.feedback) {
      formErrors.feedback = 'Feedback is required';
    } else if (formData.feedback.length < 50) {
      formErrors.feedback = 'Feedback must be at least 50 characters';
    }
  
    return formErrors;
  };
  
  export default validate;
  