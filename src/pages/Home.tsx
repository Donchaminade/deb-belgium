import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, Camera, Film, Map, ScrollText } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = [
    { title: t('home.city_view'), icon: <Map className="w-5 h-5" />, bg: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80', path: '/about' },
    { title: t('home.photos'), icon: <Camera className="w-5 h-5" />, bg: 'https://images.unsplash.com/photo-1493397212122-2b85def82060?auto=format&fit=crop&q=80', path: '/media', state: { tab: 'photos' } },
    { title: t('home.videos'), icon: <Film className="w-5 h-5" />, bg: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80', path: '/media', state: { tab: 'videos' } },
    { title: t('home.history'), icon: <ScrollText className="w-5 h-5" />, bg: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80', path: '/histoire' },
  ];

  const stats = [
    { value: "30,000+", label: t('home.stats.members'), sublabel: t('home.stats.across_city') },
    { value: "120", label: t('home.stats.cities_world'), sublabel: t('home.stats.join_movement') },
    { value: "1988", label: t('home.stats.tradition'), sublabel: t('home.stats.born_bagatelle') },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Video Hero Section */}
      <section id="hero" className="relative h-[670px] flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://paris.dinerenblanc.com/images/home/hero.png"
        >
          <source src="https://paris.dinerenblanc.com/images/home/banner_3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center text-center text-white"
        >
          {/* DB Logo Overlay - Oval with initials */}
          <div className="relative w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-60 border-[3px] sm:border-[4px] md:border-[6px] border-white rounded-[50%] flex items-center justify-center mb-8 md:mb-12 bg-black/5 backdrop-blur-[2px]">
            <div className="relative text-5xl sm:text-7xl md:text-9xl font-serif font-bold tracking-tighter flex items-center justify-center">
               <span className="translate-x-2 sm:translate-x-3">B</span>
               <span className="absolute -translate-x-3 sm:-translate-x-4 opacity-80">D</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-[0.4em] mb-12 uppercase">{t('hero.location')}</h2>
          
          <button 
            onClick={() => navigate('/rejoindre-la-liste')}
            className="px-10 md:px-14 py-4 md:py-4.5 bg-brand-blue text-white text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-red transition-all shadow-2xl mb-20 active:scale-95"
          >
            {t('nav.join_fan_list')}
          </button>

          <button 
            onClick={() => {
              const element = document.getElementById('concept');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{t('hero.discover')}</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </section>

      {/* Vivez l'Inattendu Section */}
      <section id="concept" className="py-24 px-6 bg-white flex flex-col items-center text-center scroll-mt-20">
        {/* DB Small Logo */}
        <div className="relative w-20 h-32 border-[3px] border-brand-yellow rounded-[50%] flex items-center justify-center mb-10">
           <div className="relative text-4xl font-serif font-bold flex items-center justify-center text-brand-red">
               <span className="translate-x-1">B</span>
               <span className="absolute -translate-x-1 opacity-80">D</span>
           </div>
        </div>
        
        <h3 className="text-4xl md:text-7xl font-script text-gray-800 mb-12 font-normal leading-tight px-4">{t('home.vivez_inattendu')}</h3>
        
        <button 
          onClick={() => navigate('/about')}
          className="px-12 py-4 bg-brand-blue text-white uppercase tracking-[0.3em] text-[11px] font-bold hover:bg-brand-red transition-all flex items-center gap-3 active:scale-95 shadow-lg underline-offset-4"
        >
          {t('home.discover_concept')} <div className="w-4 h-px bg-white ml-2" />
        </button>
      </section>

      {/* Info Grid (Stats) */}
      <section id="stats" className="h-auto md:h-64 bg-brand-gray-50 flex flex-col md:flex-row border-b border-gray-200 scroll-mt-20">
        {stats.map((stat, idx) => (
          <div key={idx} className="border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center justify-center p-12 md:p-8 hover:bg-white transition-colors duration-500">
            <span className="font-serif text-5xl mb-3">{stat.value}</span>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-black font-bold block mb-1">
                {stat.label}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 italic">
                {stat.sublabel}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Philosophy Section */}
      <section id="spirit" className="py-24 md:py-40 px-6 bg-white border-b border-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 uppercase tracking-[0.6em] text-[10px] font-bold mb-10 block"
          >
            {t('home.spirit_of_belgium')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif mb-12 md:mb-16 leading-[1.2] md:leading-[1.1]"
          >
            {t('home.spirit_title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed tracking-wide uppercase px-4 md:px-8">
              {t('home.spirit_text')}
            </p>
            <button 
              onClick={() => navigate('/histoire')}
              className="px-10 md:px-12 py-3.5 md:py-4 border border-black text-black uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-black hover:text-white transition-all"
            >
              {t('home.our_history_btn')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Grid Sections */}
      <section id="multimedia" className="flex flex-col md:flex-row h-auto md:h-screen overflow-hidden scroll-mt-20">
        {sections.map((section, idx) => (
          <motion.div 
            key={idx}
            onClick={() => navigate(section.path, { state: section.state })}
            className="group relative flex-1 h-[400px] md:h-full overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-1000 ease-in-out hover:flex-[1.5]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${section.bg})` }}
            />
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-all duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-4 bg-white/90 p-8 min-w-[200px] border border-gray-100">
              <div className="text-black group-hover:scale-110 transition-transform duration-500">
                {section.icon}
              </div>
              <h3 className="text-black uppercase tracking-[0.4em] text-[10px] font-bold">
                {section.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </section>

      <section id="annual" className="h-[90vh] relative overflow-hidden flex items-center justify-center p-6 lg:p-32 scroll-mt-20">
         <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl bg-white/90 backdrop-blur-md p-10 md:p-20 text-center shadow-2xl border border-white/20"
        >
          <span className="text-brand-red uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Belgium</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-10 italic leading-tight text-gray-900">{t('home.annual_rendezvous')}</h2>
          <p className="text-gray-600 uppercase tracking-[0.2em] text-xs mb-14 leading-relaxed max-w-lg mx-auto">{t('home.annual_description')}</p>
          <Link to="/media" className="group relative inline-flex items-center gap-4 text-black uppercase tracking-[0.4em] text-[11px] font-bold py-4 px-8 border border-black hover:bg-black hover:text-white transition-all duration-500">
            {t('home.view_gallery_2024')}
            <div className="w-6 h-px bg-current group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
