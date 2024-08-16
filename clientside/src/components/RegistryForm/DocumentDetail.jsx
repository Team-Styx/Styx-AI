import React from 'react';

const DocumentDetail = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-xl w-full max-w-lg">
        <h3 className="text-lg font-semibold">Review Document Details</h3>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">&times;</button>

        <div className="mb-4">
          <h4 className="text-md font-semibold">Project Name:</h4>
          <p>{document.name}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">Use Case:</h4>
          <p>{document.UseCase}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">Stakeholders:</h4>
          <p>{document.Stack_Holder}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">Datasets used to Train:</h4>
          <p>{document.datasets}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">Policies:</h4>
          <p>{document.Policies}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">Description:</h4>
          <p>{document.description}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">Files:</h4>
          {document.files ? (
            <ul>
              {Array.from(document.files).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          ) : (
            <p>No files uploaded</p>
          )}
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold">File URL:</h4>
          <p>{document.fileUrl}</p>
        </div>
        <button onClick={onClose} className="mt-4 text-white bg-blue-600 px-4 py-2 rounded shadow">
          Close
        </button>
      </div>
    </div>
  );
};

export default DocumentDetail;
