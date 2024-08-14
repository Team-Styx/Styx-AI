import React from 'react';
import AdminNavbar from './components/AdminNavbar';
import Sidebar from './components/AdminSidebar';
import Dashboard from './components/RegistryForm/Dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />
      <div className="flex flex-1">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;