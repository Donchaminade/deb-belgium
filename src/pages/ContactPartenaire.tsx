import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function ContactPartenaire() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="pt-40 pb-32 px-12 lg:px-40 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 w-full">
          {/* Header */}
          <div className="lg:col-span-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold uppercase tracking-tighter"
            >
              {t('partner_contact.title')}
            </motion.h1>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Left Column Fields */}
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                  <label className="text-lg text-gray-800 font-medium tracking-tight">{t('partner_contact.form.name')}</label>
                  <input 
                    type="text" 
                    placeholder={t('partner_contact.form.name_placeholder')}
                    className="border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-transparent placeholder:text-gray-300 placeholder:text-xs"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-lg text-gray-800 font-medium tracking-tight">{t('partner_contact.form.email')}</label>
                  <input 
                    type="email" 
                    placeholder={t('partner_contact.form.email_placeholder')}
                    className="border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-transparent placeholder:text-gray-300 placeholder:text-xs"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg text-gray-800 font-medium tracking-tight">{t('partner_contact.form.sponsor_question')}</label>
                  <select className="appearance-none border-b border-gray-300 py-3 text-xs text-gray-400 focus:outline-none focus:border-brand-red transition-colors bg-transparent cursor-pointer">
                    <option>{t('partner_contact.form.select_option')}</option>
                    <option>{t('partner_contact.form.yes')}</option>
                    <option>{t('partner_contact.form.no')}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg text-gray-800 font-medium tracking-tight">{t('partner_contact.form.category')}</label>
                  <select className="appearance-none border-b border-gray-300 py-3 text-xs text-gray-400 focus:outline-none focus:border-brand-red transition-colors bg-transparent cursor-pointer">
                    <option>{t('partner_contact.form.select_option')}</option>
                    <option>{t('partner_contact.form.gastronomy')}</option>
                    <option>{t('partner_contact.form.travel')}</option>
                    <option>{t('partner_contact.form.fashion')}</option>
                    <option>{t('partner_contact.form.other')}</option>
                  </select>
                </div>
              </div>

              {/* Right Column Fields */}
              <div className="flex flex-col gap-12 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <label className="text-lg text-gray-800 font-medium tracking-tight">{t('partner_contact.form.message')}</label>
                  <textarea 
                    placeholder={t('partner_contact.form.message_placeholder')}
                    className="border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-transparent placeholder:text-gray-300 placeholder:text-xs resize-none h-[280px]"
                  />
                </div>
                
                <div className="flex justify-start">
                  <button className="px-10 py-4 bg-brand-blue text-white rounded-full text-lg font-medium hover:bg-brand-red transition-all shadow-lg active:scale-95">
                    {t('partner_contact.form.submit')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Keep in Touch Divider */}
        <div className="mt-40 w-full flex flex-col items-center">
          <div className="w-full h-px bg-gray-200 mb-8" />
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
