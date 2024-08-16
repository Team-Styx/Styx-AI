import React, { useState } from 'react';
import DocumentDetail from './DocumentDetail';

const DocumentList = ({ documents, searchTerm }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const filteredDocuments = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const riskStyles = {
    'High Risk': 'bg-yellow-500 text-white',
    'Limited Risk': 'bg-green-400 text-white',
    'Minimal Risk': 'bg-blue-300 text-white',
    'Prohibited Risk': 'bg-red-500 text-white',
  };

  const handleDocumentClick = (doc) => {
    setSelectedDocument(doc);
  };

  const closeDocumentDetail = () => {
    setSelectedDocument(null);
  };

  return (
    <div className="overflow-x-auto shadow-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Project Name</th>
            <th className="border p-2 text-left">Use Cases</th>
            <th className="border p-2 text-left">Files</th>
            <th className="border p-2 text-left">Policies</th>
            <th className="border p-2 text-left">Stakeholders</th>
            <th className="border p-2 text-left">Risk Assessment</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((doc, index) => (
            <tr key={index}>
              <td
                className="border p-2 cursor-pointer"
                onClick={() => handleDocumentClick(doc)}
              >
                {doc.name}
              </td>
              <td className="border p-2">{doc.UseCase}</td>
              <td className="border p-2">{doc.files}</td>
              <td className="border p-2">{doc.Policies}</td>
              <td className="border p-2">{doc.Stack_Holder}</td>
              <td className={`border p-2 ${riskStyles[doc.Risk_Assessment] || ''}`}>
                {doc.Risk_Assessment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDocument && (
        <DocumentDetail document={selectedDocument} onClose={closeDocumentDetail} />
      )}
    </div>
  );
};

export default DocumentList;
