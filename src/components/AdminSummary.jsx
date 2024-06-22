import React from 'react';

const AdminSummary = ({ formData, additionalQuestions }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Survey Summary</h2>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Full Name:</strong> {formData.fullName}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Email:</strong> {formData.email}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Survey Topic:</strong> {formData.surveyTopic}</p>
      </div>
      {formData.surveyTopic === 'Technology' && (
        <>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Favorite Programming Language:</strong> {formData.programmingLanguage}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Years of Experience:</strong> {formData.experience}</p>
          </div>
        </>
      )}
      {formData.surveyTopic === 'Health' && (
        <>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Exercise Frequency:</strong> {formData.exerciseFrequency}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Diet Preference:</strong> {formData.dietPreference}</p>
          </div>
        </>
      )}
      {formData.surveyTopic === 'Education' && (
        <>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Highest Qualification:</strong> {formData.qualification}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Field of Study:</strong> {formData.fieldOfStudy}</p>
          </div>
        </>
      )}
      <div className="mb-4">
        <p className="text-gray-700"><strong>Feedback:</strong> {formData.feedback}</p>
      </div>
      {additionalQuestions && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Additional Questions</h3>
          {additionalQuestions.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700"><strong>{question.question}:</strong> {question.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSummary;
