import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function DisEnt() {
  const [progressMapping, setProgressMapping] = useState({});
  const [currentModule, setCurrentModule] = useState("Problem Identification");

  const stepsMapping = {
    "Problem Identification": [
      "Market segmentation",
      "Select a beachhead market",
      "Build an end user profile",
    ],
    "Problem Validation": [
      "Estimating TAM",
      "Profile the persona",
      "Full life cycle usecase",
      "High level product Specification",
      "Quantify the value proposition",
      "Identify your next 10 customer",
    ],
    "Lead Customer EOI": [
      "Define your core",
      "Chart your competitive position",
      "Determine the customer's DMU",
      "Map the process to acquire a paying customer",
      "Estimate your TAM size",
      "Design a Business Model",
    ],
    Graduation: [
      "Set your pricing framework",
      "Estimate the LTV",
      "Map the sale process",
      "Estimate the COCA",
      "Identify key Assumptions",
      "Test key Assumptions",
      "Minimal viable Business product",
      "Show that the dogs will eat the dog food",
      "Develop a product man",
    ],
  };

  useEffect(() => {
    // Initialize progress for the current module if it doesn't exist
    if (!progressMapping[currentModule]) {
      setProgressMapping((prev) => ({
        ...prev,
        [currentModule]: new Array(stepsMapping[currentModule].length).fill(0),
      }));
    }
  }, [currentModule]);

  const handleProgressChange = (index, value) => {
    setProgressMapping((prev) => ({
      ...prev,
      [currentModule]: prev[currentModule].map((p, i) =>
        i === index ? value : p
      ),
    }));
  };

  const completeStep = (index) => {
    setProgressMapping((prev) => ({
      ...prev,
      [currentModule]: prev[currentModule].map((p, i) =>
        i === index ? 100 : p
      ),
    }));
  };

  const renderSteps = () => {
    const steps = stepsMapping[currentModule] || [];
    const progress = progressMapping[currentModule] || [];

    return steps.map((step, index) => (
      <div
        key={index}
        className="flex items-center mb-4 p-4 bg-white shadow-sm rounded-lg"
      >
        <div className="w-full">
          <div className="font-semibold">{step}</div>
          <div className="flex items-center mt-2">
            <div className="relative w-full h-6 bg-gray-200 rounded-lg overflow-hidden mr-4">
              <div
                className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-300 ease-linear"
                style={{ width: `${progress[index]}%` }}
              />
              <div
                className="absolute left-0 top-0 h-full w-1 bg-orange-500 transition-all duration-300 ease-linear"
                style={{ left: `${progress[index]}%` }}
              />
              <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center text-sm text-gray-800">
                {progress[index]}%
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress[index]}
                onChange={(e) =>
                  handleProgressChange(index, Number(e.target.value))
                }
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <button
              onClick={() => completeStep(index)}
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="flex">
        <section className="w-[66px]">
          <SideBar />
        </section>
        <div className="flex-grow">
          <NavBar />
          <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
            <span className="p-5 text-slate-500 text-md">Dashboard / DE</span>
          </div>
          <span className="p-10 text-md font-semibold">
            Disciplined Entrepreneurship
          </span>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white p-2 m-10 mt-4">
              Disciplined Entrepreneurship
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="sm:col-span-1 border-r border-gray-200 p-4 m-10 mt-7">
                <div className="mb-4 font-semibold">Select Module</div>
                <ul>
                  {Object.keys(stepsMapping).map((module) => (
                    <li
                      key={module}
                      className={`flex items-center mb-2 p-2 rounded-lg ${
                        currentModule === module
                          ? "bg-green-100"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setCurrentModule(module)}
                    >
                      <span className="mr-2"></span>
                      <button className="active:scale-[.90] active:duration-70 hover:scale-[1.02]">
                        {module}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2 p-4">
                <div className="font-semibold mb-4">All Steps</div>
                {renderSteps()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisEnt;