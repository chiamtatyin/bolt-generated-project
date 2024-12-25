import React, { useContext } from 'react';
    import { SettingsContext } from '../context/SettingsContext';

    function Footer() {
      const { companyName } = useContext(SettingsContext);
      return (
        <footer className="bg-dark text-white text-center p-4">
          <p>&copy; {new Date().getFullYear()} {companyName}</p>
        </footer>
      );
    }

    export default Footer;
