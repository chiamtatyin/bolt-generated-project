import React from 'react';
    import { useParams } from 'react-router-dom';

    function ProjectDetails() {
      const { id } = useParams();
      // Fetch project details based on the ID
      const project = {
        id: 1,
        name: 'Modern Home Construction',
        imageUrl: 'https://placekitten.com/802/400',
        description: 'A modern home built with sustainable materials and innovative design. This project showcases our commitment to quality and innovation.',
        details: 'This project involved the construction of a modern home using sustainable materials and innovative design techniques. The home features large windows, open spaces, and a green roof. We worked closely with the client to ensure their vision was brought to life.',
        timeline: '6 months',
        client: 'John Doe',
        images: [
          'https://placekitten.com/803/400',
          'https://placekitten.com/804/400',
          'https://placekitten.com/805/400',
        ],
      };

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">{project.name}</h1>
          <img src={project.imageUrl} alt={project.name} className="mb-6 rounded-lg shadow-md w-full object-cover max-h-96" />
          <p className="text-gray-700 mb-8 leading-relaxed">{project.description}</p>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Project Details</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{project.details}</p>
            <p className="text-gray-700 leading-relaxed mb-4"><strong>Timeline:</strong> {project.timeline}</p>
            <p className="text-gray-700 leading-relaxed mb-4"><strong>Client:</strong> {project.client}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`Project ${index + 1}`} className="rounded-lg shadow-md w-full object-cover max-h-60" />
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default ProjectDetails;
