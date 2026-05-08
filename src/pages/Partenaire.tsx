import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Partenaire() {
  const { t } = useTranslation();

  const sections = [
    {
      id: "01",
      title: "GASTRONOMY",
      description: "Diner en Blanc guests go all out to plan gourmet meals and beautiful tablescape décor, often as part of friendly \"Top Chef\" or \"Art of the Table\" contests.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
      reverse: false
    },
    {
      id: "02",
      title: "TRAVEL",
      description: "Our guests love to travel! They've benefited greatly from our partners who have offered airline promotions, exclusive hotel rates, and chances to win other luxury experiences.",
      image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
      reverse: true
    },
    {
      id: "03",
      title: "FASHION",
      description: "Guests dress to impress at every Diner en Blanc! With everyone dressed in white from head to toe, silver, gold, and nude accents blended in for a little extra glam.",
      image: "https://images.unsplash.com/photo-1539109132314-d4a8c62e40dc?auto=format&fit=crop&q=80&w=800",
      reverse: false
    }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* video Hero section */}
      <section className="relative px-6 lg:px-40 pt-10">
        <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video 
            className="w-full h-auto max-h-[70vh] object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://paris.dinerenblanc.com/images/concept/banner.mov" type="video/mp4" />
            <img src="https://paris.dinerenblanc.com/images/home/hero.png" alt="Le Dîner en Blanc Banner" />
          </video>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight leading-tight">
              PARTNER WITH <br /> LE DINER EN BLANC
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-gray-500 text-sm leading-relaxed tracking-wide font-medium">
              Le Diner en Blanc is all about making memories and connections across a global network and in the realms of <span className="text-black font-bold">Gastronomy, Travel, and Fashion</span>. It's where local communities engage with brands that reflect our values and style, whether by offering sampling opportunities with "joie de vivre," running luxury contests or demonstrations by celebrity chefs or influencers, and always creating visually stunning backdrops for guest and partners alike. The possibilities are endless!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Small DB Logo Divider */}
      <div className="flex justify-center py-10">
        <div className="relative w-12 h-20 border-2 border-gray-200 rounded-[50%] flex items-center justify-center">
           <div className="relative text-2xl font-serif font-bold flex items-center justify-center text-gray-300">
               <span className="translate-x-1">B</span>
               <span className="absolute -translate-x-1 opacity-80">D</span>
           </div>
        </div>
      </div>

      {/* Sections Grid */}
      <section className="bg-brand-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-40 space-y-40">
          {sections.map((section) => (
            <div 
              key={section.id}
              className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden bg-white shadow-xl group"
              >
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <span className="text-gray-400 text-[10px] font-bold tracking-[0.4em] mb-4">
                  ({section.id})
                </span>
                <h2 className="text-3xl font-serif font-bold uppercase tracking-tight mb-8">
                  {section.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed tracking-wide mb-10 max-w-md">
                  {section.description}
                </p>
                <button className="px-10 py-3.5 border border-brand-yellow text-brand-blue rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                  Learn More
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-40 bg-white text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif italic mb-10">{t('partner_page.cta_title')}</h3>
          <p className="max-w-xl mx-auto text-gray-500 text-xs uppercase font-bold tracking-[0.4em] leading-loose mb-12">
            {t('partner_page.cta_description')}
          </p>
          <Link 
            to="/contact-partenaire"
            className="inline-block px-16 py-5 bg-brand-blue text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-red transition-all shadow-xl active:scale-95"
          >
             {t('partner_page.cta_btn')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
