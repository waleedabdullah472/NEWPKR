import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import VIPEvents from './pages/VIPEvents';
import InviteCode from './pages/InviteCode';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Disclaimer  from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Full Header */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<VIPEvents />} />
          <Route path="/invite-code" element={<InviteCode />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
           <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;