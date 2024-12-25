import React from 'react';

    function Testimonials() {
      const testimonialsList = [
        {
          id: 1,
          name: 'Alice Smith',
          text: 'Sinlexon Construction did an amazing job on our home renovation. They were professional, efficient, and the results exceeded our expectations.',
          imageUrl: 'https://placekitten.com/203/200',
        },
        {
          id: 2,
          name: 'Bob Johnson',
          text: 'We hired Sinlexon Construction for our commercial building project, and we were extremely impressed with their attention to detail and commitment to quality.',
          imageUrl: 'https://placekitten.com/204/200',
        },
        {
          id: 3,
          name: 'Charlie Brown',
          text: 'The team at Sinlexon Construction was a pleasure to work with. They were always responsive and kept us informed throughout the entire process.',
          imageUrl: 'https://placekitten.com/205/200',
        },
      ];

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsList.map((testimonial) => (
              <div key={testimonial.id} className="bg-light p-6 rounded-lg shadow-md">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="mb-4 rounded-full w-20 h-20 mx-auto bg-gray-200 p-2" />
                <h3 className="text-xl font-semibold mb-2 text-dark">{testimonial.name}</h3>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Testimonials;
