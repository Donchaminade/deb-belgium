import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function JoinFanList() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row p-4 lg:p-8 gap-8 lg:gap-0">
      {/* Left Column: Video */}
      <div className="lg:w-1/2 relative h-[70vh] lg:h-[calc(100vh-64px)] overflow-hidden lg:rounded-2xl shadow-2xl">
        <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-tr-3xl rounded-bl-3xl shadow-lg">
           <div className="text-xl font-serif font-bold tracking-tighter">
             DÎNER <span className="text-gray-400 italic lowercase font-normal text-sm">en</span> BLANC
           </div>
        </div>
        
        <video 
          id="player" 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none" 
          poster="https://paris.dinerenblanc.com/images/fan/join_the_fan_list_vertical.png"
        >
          <source src="https://deb-asset-management.nyc3.cdn.digitaloceanspaces.com/assets/videos/join_the_fan_list_VERTICAL_WEB_VIEW.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right Column: Form */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-20 py-12 lg:py-0">
        <div className="max-w-md w-full">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center font-serif italic text-xl mb-4">B</div>
            <h1 className="text-3xl font-serif font-bold tracking-tighter text-center uppercase">
              LE DÎNER <span className="italic">en</span> BLANC
            </h1>
            <span className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mt-2">BELGIQUE</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-brand-blue leading-tight">
              {t('join_fan_list.title')}
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('join_fan_list.description')}
            </p>

            <div className="space-y-4">
              <h3 className="text-brand-blue font-bold text-md italic">{t('join_fan_list.want_to_be_there')}</h3>
              <p className="text-gray-600 text-sm">
                {t('join_fan_list.subtitle')}
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('join_fan_list.form.firstname')}</label>
                <input 
                  type="text" 
                  placeholder={t('join_fan_list.form.firstname_placeholder')}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('join_fan_list.form.lastname')}</label>
                <input 
                  type="text" 
                  placeholder={t('join_fan_list.form.lastname_placeholder')}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('join_fan_list.form.email')}</label>
                <input 
                  type="email" 
                  placeholder={t('join_fan_list.form.email_placeholder')}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue transition-colors text-sm"
                />
              </div>

              <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl shadow-lg hover:bg-brand-red transition-all active:scale-95">
                {t('join_fan_list.form.submit')}
              </button>
            </form>

            <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
              <p className="text-sm text-gray-600 text-center">
                {t('join_fan_list.form.already_account')} <Link to="#" className="text-brand-blue font-bold underline">{t('join_fan_list.form.rejoin_signin')}</Link>
              </p>
            </div>

            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
              {t('join_fan_list.form.legal')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
