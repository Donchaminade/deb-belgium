/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Equipe from './pages/Equipe';
import History from './pages/History';
import Partenaire from './pages/Partenaire';
import ContactPartenaire from './pages/ContactPartenaire';
import News from './pages/News';
import JoinFanList from './pages/JoinFanList';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/histoire" element={<History />} />
            <Route path="/partenaire" element={<Partenaire />} />
            <Route path="/contact-partenaire" element={<ContactPartenaire />} />
            <Route path="/news" element={<News />} />
            <Route path="/rejoindre-la-liste" element={<JoinFanList />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/politique-relative-aux-cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
