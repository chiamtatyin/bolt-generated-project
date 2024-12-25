import React, { useState, useContext } from 'react';
    import { SettingsContext } from '../../context/SettingsContext';

    function Settings() {
      const { companyName, updateSettings } = useContext(SettingsContext);
      const [newCompanyName, setNewCompanyName] = useState(companyName);

      const handleSubmit = (e) => {
        e.preventDefault();
        updateSettings(newCompanyName);
      };

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Settings</h1>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Website Settings</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
                <input
                  type="text"
                  value={newCompanyName}
                  onChange={(e) => setNewCompanyName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save Settings
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default Settings;
