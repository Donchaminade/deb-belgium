import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Instagram, Facebook, Youtube, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryPhotos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80', year: '2019' },
  { id: 2, url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80', year: '2019' },
  { id: 3, url: 'https://images.unsplash.com/photo-1493397212122-2b85def82060?auto=format&fit=crop&q=80', year: '2019' },
  { id: 4, url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80', year: '2018' },
  { id: 5, url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80', year: '2018' },
  { id: 6, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80', year: '2018' },
  { id: 7, url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80', year: '2017' },
  { id: 8, url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80', year: '2017' },
  { id: 9, url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80', year: '2017' },
];

const galleryVideos = [
  { 
    id: 1, 
    title: "Dîner en Blanc - Belgique 2019, Official Video", 
    thumbnail: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80",
    year: "2019",
    duration: "2:45"
  },
  { 
    id: 2, 
    title: "Dîner en Blanc - Belgique 2018, 30th Anniversary", 
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    year: "2018",
    duration: "3:12"
  },
  { 
    id: 3, 
    title: "Dîner en Blanc - Belgique 2017, Video", 
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    year: "2017",
    duration: "2:58"
  }
];

const years = ["All Years", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "1994", "1993", "1992", "1991", "1990"];

export default function Media() {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  useEffect(() => {
    const state = location.state as { tab?: 'photos' | 'videos' };
    if (state?.tab) {
      setActiveTab(state.tab);
    }
  }, [location.state]);
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredPhotos = galleryPhotos.filter(p => selectedYear === "All Years" || p.year === selectedYear);
  const filteredVideos = galleryVideos.filter(v => selectedYear === "All Years" || v.year === selectedYear);

  const currentItems = activeTab === 'photos' ? filteredPhotos : filteredVideos;
  const currentIndex = currentItems.findIndex(item => item.id === selectedItem?.id);

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= currentItems.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = currentItems.length - 1;
    setSelectedItem(currentItems[nextIndex]);
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 overflow-hidden">
      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full flex flex-col md:flex-row bg-black rounded-3xl overflow-hidden shadow-2xl group/modal"
            >
              {/* Carousel Controls */}
              <button 
                onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all opacity-0 group-hover/modal:opacity-100 -translate-x-4 group-hover/modal:translate-x-0"
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all opacity-0 group-hover/modal:opacity-100 translate-x-4 group-hover/modal:translate-x-0"
              >
                <ChevronRight className="text-white w-6 h-6" />
              </button>

              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
              >
                <X className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              <div className="md:w-2/3 bg-zinc-900 aspect-video md:aspect-auto">
                <img 
                  src={selectedItem.url || selectedItem.thumbnail} 
                  className="w-full h-full object-contain"
                  alt="Gallery Detail"
                />
              </div>

              <div className="md:w-1/3 p-12 bg-zinc-950 flex flex-col justify-center">
                <span className="text-brand-red text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                  {selectedItem.year} {selectedItem.duration ? `• ${selectedItem.duration}` : ''}
                </span>
                <h3 className="text-white text-3xl font-serif font-bold uppercase tracking-tight mb-8 leading-tight">
                  {selectedItem.title || `Le Dîner en Blanc - Belgique - ${selectedItem.year}`}
                </h3>
                <div className="w-16 h-0.5 bg-brand-red mb-8" />
                <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-[0.2em] font-bold mb-12">
                  {t('media.detail_text')}
                </p>
                <button 
                   onClick={() => setSelectedItem(null)}
                   className="mt-auto px-8 py-3.5 border border-zinc-800 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center"
                >
                  {t('media.close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        
        {/* Header Section */}
        <header className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold block mb-4"
          >
            {t('media.gallery')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold uppercase tracking-tighter mb-8"
          >
            {t('media.title_prefix')} <br /> {t('media.title_suffix')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-[15px] leading-relaxed max-w-sm"
          >
            {t('media.description')}
          </motion.p>
        </header>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-8 mb-12 gap-8">
          <div className="flex gap-10">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === 'photos' ? 'text-brand-blue' : 'text-gray-400 hover:text-black'}`}
            >
              {t('media.photos')}
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === 'videos' ? 'text-brand-blue' : 'text-gray-400 hover:text-black'}`}
            >
              {t('media.videos')}
            </button>
          </div>

          <div className="flex items-center gap-4 relative">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{t('media.year')}</span>
            <div className="relative">
              <button 
                onClick={() => setIsYearOpen(!isYearOpen)}
                className="flex items-center gap-3 bg-gray-50 px-6 py-2.5 rounded-full border border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em]"
              >
                {selectedYear === "All Years" ? t('media.all_years') : selectedYear}
                <ChevronDown className={`w-3 h-3 transition-transform ${isYearOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isYearOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 py-2 max-h-60 overflow-y-auto">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsYearOpen(false);
                      }}
                      className="w-full text-left px-6 py-2 text-[10px] font-bold text-gray-400 hover:bg-gray-50 hover:text-black uppercase tracking-wider transition-colors"
                    >
                      {year === "All Years" ? t('media.all_years') : year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {activeTab === 'photos' ? (
            filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                onClick={() => setSelectedItem(photo)}
                className="aspect-square relative group overflow-hidden rounded-2xl bg-gray-50 cursor-pointer"
              >
                <img 
                  src={photo.url} 
                  loading="lazy"
                  alt={`Le Dîner en Blanc ${photo.year}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="px-6 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[9px] font-bold uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-all">
                     {t('media.view_photo')}
                   </div>
                </div>
              </motion.div>
            ))
          ) : (
            filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedItem(video)}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="aspect-video relative group overflow-hidden rounded-2xl bg-black cursor-pointer shadow-lg"
              >
                <img 
                  src={video.thumbnail} 
                  loading="lazy"
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                   <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                   </div>
                   <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-1 line-clamp-1">{video.title}</h3>
                   <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">{video.year} • {video.duration}</span>
                </div>
                
                {/* YouTube-like controls overlay */}
                <div className="absolute bottom-4 right-4 text-white/40 text-[9px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  {t('media.watch_youtube')}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-40">
          <button className="w-8 h-8 flex items-center justify-center bg-brand-blue text-white rounded text-[11px] font-bold hover:bg-brand-red transition-all active:scale-95">1</button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded text-[11px] font-bold hover:bg-brand-blue hover:text-white transition-all active:scale-95">2</button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded text-[11px] font-bold hover:bg-brand-blue hover:text-white transition-all active:scale-95">3</button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded text-[11px] font-bold hover:bg-brand-blue hover:text-white transition-all active:scale-95">4</button>
          <button className="px-4 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded text-[11px] font-bold hover:bg-brand-blue hover:text-white transition-all uppercase tracking-wider active:scale-95">Next</button>
          <button className="px-4 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded text-[11px] font-bold hover:bg-brand-blue hover:text-white transition-all uppercase tracking-wider active:scale-95">Last</button>
        </div>

        {/* Keep in Touch Section */}
        <div className="w-full flex flex-col items-center border-t border-gray-100 pt-16 pb-12">
          <div className="flex items-center gap-6 text-gray-500 uppercase tracking-[0.2em] font-bold text-xs">
            <span>{t('footer.keep_in_touch')}</span>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
