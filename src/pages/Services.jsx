import React from 'react';

    function Services() {
      const servicesList = [
        {
          id: 1,
          name: 'Residential Construction',
          description: 'We specialize in building high-quality custom homes tailored to your needs and preferences.',
          imageUrl: 'https://placekitten.com/400/300',
        },
        {
          id: 2,
          name: 'Commercial Construction',
          description: 'We provide comprehensive commercial construction services, from office buildings to retail spaces.',
          imageUrl: 'https://placekitten.com/401/300',
        },
        {
          id: 3,
          name: 'Renovation and Remodeling',
          description: 'We offer expert renovation and remodeling services to transform your existing spaces.',
          imageUrl: 'https://placekitten.com/402/300',
        },
        {
          id: 4,
          name: 'Project Management',
          description: 'Our experienced project managers ensure that every project is completed on time and within budget.',
          imageUrl: 'https://placekitten.com/403/300',
        },
      ];

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => (
              <div key={service.id} className="bg-light p-6 rounded-lg shadow-md">
                <img src={service.imageUrl} alt={service.name} className="mb-4 rounded-lg shadow-md w-full object-cover max-h-60" />
                <h2 className="text-2xl font-semibold mb-4 text-dark">{service.name}</h2>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Services;
