// Dashboard.jsx
import React, { useState, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import DocumentList from './DocumentList';
import ReviewStep from './ReviewStep';
import NewDocument from './NewDocument';
import AddNewDocument from './AddNewDocument';

const Dashboard = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [documents, setDocuments] = useState([
    { name: 'SDLC Standards', UseCase: 'Healthcare Diagnostics', files: 1, Policies: 'Restricted Phrases', Stack_Holder: 'user1', Risk_Assessment: 'High Risk' },
    { name: 'Cyber Insurance Poli...', UseCase: 'Movie Recommendations', files: 0, Policies: 'Language Mismatch', Stack_Holder: 'user1', Risk_Assessment: 'Minimal Risk' },
    { name: 'Change Release Proce...',  UseCase: 'Sentiment Analysis', files: 0, Policies: 'Toxicity Response', Stack_Holder: 'user2', Risk_Assessment: 'Limited Risk' },
    { name: 'Backup Restore Test',  UseCase: 'Subliminal Techniques', files: 0, Policies: 'Task Adherence', Stack_Holder: 'user3', Risk_Assessment: 'Prohibited Risk' },
    { name: 'SDLC Standards',  UseCase: 'Financial Fraud Detection', files: 0, Policies: 'SQL Hallucination', Stack_Holder: 'user2', Risk_Assessment: 'High Risk' },
  ]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    documentId: '',
    Stack_Holder: '',
    UseCase: '',
    Risk_Assessment: '',
    description: '',
    Policies:'',
    files: null,
    fileUrl: '',
  });

  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const fileInputRef = useRef(null);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
    setStep(1);
    setFormData({
      name: '',
      Stack_Holder: '',
      UseCase: '',
      Policies:'',
      Risk_Assessment: '',
      description: '',
      files: null,
      fileUrl: '',
    });
    setFileInputKey(Date.now());
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleFileBrowseClick = () => {
    fileInputRef.current.click();
  };

  const addDocument = (e) => {
    e.preventDefault();
    const newDocument = {
      name: formData.name,
      UseCase: formData.UseCase,
      files: formData.files ? formData.files.length : 0,
      Policies: formData.Policies,
      Stack_Holder: formData.Stack_Holder,
      Risk_Assessment: formData.Risk_Assessment,
    };
    setDocuments([...documents, newDocument]);
    setShowAddForm(false);
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="relative flex-1 p-4 md:p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Documents 
          <span className='mx-4 w-2 h-2 rounded-full bg-gray-300 inline-block'></span>
          <span className='text-gray-300 text-lg'>{documents.length} Documents</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <input
          type="text"
          placeholder="Search for..."
          className="flex-1 p-2 border rounded-md mb-2 md:mb-0 md:mr-2"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="flex">
          <button className="px-4 py-2 bg-gray-200 rounded-md mr-2 w-full md:w-auto">Filters</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-full md:w-auto" onClick={toggleAddForm}>Add Document</button>
        </div>
      </div>
      <DocumentList documents={documents} searchTerm={searchTerm} />

      {showAddForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
            <XMarkIcon
              className="w-6 h-6 text-gray-600 absolute right-4 top-4 cursor-pointer"
              onClick={toggleAddForm}
            />
            <h2 className="text-2xl font-semibold mb-4">Add New Document</h2>
            <p className="text-gray-600 mb-8">
              Add any Document that is relevant to your compliance program in this central repository, so that it can be reused in multiple parts of TrustCloud.
            </p>

            <div className="flex justify-around mb-8">
              <button 
                className={`text-sm font-semibold ${step === 1 ? 'text-green-600' : 'text-gray-400'}`} 
                onClick={() => setStep(1)}
              >
                Document Details
              </button>
              <button 
                className={`text-sm font-semibold ${step === 2 ? 'text-green-600' : 'text-gray-400'}`} 
                onClick={() => setStep(2)}
              >
                Add Files
              </button>
              <button 
                className={`text-sm font-semibold ${step === 3 ? 'text-green-600' : 'text-gray-400'}`} 
                onClick={() => setStep(3)}
              >
                Review Document Details
              </button>
            </div>

            {step === 1 && (
              <AddNewDocument
                formData={formData}
                handleInputChange={handleInputChange}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {step === 2 && (
              <NewDocument
                formData={formData}
                handleFileChange={handleFileChange}
                handleFileBrowseClick={handleFileBrowseClick}
                handleInputChange={handleInputChange}
                nextStep={nextStep}
                prevStep={prevStep}
                fileInputRef={fileInputRef}
                fileInputKey={fileInputKey}
              />
            )}

            {step === 3 && (
              <ReviewStep
                formData={formData}
                addDocument={addDocument}
                prevStep={prevStep}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
