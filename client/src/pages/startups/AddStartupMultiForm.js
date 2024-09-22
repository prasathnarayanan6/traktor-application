import React, { useState } from 'react';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step4 from './step/Step4';
import { FaInfo, FaInfoCircle, FaSearch } from 'react-icons/fa';
import { FaGear, FaMessage } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import axios from 'axios';
const AddStartupMultiForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'basic',
    'official',
    'founder',
    'description'
  ];
  const icons = [<FaInfo size={20}/>, <FaGear size={20}/>, <FaSearch size={20}/> , <FaMessage size={20}/>]
  const nextPrev = (n) => {
    setCurrentStep((prevStep) => prevStep + n);
  };
  const [formData, setFormData] = useState({
   basic: {
    startup_name: '',
    startup_program: '',
    startup_type: '',
    startup_industry: '',
    startup_tech: '',
    program: '',
    cohort: ''
  },
  official: {
    official_contact_number: '',
    official_email_address: '',
    website_link: '',
    linkedin_id: '',
    mentor_associated: '',
    registration_number: '',
    password: ''
  },
  founder: {
    founder_name: '',
    founder_email: '',
    founder_number: '',
    founder_gender: '',
    founder_student_id: '',
    linkedInid: ''
  },
  description: {
    logo_image: '',
    startup_description: ''
  }
});
console.log(formData);
const handleChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [section]: {
            ...prevData[section],
            [name]: value,
        },
    }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // const result = await ApiAddNewMentor(formData);
        //console.log('hello')
        const result = await axios.post('http://localhost:3003/api/v1/add-startup', formData)
        if(result)
        {
            toast.success("Startup Created");
            // navigate('/addmentor');
        }
    } catch (err) {
        if(err.response)
        {
            console.log(err.response.status);
                
                if(err.response.status==400)
                {
                    toast.error('Please fill necessary data')
                }
                else if(err.response.status==401)
                {
                    toast.error("Please Provide Valid Email");
                }
                else if(err.response.status==402)
                {
                    toast.error('Phone number is not valid')
                }
                else if(err.response.status==409)
                {
                    toast.error('Already exists')
                }
        }
        else {
            console.log(err);
        }
              
    }
};
  return (
    <div className="container mx-auto mt-3 mb-8 p-12">
      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-md bg-white mx-auto border-solid border-2 border-gray-100 mb-6"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-6 ">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center relative">
                  <div
                    className={`stepper-circle w-16 h-16 mx-auto rounded-full border-2 flex items-center justify-center ${currentStep >= index ? 'text-white' : 'border-gray-300 bg-white text-gray-600'}`}
                    style={{
                      backgroundColor: currentStep >= index ? '#0b5f66' : 'white',
                      borderColor: currentStep >= index ? '#0b5f66' : '#0b5f66',
                    }}
                  >
                     {icons[index % icons.length]}
                  </div>
              <div
                className={`text-lg mt-2 ${currentStep >= index ? 'font-semibold' : ''}`}
                style={{
                  color: currentStep >= index ? '#0b5f66' : '#4b5563',
                }}
              >
                {step}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`stepper-line absolute top-8 md:left-[64.4%] w-full h-1`}
                  style={{
                    backgroundColor: currentStep > index ? '#0b5f66' : '#0b5f66',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        {currentStep === 0 && <Step1 formData={formData.basic} handleChange={(e) => handleChange(e, 'basic')}/>}
        {currentStep === 1 && <Step2 formData={formData.official} handleChange={(e) => handleChange(e, 'official')}/>}
        {currentStep === 2 && <Step3 formData={formData.founder} handleChange={(e) => handleChange(e, 'founder')}/>}
        {currentStep === 3 && <Step4 formData={formData.description} handleChange={(e) => handleChange(e, 'description')}/>}

        <div className="form-footer flex justify-between gap-2">
          {currentStep > 0 && (
            <a
              type="button"
              className="text-gray-500 text-sm font-semibold mt-3 p-1 px-3 rounded-xl shadow-md active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{backgroundColor : '#afdade'}}
              onClick={() => nextPrev(-1)}
            >
              Previous
            </a>
          )}
          {currentStep < steps.length - 1 ? (
            <a
              className="text-gray-500 text-sm font-semibold mt-3 p-1 px-7 rounded-xl shadow-md active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{backgroundColor : '#afdade'}}
              // style={{ backgroundColor: '#0b5f66' }}
              onClick={() => nextPrev(1)}
            >
              Next
            </a>
          ) : (
            <button
              type="submit"
              className="text-gray-500 text-sm font-semibold mt-3 p-1 px-7 rounded-xl shadow-md active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{backgroundColor : '#afdade'}}
              // style={{ backgroundColor: '#afcdde' }}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddStartupMultiForm;