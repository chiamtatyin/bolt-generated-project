import React from 'react';

    function Blog() {
      const blogPosts = [
        {
          id: 1,
          title: 'Sustainable Building Practices',
          content: 'Learn about our commitment to sustainable building practices and how we are reducing our environmental impact.',
          imageUrl: 'https://placekitten.com/806/400',
          date: '2024-07-26',
        },
        {
          id: 2,
          title: 'New Project Announcement',
          content: 'We are excited to announce our latest project, a luxury apartment complex in the heart of the city.',
          imageUrl: 'https://placekitten.com/807/400',
          date: '2024-07-20',
        },
        {
          id: 3,
          title: 'Tips for Home Renovation',
          content: 'Get our expert tips for planning and executing a successful home renovation project.',
          imageUrl: 'https://placekitten.com/808/400',
          date: '2024-07-15',
        },
      ];

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-light p-6 rounded-lg shadow-md">
                <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-lg shadow-md w-full object-cover max-h-60" />
                <h2 className="text-2xl font-semibold mb-4 text-dark">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
                <p className="text-gray-700 text-sm"><strong>Date:</strong> {post.date}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Blog;
