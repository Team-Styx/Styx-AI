// Step1.jsx
import React from 'react';

const AddNewDocument= ({ formData, handleInputChange, nextStep }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-700">Document Name</label>
          <input 
            type="text" 
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
            placeholder="Document Name" 
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-gray-700">Document ID</label>
          <input 
            type="text" 
            name="documentId"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
            placeholder="Document ID" 
            value={formData.documentId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-gray-700">Stakeholders</label>
          <select 
            name="owner"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.owner}
            onChange={handleInputChange}
          >
            <option value="">Select Stakeholder</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
        </div>
        <div>
          <label className="text-gray-700">Use Cases</label>
          <select 
            name="type"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            <option value="Insurance Policy">Insurance Policy</option>
            <option value="Procedure">Procedure</option>
            <option value="Test Report">Test Report</option>
          </select>
        </div>
        <div>
          <label className="text-gray-700">Group</label>
          <select 
            name="group"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            value={formData.group}
            onChange={handleInputChange}
          >
            <option value="">Select Group</option>
            <option value="Legal">Legal</option>
            <option value="Engineering">Engineering</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>
        <div className="col-span-2">
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
          onClick={() => prevStep()} 
          className="text-gray-600 px-4 py-2 rounded shadow"
        >
          Back
        </button>
        <button 
          onClick={nextStep} 
          className="text-white bg-green-600 px-4 py-2 rounded shadow"
        >
          Add Files
        </button>
      </div>
    </div>
  );
};

export default AddNewDocument;
