import React from 'react';

    function Contact() {
      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Contact Us</h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Feel free to reach out to us for any inquiries or project proposals.
          </p>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Address:</strong> 123 Main Street, Cityville, State
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> info@sinlexonconstruction.com
            </p>
          </div>
        </div>
      );
    }

    export default Contact;
