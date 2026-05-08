import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gray-50 border-b border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-gray-400 uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">LE DÎNER EN BLANC</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">{t('cookie_page.title')}</h1>
          <div className="w-24 h-0.5 bg-black mx-auto" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-zinc lg:prose-lg"
          >
            <p className="text-gray-600 leading-relaxed text-lg mb-12">
              {t('cookie_page.intro')}
            </p>

            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-serif italic mb-6 text-black">{t('cookie_page.what_are_cookies.title')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('cookie_page.what_are_cookies.text')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif italic mb-6 text-black">{t('cookie_page.why_use_cookies.title')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('cookie_page.why_use_cookies.text')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif italic mb-6 text-black">{t('cookie_page.control_cookies.title')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('cookie_page.control_cookies.text')}
                </p>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-gray-100">
              <p className="text-gray-400 text-xs italic">
                Last updated: May 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
