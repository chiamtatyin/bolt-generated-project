import React, { useState, useEffect } from 'react';
    import { Routes, Route, useNavigate } from 'react-router-dom';
    import Home from './pages/Home';
    import Portfolio from './pages/Portfolio';
    import Contact from './pages/Contact';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import AdminLogin from './pages/admin/AdminLogin';
    import AdminDashboard from './pages/admin/AdminDashboard';
    import { AuthContext } from './context/AuthContext';
    import Settings from './pages/admin/Settings';
    import UploadProject from './pages/admin/UploadProject';
    import ChangePhotos from './pages/admin/ChangePhotos';
    import { SettingsContext } from './context/SettingsContext';
    import ProjectDetails from './pages/ProjectDetails';
    import AboutUs from './pages/AboutUs';
    import Services from './pages/Services';
    import ContactForm from './pages/ContactForm';
    import FAQ from './pages/FAQ';

    function App() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [companyName, setCompanyName] = useState('Sinlexon Construction');
      const [homePhoto, setHomePhoto] = useState('https://placekitten.com/800/400');
      const [portfolioPhoto, setPortfolioPhoto] = useState('https://placekitten.com/801/400');
      const navigate = useNavigate();

      useEffect(() => {
        const storedCompanyName = localStorage.getItem('companyName');
        const storedHomePhoto = localStorage.getItem('homePhoto');
        const storedPortfolioPhoto = localStorage.getItem('portfolioPhoto');

        if (storedCompanyName) setCompanyName(storedCompanyName);
        if (storedHomePhoto) setHomePhoto(storedHomePhoto);
        if (storedPortfolioPhoto) setPortfolioPhoto(storedPortfolioPhoto);
      }, []);

      const login = () => {
        setIsLoggedIn(true);
        navigate('/admin');
      };

      const logout = () => {
        setIsLoggedIn(false);
        navigate('/');
      };

      const updateSettings = (newCompanyName, newHomePhoto, newPortfolioPhoto) => {
        setCompanyName(newCompanyName);
        setHomePhoto(newHomePhoto);
        setPortfolioPhoto(newPortfolioPhoto);
        localStorage.setItem('companyName', newCompanyName);
        localStorage.setItem('homePhoto', newHomePhoto);
        localStorage.setItem('portfolioPhoto', newPortfolioPhoto);
      };

      return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
          <SettingsContext.Provider value={{ companyName, homePhoto, portfolioPhoto, updateSettings }}>
            <div className="flex flex-col min-h-screen font-sans">
              <Navbar />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/project/:id" element={<ProjectDetails />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact-form" element={<ContactForm />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/settings" element={<Settings />} />
                  <Route path="/admin/upload-project" element={<UploadProject />} />
                  <Route path="/admin/change-photos" element={<ChangePhotos />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </SettingsContext.Provider>
        </AuthContext.Provider>
      );
    }

    export default App;
