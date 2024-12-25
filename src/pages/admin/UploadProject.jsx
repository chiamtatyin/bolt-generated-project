import React, { useState } from 'react';

    function UploadProject() {
      const [projectName, setProjectName] = useState('');
      const [projectDescription, setProjectDescription] = useState('');
      const [projectImage, setProjectImage] = useState(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle project upload logic here
        console.log('Project Name:', projectName);
        console.log('Project Description:', projectDescription);
        console.log('Project Image:', projectImage);
        alert('Project Uploaded!');
      };

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Upload Project</h1>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Project Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Project Description</label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Project Image</label>
                <input
                  type="file"
                  onChange={(e) => setProjectImage(e.target.files[0])}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Upload Project
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default UploadProject;
