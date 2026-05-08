import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t('faq_page.questions.q1'), a: t('faq_page.questions.a1') },
    { q: t('faq_page.questions.q2'), a: t('faq_page.questions.a2') },
    { q: t('faq_page.questions.q3'), a: t('faq_page.questions.a3') },
    { q: t('faq_page.questions.q4'), a: t('faq_page.questions.a4') },
  ];

  return (
    <div className="pt-40 pb-32 px-12 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <span className="text-gray-400 uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">{t('faq_page.info')}</span>
        <h1 className="text-6xl font-serif mb-10 italic">{t('nav.faq')}</h1>
        <div className="w-24 h-0.5 bg-black" />
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="border-b border-gray-100 pb-8 pt-6 group cursor-pointer"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg uppercase tracking-[0.2em] font-bold group-hover:text-brand-red transition-colors">
                {faq.q}
              </h3>
              {openIdx === idx ? <Minus className="w-4 h-4 text-brand-red" /> : <Plus className="w-4 h-4 text-gray-400" />}
            </div>
            {openIdx === idx && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-gray-500 border-l-2 border-brand-yellow pl-6 leading-relaxed text-sm tracking-wide uppercase max-w-2xl"
              >
                {faq.a}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
