import React from 'react';

const DocumentList = ({ documents, searchTerm }) => {
  const filteredDocuments = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="overflow-x-auto shadow-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Document Name</th>
            <th className="border p-2 text-left">Type</th>
            <th className="border p-2 text-left">Files</th>
            <th className="border p-2 text-left">Links</th>
            <th className="border p-2 text-left">Stackholders</th>
            <th className="border p-2 text-left">Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((doc, index) => (
            <tr key={index}>
              <td className="border p-2">{doc.name}</td>
              <td className="border p-2">{doc.type}</td>
              <td className="border p-2">{doc.files}</td>
              <td className="border p-2">{doc.links}</td>
              <td className="border p-2">{doc.owner}</td>
              <td className="border p-2">{doc.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentList;