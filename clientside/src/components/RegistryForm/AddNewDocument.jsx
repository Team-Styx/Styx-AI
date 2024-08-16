import React, { useState } from 'react';
import { policiesList } from './PoliciesList';
import { riskdata } from './riskdata';

const AddNewDocument = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Project Name is required';
    if (!formData.UseCase) newErrors.UseCase = 'Use Case is required';
    if (!formData.Stack_Holder) newErrors.Stack_Holder = 'Stakeholders are required';
    if (!formData.datasets) newErrors.datasets = 'Datasets used to Train are required';
    if (!formData.Policies) newErrors.Policies = 'Policies are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      console.log('Form is valid, moving to next step');
      nextStep();
    } else {
      console.log('Form is invalid, stay on the current step');
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-700">Project Name</label>
          <input 
            type="text" 
            name="name"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Project Name" 
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="text-gray-700">Use Case</label>
          <select 
            name="UseCase" 
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.UseCase ? 'border-red-500' : ''}`}
            value={formData.UseCase}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {riskdata.map((risk, index) => (
              <option key={index} value={risk}>{risk}</option>
            ))}
          </select>
          {errors.UseCase && <p className="text-red-500 text-sm">{errors.UseCase}</p>}
        </div>
        <div>
          <label className="text-gray-700">Stakeholder</label>
          <select 
            name="Stack_Holder" 
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.Stack_Holder ? 'border-red-500' : ''}`}
            value={formData.Stack_Holder}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
          {errors.Stack_Holder && <p className="text-red-500 text-sm">{errors.Stack_Holder}</p>}
        </div>
        <div>
          <label className="text-gray-700">Datasets used to Train</label>
          <select 
            name="datasets"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.datasets ? 'border-red-500' : ''}`}
            value={formData.datasets}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Engineering">Engineering</option>
            <option value="DevOps">DevOps</option>
          </select>
          {errors.datasets && <p className="text-red-500 text-sm">{errors.datasets}</p>}
        </div>
        <div>
          <label className="text-gray-700">Policies</label>
          <select 
            name="Policies" 
            className={`mt-1  block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.Policies ? 'border-red-500' : ''}`}
            value={formData.Policies}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {policiesList.map((policy, index) => (
              <option key={index} value={policy}>{policy}</option>
            ))}
          </select>
          {errors.Policies && <p className="text-red-500 text-sm">{errors.Policies}</p>}
        </div>
        <div className="col-span-2 shadow-xl">
          <label className="text-gray-700">Description</label>
          <textarea 
            name="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4" 
            placeholder="Description" 
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button 
          onClick={prevStep} 
          className="text-gray-600 px-4 py-2 rounded shadow"
        >
          Back
        </button>
        <button 
          onClick={handleNextStep} 
          className="text-white bg-green-600 px-4 py-2 rounded shadow"
        >
          Add Files
        </button>
      </div>
    </div>
  );
};

export default AddNewDocument;
