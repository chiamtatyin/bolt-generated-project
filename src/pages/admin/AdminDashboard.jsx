import React, { useContext } from 'react';
    import { AuthContext } from '../../context/AuthContext';
    import { useNavigate } from 'react-router-dom';

    function AdminDashboard() {
      const { isLoggedIn } = useContext(AuthContext);
      const navigate = useNavigate();

      if (!isLoggedIn) {
        navigate('/admin/login');
        return null;
      }

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Admin Dashboard</h1>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Settings</h2>
            <button onClick={() => navigate('/admin/settings')} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
              Manage Settings
            </button>
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-dark">Upload Project</h2>
            <button onClick={() => navigate('/admin/upload-project')} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
              Upload Project
            </button>
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-dark">Change Photos</h2>
            <button onClick={() => navigate('/admin/change-photos')} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Change Photos
            </button>
          </div>
        </div>
      );
    }

    export default AdminDashboard;
