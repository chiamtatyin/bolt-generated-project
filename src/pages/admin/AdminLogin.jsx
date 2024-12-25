import React, { useState, useContext } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { AuthContext } from '../../context/AuthContext';

    function AdminLogin() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const { login } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
          login();
          navigate('/admin');
        } else {
          alert('Invalid credentials');
        }
      };

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-dark">Admin Login</h1>
          <form onSubmit={handleSubmit} className="bg-light p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </form>
        </div>
      );
    }

    export default AdminLogin;
