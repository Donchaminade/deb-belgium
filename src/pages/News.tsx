import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "SAVE THE DATE! THURSDAY, SEPTEMBER 15T...",
    date: "06 JULY 2022",
    excerpt: "After two years of waiting, it is with great pleasure and a certain emotion that I announce the return...",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "CALL FOR VOLUNTEERS LEADERS - LE DINER...",
    date: "05 JULY 2022",
    excerpt: "Le Diner en Blanc has been able to cross time and borders thanks to the precious collaboration of hu...",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "SEARCH EVENT PROJECT MANAGER / CO-ORGA...",
    date: "17 JUNE 2022",
    excerpt: "The organizer is looking for an Event Project Manager, and an experienced person willing to invest i...",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "MESSAGE FROM FRANÇOIS PASQUIER TO THE...",
    date: "14 JUNE 2022",
    excerpt: "This message is addressed to all my friends of the Diner en Blanc de Belgique in order to answer their...",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "LE DÎNER EN BLANC DE BELGIQUE IN THE MEDI...",
    date: "11 JUNE 2018",
    excerpt: "On Sunday June 3rd was held the 30th Anniversary of Le Diner en Blanc de Belgique. A record number of g...",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "INTERVIEW WITH TYSON VILLENEUVE, CO-OR...",
    date: "09 MAY 2018",
    excerpt: "Since its inaugural edition in 2012, Le Diner en Blanc – Vancouver has met with resounding success!...",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
  }
];

export default function News() {
  const { t } = useTranslation();
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-40 px-6 lg:px-40 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-serif font-bold tracking-tighter mb-20"
        >
          NEWS
        </motion.h1>

        {/* Hero Branding */}
        <div className="relative mb-32 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-2xl aspect-video flex items-center justify-center p-12"
          >
            {/* Background Logo Mark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
               <span className="text-[30rem] font-serif font-bold text-black border-none leading-none">B</span>
            </div>
            {/* Foreground Logo Mark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none -translate-x-20 translate-y-10">
               <span className="text-[30rem] font-serif font-bold text-black border-none leading-none">D</span>
            </div>
            
            <h2 className="text-7xl md:text-9xl font-serif font-bold tracking-[0.1em] md:tracking-[0.2em] relative z-10 bg-gradient-to-br from-brand-blue via-brand-yellow to-brand-red bg-clip-text text-transparent drop-shadow-sm">
              BELGIQUE
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 mb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight uppercase max-w-2xl leading-tight">
            LE DÎNER EN BLANC - BELGIQUE POSTPONED TO 2023
          </h3>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            07 SEPTEMBER 2022
          </span>
          <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
            The event scheduled for September 15, 2022 has been postponed until summer 2023.
          </p>
          <div className="w-full h-px bg-gray-100" />
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {articles.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-50 mb-6 drop-shadow-sm transition-all group-hover:drop-shadow-xl">
                 <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                 />
              </div>
              <h4 className="text-[13px] font-bold tracking-tight uppercase mb-2 leading-tight group-hover:text-brand-red transition-colors">
                {article.title}
              </h4>
              <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-4">
                {article.date}
              </span>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-32">
             <button className="px-4 py-2 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase rounded hover:bg-brand-blue hover:text-white transition-all active:scale-95">First</button>
             <button className="px-4 py-2 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase rounded hover:bg-brand-blue hover:text-white transition-all active:scale-95">Previous</button>
             <button className="w-10 h-10 bg-brand-blue text-white rounded text-[10px] font-bold hover:bg-brand-red transition-all active:scale-95 shadow-md">1</button>
             <button className="w-10 h-10 border border-gray-100 text-gray-400 rounded text-[10px] font-bold hover:bg-brand-blue hover:text-white transition-all active:scale-95">2</button>
             <button className="px-4 py-2 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase rounded hover:bg-brand-blue hover:text-white transition-all active:scale-95">Next</button>
             <button className="px-4 py-2 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase rounded hover:bg-brand-blue hover:text-white transition-all active:scale-95">Last</button>
        </div>
      </section>

      {/* Keep in Touch */}
      <section className="w-full flex flex-col items-center border-t border-gray-100 py-16 mb-10">
          <div className="flex items-center gap-6 text-gray-500 uppercase tracking-[0.2em] font-bold text-xs">
            <span>{t('footer.keep_in_touch')}</span>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>
      </section>
    </div>
  );
}
