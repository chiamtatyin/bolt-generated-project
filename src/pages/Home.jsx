import React, { useContext } from 'react';
    import { SettingsContext } from '../context/SettingsContext';

    function Home() {
      const { companyName, homePhoto } = useContext(SettingsContext);
      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">{companyName}</h1>
          <img src={homePhoto} alt="Home" className="mb-6 rounded-lg shadow-md w-full object-cover max-h-96" />
          <p className="text-gray-700 mb-8 leading-relaxed">
            We are a leading construction company specializing in building high-quality structures.
            Our team of experts is dedicated to delivering exceptional results on every project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-dark">Our Services</h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Residential Construction</li>
                <li>Commercial Construction</li>
                <li>Renovation and Remodeling</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-dark">Why Choose Us?</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to excellence, safety, and client satisfaction.
                Our experienced team ensures that every project is completed on time and within budget.
              </p>
            </div>
          </div>
        </div>
      );
    }

    export default Home;
