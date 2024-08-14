// Step2.jsx
import React from 'react';

const NewDocument = ({ formData, handleFileChange, handleFileBrowseClick, handleInputChange, nextStep, prevStep, fileInputRef, fileInputKey }) => {
  return (
    <div>
      <div
        className="border-dashed border-2 border-gray-300 p-6 rounded-lg mb-4 cursor-pointer"
        onClick={handleFileBrowseClick}
      >
        <p className="text-center text-gray-500">
          Drag and Drop or{' '}
          <span className="text-green-600">Click to Browse</span>
        </p>
        <input
          type="file"
          ref={fileInputRef}
          key={fileInputKey}
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label className="text-gray-700">Link to a file</label>
        <input
          type="text"
          name="fileUrl"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Add File URL"
          value={formData.fileUrl}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-4">
        {formData.files && formData.files.length > 0 && (
          <ul className="list-disc pl-5">
            {Array.from(formData.files).map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={prevStep} className="text-gray-600 px-4 py-2 rounded shadow">
          Back
        </button>
        <button onClick={nextStep} className="text-white bg-green-600 px-4 py-2 rounded shadow">
          Review Document Details
        </button>
      </div>
    </div>
  );
};

export default NewDocument;
