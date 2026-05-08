import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-32 px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <span className="text-gray-400 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">{t('contact_page.get_in_touch')}</span>
        <h1 className="text-6xl md:text-8xl font-serif mb-10 italic">{t('nav.contact')}</h1>
        <div className="w-24 h-0.5 bg-black" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="uppercase text-[9px] font-bold tracking-[0.3em] text-gray-400">{t('contact_page.form.name')}</label>
                <input type="text" className="border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors bg-transparent" />
              </div>
              <div className="flex flex-col gap-4">
                <label className="uppercase text-[9px] font-bold tracking-[0.3em] text-gray-400">{t('contact_page.form.email')}</label>
                <input type="email" className="border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors bg-transparent" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase text-[9px] font-bold tracking-[0.3em] text-gray-400">{t('contact_page.form.subject')}</label>
              <input type="text" className="border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors bg-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="uppercase text-[9px] font-bold tracking-[0.3em] text-gray-400">{t('contact_page.form.message')}</label>
              <textarea rows={4} className="border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors bg-transparent resize-none" />
            </div>
            <button className="px-16 py-5 bg-brand-blue text-white uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-brand-red transition-all w-full md:w-auto shadow-lg active:scale-95">
              {t('contact_page.form.submit')}
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="flex items-start gap-8">
            <div className="w-px h-12 bg-brand-yellow mt-1" />
            <div>
              <h4 className="uppercase text-[10px] font-bold tracking-[0.4em] mb-4 text-black">{t('contact_page.info.press_relations')}</h4>
              <p className="text-gray-500 text-sm tracking-widest uppercase">press@dinerenblanc.com</p>
            </div>
          </div>
          <div className="flex items-start gap-8">
            <div className="w-px h-12 bg-brand-yellow mt-1" />
            <div>
              <h4 className="uppercase text-[10px] font-bold tracking-[0.4em] mb-4 text-black">{t('contact_page.info.partnerships')}</h4>
              <p className="text-gray-500 text-sm tracking-widest uppercase">partners@dinerenblanc.com</p>
            </div>
          </div>
          <div className="flex items-start gap-8">
            <div className="w-px h-12 bg-brand-yellow mt-1" />
            <div>
              <h4 className="uppercase text-[10px] font-bold tracking-[0.4em] mb-4 text-black">{t('contact_page.info.headquarters')}</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed tracking-widest uppercase">
                {t('contact_page.info.brussels_belgium')}<br />
                {t('contact_page.info.grand_place')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
