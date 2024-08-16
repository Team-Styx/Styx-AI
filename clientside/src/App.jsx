import React,{useState} from 'react';
import AdminNavbar from './components/AdminNavbar';
import Sidebar from './components/AdminSidebar';
import Dashboard from './components/RegistryForm/Dashboard';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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