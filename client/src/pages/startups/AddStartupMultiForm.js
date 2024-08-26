import React, { useState } from 'react';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import Step4 from './step/Step4';
import { FaInfo, FaInfoCircle, FaSearch } from 'react-icons/fa';
import { FaGear, FaMessage } from 'react-icons/fa6';

const AddStartupMultiForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Basic',
    'Official',
    'Founder',
    'Description'
  ];
  const icons = [<FaInfo size={20}/>, <FaGear size={20}/>, <FaSearch size={20}/> , <FaMessage size={20}/>]
  const nextPrev = (n) => {
    setCurrentStep((prevStep) => prevStep + n);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container mx-auto mt-3 mb-8 p-12">
      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-md bg-white mx-auto border-solid border-2 border-gray-100 mb-6"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-6">
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
                  className={`stepper-line absolute top-8 left-[64.4%] w-full h-1`}
                  style={{
                    backgroundColor: currentStep > index ? '#0b5f66' : '#0b5f66',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 />}
        {currentStep === 2 && <Step3 />}
        {currentStep === 3 && <Step4 />}

        <div className="form-footer flex justify-between gap-2">
          {currentStep > 0 && (
            <button
              type="button"
              className="w-24 focus:outline-none border border-gray-300 py-1 px-2 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-sm"
              onClick={() => nextPrev(-1)}
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              className="border border-transparent focus:outline-none py-2 px-5 rounded-md text-center text-white text-sm"
              style={{ backgroundColor: '#0b5f66' }}
              onClick={() => nextPrev(1)}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="w-24 border border-transparent focus:outline-none py-1 px-2 rounded-md text-center text-white hover:bg-indigo-700 text-sm"
              style={{ backgroundColor: '#afcdde' }}
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