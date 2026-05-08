import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const location = useLocation();

  const navLinks = [
    { name: t('nav.concept'), href: '/about' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.gallery'), href: '/media' },
    { name: t('nav.partner'), href: '/partenaire' },
    { name: t('nav.history'), href: '/histoire' },
    { name: t('nav.team'), href: '/equipe' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
  };

  return (
    <header className="w-full flex flex-col bg-white sticky top-0 z-[100] shadow-sm">
      {/* Top Utility Bar */}
      <div className="w-full bg-[#fcfcfc] border-b border-gray-100 py-3 lg:py-5 px-6 lg:px-40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium text-gray-500 gap-3">
        <div className="flex items-center gap-3">
          <span className="hidden xs:inline">{t('nav.change_city')}</span>
          <div className="relative">
            <select className="appearance-none border border-gray-200 bg-white px-3 py-1 pr-8 rounded outline-none cursor-pointer text-gray-700 hover:border-gray-300 transition-colors">
              <option>Belgique</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-[12px] font-bold tracking-tight transition-all duration-300 hover:text-brand-red ${isActive(link.href) ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="relative group flex items-center gap-2 cursor-pointer hover:text-black transition-all group py-1">
            <span className="text-sm">{currentLang.flag}</span>
            <span className="uppercase font-bold tracking-wider">{currentLang.code}</span>
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:rotate-180 transition-transform duration-300" />
            
            <motion.div 
              className="absolute top-full right-0 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-1 z-[70] min-w-[140px] border border-gray-100 mt-2"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <div className="py-2 px-3 text-[9px] uppercase tracking-widest text-gray-400 border-b border-gray-50 mb-1">{t('nav.select_language')}</div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => toggleLanguage(lang.code)}
                  className={`w-full text-left py-2.5 px-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center gap-3 uppercase tracking-widest text-[10px] ${i18n.language === lang.code ? 'text-black font-bold bg-gray-50/50' : 'text-gray-500'}`}
                >
                  <span className="text-sm grayscale-0">{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                  {i18n.language === lang.code && <div className="w-1 h-1 bg-brand-blue rounded-full" />}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full px-6 lg:px-40 py-4 lg:py-8 flex items-center justify-between border-b border-gray-100 relative">
        <Link to="/" className="flex items-baseline gap-1 text-lg sm:text-2xl lg:text-5xl font-serif font-bold tracking-tighter uppercase text-black group transition-all shrink-0">
          DÎNER <span className="text-gray-400 italic lowercase font-normal text-xs sm:text-lg lg:text-3xl group-hover:text-brand-red transition-colors normal-case">en</span> BLANC
        </Link>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex px-8 py-3 bg-white border border-gray-100 text-gray-800 text-[11px] uppercase tracking-widest font-bold hover:bg-gray-50 transition-all shadow-sm">
            {t('nav.signin')}
          </button>
          <Link 
            to="/rejoindre-la-liste"
            className="hidden lg:flex px-8 py-3 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-bold hover:bg-brand-red transition-all shadow-md items-center justify-center active:scale-95"
          >
             {t('nav.join_fan_list')}
          </Link>
          
          <button 
            className="lg:hidden p-2 text-brand-blue hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[80] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[90] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-50">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Menu</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-xl font-serif italic transition-all ${isActive(link.href) ? 'text-brand-red pl-4 border-l-2 border-brand-red' : 'text-gray-800 hover:text-brand-red'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-auto pt-10 border-t border-gray-100 flex flex-col gap-6 pb-10">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="py-3 px-4 bg-gray-50 text-[10px] uppercase tracking-widest font-bold text-gray-600 hover:bg-gray-100 transition-all">
                      {t('nav.signin')}
                    </button>
                    <button className="py-3 px-4 bg-gray-50 text-[10px] uppercase tracking-widest font-bold text-gray-600 hover:bg-gray-100 transition-all">
                      {t('nav.help')}
                    </button>
                  </div>
                  
                  <Link 
                    to="/rejoindre-la-liste"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-brand-blue text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-red transition-all shadow-xl flex items-center justify-center text-center"
                  >
                    {t('nav.join_fan_list')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
