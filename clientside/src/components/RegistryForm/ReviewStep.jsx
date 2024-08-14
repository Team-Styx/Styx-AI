// ReviewStep.jsx
import React from 'react';

function ReviewStep({ formData, addDocument, prevStep }) {
  return (
    <div>
      {/* Review Document Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Review Document Details</h3>
        <p className="text-gray-600">Please review the information you have provided before submitting.</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Document Name:</h4>
        <p>{formData.name}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Document ID:</h4>
        <p>{formData.documentId}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Owner:</h4>
        <p>{formData.owner}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Type:</h4>
        <p>{formData.type}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Group:</h4>
        <p>{formData.group}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Description:</h4>
        <p>{formData.description}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Files:</h4>
        {formData.files ? (
          <ul>
            {Array.from(formData.files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        ) : (
          <p>No files uploaded</p>
        )}
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">File URL:</h4>
        <p>{formData.fileUrl}</p>
      </div>
      <div className="mt-6 flex justify-between">
        <button 
          onClick={prevStep} 
          className="text-gray-600 px-4 py-2 rounded shadow"
        >
          Back
        </button>
        <button 
          onClick={addDocument} 
          className="text-white bg-green-600 px-4 py-2 rounded shadow"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewStep;
