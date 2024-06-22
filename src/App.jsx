import { useContext, useState } from 'react'
import SurveyForm from './components/SurveyForm'
import AdminSummary from './components/AdminSummary';
import { AdditionalQuestionsContext, FormDataContext } from './context/FormContext';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { formData, setFormData } = useContext(FormDataContext);
  const { additionalQuestions, setAdditionalQuestions } = useContext(AdditionalQuestionsContext);

  return (
  <div className=''>
    <h1 className='text-5xl font-extrabold font-mono text-amber-600 text-center w-full'>
      {
        !isSubmitted ? "Survey Form" : "Survey Summary"
      }
      
    </h1>
    {
      !isSubmitted ? 
      <SurveyForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      :
      <AdminSummary formData={formData} additionalQuestions={additionalQuestions} />
    }
  </div>

  )

}

export default App
