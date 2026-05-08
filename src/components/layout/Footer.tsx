import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-gray-50/10 text-gray-900 py-12 px-6 lg:px-40 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Keep in Touch Row */}
        <div className="flex justify-end items-center gap-6 mb-8 text-gray-500">
          <span className="uppercase text-[13px] tracking-[0.2em] font-medium">{t('footer.keep_in_touch')}</span>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-200 mb-12" />

        {/* Main Footer Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          <div className="space-y-6">
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-bold text-gray-800">
              <Link to="/about" className="hover:text-brand-blue transition-colors">{t('nav.concept')}</Link>
              <Link to="/news" className="hover:text-brand-blue transition-colors">{t('nav.news')}</Link>
              <Link to="/media" className="hover:text-brand-blue transition-colors">{t('nav.gallery')}</Link>
              <Link to="/partenaire" className="hover:text-brand-blue transition-colors">{t('nav.partner')}</Link>
              <Link to="/histoire" className="hover:text-brand-blue transition-colors">{t('nav.history')}</Link>
              <Link to="/equipe" className="hover:text-brand-blue transition-colors">{t('nav.team')}</Link>
              <Link to="/faq" className="hover:text-brand-blue transition-colors">{t('nav.faq')}</Link>
              <Link to="/contact" className="hover:text-brand-blue transition-colors">{t('nav.contact')}</Link>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-gray-400 font-medium">
              <p>{t('footer.all_rights_reserved')}</p>
              <Link to="/politique-de-confidentialite" className="hover:text-black transition-colors">{t('footer.privacy_policy')}</Link>
              <Link to="/politique-relative-aux-cookies" className="hover:text-black transition-colors">{t('footer.cookie_policy')}</Link>
              <Link to="#" className="hover:text-black transition-colors">{t('footer.terms')}</Link>
            </div>
          </div>

          {/* Logo Section */}
          <div className="text-3xl font-serif font-bold tracking-tight uppercase flex items-center gap-1">
            DÎNER <span className="text-gray-400 italic lowercase font-normal text-xl lowercase opacity-60">en</span> BLANC
          </div>
        </div>
      </div>
    </footer>
  );
}
