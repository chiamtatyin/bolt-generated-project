import React, { useContext } from 'react';
    import { Link } from 'react-router-dom';
    import { AuthContext } from '../context/AuthContext';
    import { SettingsContext } from '../context/SettingsContext';

    function Navbar() {
      const { isLoggedIn, logout } = useContext(AuthContext);
      const { companyName } = useContext(SettingsContext);

      return (
        <nav className="bg-dark p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">{companyName}</Link>
            <div className="space-x-6">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link>
               <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              <Link to="/contact-form" className="text-gray-300 hover:text-white">Contact</Link>
              <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              {isLoggedIn && (
                <button onClick={logout} className="text-gray-300 hover:text-white">Logout</button>
              )}
              {!isLoggedIn && (
                <Link to="/admin/login" className="text-gray-300 hover:text-white">Admin</Link>
              )}
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;
