import React from 'react';

    function FAQ() {
      const faqList = [
        {
          id: 1,
          question: 'What types of construction projects do you handle?',
          answer: 'We handle a wide range of construction projects, including residential, commercial, and renovation projects.',
        },
        {
          id: 2,
          question: 'How long does a typical construction project take?',
          answer: 'The timeline for a construction project varies depending on the scope and complexity. We will provide a detailed timeline during the planning phase.',
        },
        {
          id: 3,
          question: 'Do you offer free estimates?',
          answer: 'Yes, we offer free estimates for all our construction services. Contact us to schedule a consultation.',
        },
        {
          id: 4,
          question: 'Are you licensed and insured?',
          answer: 'Yes, we are fully licensed and insured to operate in the construction industry.',
        },
        {
          id: 5,
          question: 'What areas do you serve?',
          answer: 'We serve the entire Cityville area and surrounding regions. Contact us to see if we can assist with your project.',
        },
      ];

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Frequently Asked Questions</h1>
          <div className="bg-light p-6 rounded-lg shadow-md">
            {faqList.map((faq) => (
              <div key={faq.id} className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-dark">{faq.question}</h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default FAQ;
