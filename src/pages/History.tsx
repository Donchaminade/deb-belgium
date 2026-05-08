import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const timelineEvents = [
  {
    year: "1988",
    city: "BELGIQUE",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "history.events.b1988"
  },
  {
    year: "2009",
    city: "MONTRÉAL",
    image: "https://images.unsplash.com/photo-1519178491520-45996397ca55?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "history.events.m2009"
  },
  {
    year: "2011",
    city: "NEW YORK",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "history.events.ny2011"
  },
  {
    year: "2012",
    city: "SINGAPOUR",
    image: "https://images.unsplash.com/photo-1525625230556-834b9cf40398?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "history.events.s2012"
  },
  {
    year: "2018",
    city: "ABIDJAN",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "history.events.a2018"
  }
];

export default function History() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Header Section */}
      <section className="pt-40 pb-20 px-12 lg:px-40 max-w-7xl mx-auto w-full">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="text-gray-400 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">{t('history.heritage')}</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 italic">{t('history.title')}</h1>
          <div className="w-24 h-1 bg-brand-yellow" />
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="px-12 lg:px-40 py-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 aspect-video lg:aspect-square bg-gray-100 rounded-lg overflow-hidden relative shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200" 
              alt="Dîner en Blanc historical event" 
              className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <h2 className="text-3xl font-serif font-bold uppercase tracking-tight">{t('history.phenomenon_title')}</h2>
            
            <div className="space-y-6 text-gray-500 text-sm leading-relaxed tracking-wide text-justify uppercase font-bold">
              <p>
                {t('history.p1')}
              </p>
              <p>
                {t('history.p2')}
              </p>
              <p>
                {t('history.p3')}
              </p>
              <p>
                {t('history.p4')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with Carousel */}
      <section className="bg-brand-gray-50 py-32 px-12 lg:px-40 mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-4xl font-serif uppercase font-bold">{t('history.timeline_title')}</h2>
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                  >
                    {[0, 1, 2].map((offset) => {
                      const index = (currentIndex + offset) % timelineEvents.length;
                      const event = timelineEvents[index];
                      return (
                        <div key={event.city + index} className="flex flex-col gap-6 group">
                          <div className="aspect-[4/3] overflow-hidden bg-white border border-gray-100 rounded-md shadow-sm">
                            <img 
                              src={event.image} 
                              alt={event.city} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                             <span className="text-brand-red text-[10px] font-bold tracking-[0.3em]">{event.year}</span>
                            <h3 className="text-lg font-serif font-bold uppercase tracking-wider">
                              {event.city}
                            </h3>
                            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed line-clamp-3">
                              {t(event.descriptionKey)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-12 lg:px-40 bg-white">
        <div className="max-w-3xl mx-auto text-center italic font-serif text-3xl md:text-5xl text-gray-800 leading-tight">
          {t('history.quote')}
        </div>
      </section>
    </div>
  );
}
