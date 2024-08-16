import React from 'react';

function ReviewStep({ formData, addDocument, prevStep }) {
  return (
    <div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">Review Document Details</h3>
        <p className="text-gray-600">Please review the information you have provided before submitting.</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Project Name:</h4>
        <p>{formData.name}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Use Case:</h4>
        <p>{formData.UseCase}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Stakeholders:</h4>
        <p>{formData.Stack_Holder}</p>
      </div>
      {/* <div className="mb-4">
        <h4 className="text-md font-semibold">Risk Assessment:</h4>
        <p>{formData.Risk_Assessment}</p>
      </div> */}
      <div className="mb-4">
        <h4 className="text-md font-semibold">Datasets used to Train:</h4>
        <p>{formData.datasets}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Policies:</h4>
        <p>{formData.Policies}</p>
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
