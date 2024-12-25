import React from 'react';

    function AboutUs() {
      const teamMembers = [
        {
          name: 'John Smith',
          position: 'CEO',
          bio: 'John is the CEO of Sinlexon Construction. He has over 20 years of experience in the construction industry.',
          imageUrl: 'https://placekitten.com/200/200',
        },
        {
          name: 'Jane Doe',
          position: 'Project Manager',
          bio: 'Jane is a project manager at Sinlexon Construction. She has a strong background in project management and is dedicated to delivering projects on time and within budget.',
          imageUrl: 'https://placekitten.com/201/200',
        },
        {
          name: 'Peter Jones',
          position: 'Lead Engineer',
          bio: 'Peter is the lead engineer at Sinlexon Construction. He has extensive experience in structural engineering and is committed to ensuring the safety and quality of our projects.',
          imageUrl: 'https://placekitten.com/202/200',
        },
      ];

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">About Us</h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Sinlexon Construction is a leading construction company dedicated to building high-quality structures.
            Our team of experts is committed to delivering exceptional results on every project.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-dark">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-light p-6 rounded-lg shadow-md">
                <img src={member.imageUrl} alt={member.name} className="mb-4 rounded-full w-20 h-20 mx-auto bg-gray-200 p-2" />
                <h3 className="text-xl font-semibold mb-2 text-dark">{member.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-2"><strong>{member.position}</strong></p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default AboutUs;
