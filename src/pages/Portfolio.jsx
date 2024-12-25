import React, { useContext } from 'react';
    import { SettingsContext } from '../context/SettingsContext';
    import { Link } from 'react-router-dom';

    function Portfolio() {
      const { portfolioPhoto } = useContext(SettingsContext);
      const projects = [
        {
          id: 1,
          name: 'Modern Home Construction',
          imageUrl: '/src/assets/home.svg',
          description: 'A modern home built with sustainable materials and innovative design.',
        },
        {
          id: 2,
          name: 'Commercial Building Renovation',
          imageUrl: '/src/assets/building.svg',
          description: 'Complete renovation of a commercial building, enhancing its functionality and aesthetics.',
        },
        {
          id: 3,
          name: 'Luxury Apartment Complex',
          imageUrl: '/src/assets/apartment.svg',
          description: 'A luxury apartment complex with state-of-the-art amenities and high-end finishes.',
        },
      ];

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Our Portfolio</h1>
          <img src={portfolioPhoto} alt="Portfolio" className="mb-6 rounded-lg shadow-md w-full object-cover max-h-96" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-light p-6 rounded-lg shadow-md">
                <img src={project.imageUrl} alt={project.name} className="mb-4 rounded-full w-20 h-20 mx-auto bg-gray-200 p-2" />
                <h2 className="text-2xl font-semibold mb-4 text-dark">{project.name}</h2>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                <Link to={`/project/${project.id}`} className="text-primary hover:underline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Portfolio;
