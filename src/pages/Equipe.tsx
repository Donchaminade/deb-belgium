import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Equipe() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "SANDY SAFI",
      role: t('team.members.sandy.role'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      description: t('team.members.sandy.description')
    },
    {
      name: "CHANTAL BLANCHARD",
      role: t('team.members.chantal.role'),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      description: t('team.members.chantal.description')
    },
    {
      name: "LUCIA SACCO",
      role: t('team.members.lucia.role'),
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      description: t('team.members.lucia.description')
    }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <span className="text-gray-400 uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">{t('team.organization')}</span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-4">{t('team.title')}</h1>
          <div className="w-24 h-1 bg-brand-yellow mx-auto" />
        </motion.div>
      </section>

      {/* Team Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 py-24 mb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Side Title - Desktop Only */}
          <div className="lg:w-1/4 hidden lg:block">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif leading-tight uppercase font-bold sticky top-40"
            >
              {t('team.international_team')}
            </motion.h2>
          </div>

          {/* Members Grid/List */}
          <div className="lg:w-3/4 flex flex-col gap-32">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row gap-12 group"
              >
                {/* Image Container */}
                <div className="md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0 relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-95"
                  />
                  <div className="absolute inset-0 border-[15px] border-white/30 pointer-events-none group-hover:border-white/10 transition-all duration-500" />
                </div>

                {/* Info Container */}
                <div className="md:w-1/2 flex flex-col pt-4">
                  <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] mb-3 block">
                    {member.role}
                  </span>
                  <h3 className="text-3xl font-serif font-bold mb-8 uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <div className="w-12 h-px bg-gray-200 mb-8" />
                  <p className="text-gray-500 text-sm leading-relaxed tracking-wide font-light whitespace-pre-line text-justify">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Bottom Section */}
      <section className="h-64 bg-brand-gray-50 flex items-center justify-center relative border-t border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
          <span className="text-[20rem] font-serif font-bold text-black border-none leading-none absolute -top-20 -left-20">D</span>
          <span className="text-[20rem] font-serif font-bold text-black border-none leading-none absolute -bottom-20 -right-20">B</span>
        </div>
        <div className="text-center z-10">
          <p className="text-xs uppercase tracking-[0.5em] font-bold text-gray-400 mb-6">{t('team.join_btn')}</p>
          <button className="text-brand-blue border-b-2 border-brand-yellow pb-2 uppercase tracking-[0.4em] text-[10px] font-bold hover:text-brand-red hover:border-brand-red transition-all active:translate-y-px">
            {t('team.volunteer_btn')}
          </button>
        </div>
      </section>
    </div>
  );
}
