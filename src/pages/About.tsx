import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-16 md:pt-32 pb-24 md:pb-40">
      {/* Video Banner Section */}
      <section className="mb-24">
        <video 
          className="w-full aspect-square md:aspect-auto object-cover rounded-md max-h-[50vh] px-5" 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="true"
        >
          <source src="https://paris.dinerenblanc.com/images/concept/banner.mov" type="video/mp4" />
          <img 
            className="w-full aspect-square md:aspect-auto object-cover max-h-[50vh] px-5" 
            src="https://paris.dinerenblanc.com/images/home/hero.png" 
            alt="Dîner en Blanc Hero"
          />
        </video>
      </section>

      {/* Intro Section: Qu'est-ce que Le Diner en Blanc? */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black uppercase leading-tight tracking-tight">
              {t('about.what_is_deb')}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700 text-[13px] leading-relaxed font-medium"
          >
            <p>
              {t('about.intro_p1')}
            </p>
            <p>
              {t('about.intro_p2')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-full flex justify-center mb-32 opacity-20">
        <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center font-serif italic text-xs">B</div>
      </div>

      {/* Points Essentiels Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
              alt="Group of friends" 
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[13px] text-gray-800 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black uppercase mb-10">{t('about.essentials_title')}</h2>
            <p className="font-bold">{t('about.essentials_p1')}</p>
            
            <p>{t('about.member_login')}</p>
            
            <p>{t('about.new_fan_list')}</p>
            
            <div className="space-y-4 pt-4">
              <p className="font-bold">{t('about.phases_title')}</p>
              <ul className="list-none space-y-2">
                <li>{t('about.phase1')}</li>
                <li>{t('about.phase2')}</li>
                <li>{t('about.phase3')}</li>
              </ul>
            </div>

            <p><span className="font-bold">{t('about.secret_location')}</span></p>

            <p><span className="font-bold">{t('about.what_to_wear')}</span></p>

            <p><span className="font-bold">{t('about.what_to_bring')}</span></p>

            <p><span className="font-bold">{t('nav.faq')}</span></p>

            <p className="italic text-gray-500 text-[11px] pt-6 leading-relaxed">
              {t('about.info_note')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-full flex justify-center mb-32 opacity-20">
        <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center font-serif italic text-xs">B</div>
      </div>

      {/* A Quoi S'attendre Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 mb-24 md:mb-40 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-black uppercase mb-12 md:mb-20 tracking-wide">{t('about.expect_title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-brand-yellow overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt={t('about.rendezvous.title')} />
            </div>
            <h3 className="font-serif italic text-2xl text-brand-red mb-4">{t('about.rendezvous.title')}</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed max-w-xs text-center">
              {t('about.rendezvous.text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-brand-yellow overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt={t('about.arrival.title')} />
            </div>
            <h3 className="font-serif italic text-2xl text-brand-red mb-4">{t('about.arrival.title')}</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed max-w-xs text-center">
              {t('about.arrival.text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-brand-yellow overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt={t('about.napkins.title')} />
            </div>
            <h3 className="font-serif italic text-2xl text-brand-red mb-4 whitespace-nowrap">{t('about.napkins.title')}</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed max-w-xs text-center">
              {t('about.napkins.text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-brand-yellow overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt={t('about.dinner.title')} />
            </div>
            <h3 className="font-serif italic text-2xl text-brand-red mb-4">{t('about.dinner.title')}</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed max-w-xs text-center">
              {t('about.dinner.text')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="aspect-square rounded-full overflow-hidden border border-gray-100 shadow-sm"><img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Party" /></motion.div>
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="aspect-square rounded-full overflow-hidden border border-gray-100 shadow-sm"><img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Dinner" /></motion.div>
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="aspect-square rounded-full overflow-hidden border border-gray-100 shadow-sm"><img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Celebration" /></motion.div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="bg-gray-50 py-20 md:py-32 px-6 lg:px-40 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-black uppercase leading-[1.1] tracking-tight">
                {t('about.organize_title')}
              </h2>
              <div className="space-y-6 text-gray-800 text-[13px] leading-relaxed">
                <p>{t('about.organize_p1')}</p>
                <p>{t('about.organize_p2')}</p>
                <p>{t('about.organize_p3')}</p>
                <p>{t('about.organize_p4')}</p>
                <p>{t('about.organize_p5')}</p>
              </div>
              <button className="bg-brand-blue text-white px-10 py-4 font-bold text-xs uppercase tracking-widest rounded shadow-xl hover:bg-brand-red transition-all flex items-center gap-4 active:scale-95">
                {t('about.organize_btn')} <span>→</span>
              </button>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="h-[800px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Cityscape event" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
