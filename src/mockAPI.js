// src/mockAPI.js

const additionalQuestions = {
    Technology: [
      { question: "What is your favorite tech blog?", type: "text" },
      { question: "How do you keep up with the latest in tech?", type: "text" },
    ],
    Health: [
      { question: "Do you follow a specific workout routine?", type: "text" },
      { question: "How many hours of sleep do you get on average?", type: "number" },
    ],
    Education: [
      { question: "Which educational platform do you prefer?", type: "text" },
      { question: "Do you prefer online or offline learning?", type: "text" },
    ],
  };
  
  export const fetchAdditionalQuestions = async (topic) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(additionalQuestions[topic] || []);
      }, 500);
    });
  };
  
  export const submitFormData = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data received:', formData);
        resolve({ message: 'Form submitted successfully', formData });
      }, 500);
    });
  };
  