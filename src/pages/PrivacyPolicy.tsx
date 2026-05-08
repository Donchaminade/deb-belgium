import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Mentions Légales</span>
          <h1 className="text-5xl font-serif text-black uppercase tracking-tight mb-8 leading-tight">Politique de confidentialité</h1>
          <div className="w-20 h-px bg-brand-red" />
        </motion.div>

        <div className="prose prose-zinc max-w-none space-y-12 text-gray-700 text-[13px] leading-relaxed font-serif tracking-wide border-t border-gray-100 pt-16">
          <section>
            <p className="italic text-gray-900 text-lg leading-relaxed mb-8">
              La plateforme du Dîner En Blanc International ("DEB INT"), qui consiste en des sites Internet, des services, des logiciels et des réseaux (“DEB”) vous offre l’option de télécharger et de partager du contenu multimédia et vous aide à participer à des événements sociaux organisés dans votre ville...
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black uppercase tracking-[0.2em] mb-6 font-sans">TABLE DES MATIÈRES</h2>
            <ul className="list-decimal pl-5 space-y-2 uppercase text-[11px] font-bold tracking-widest text-gray-600 font-sans">
              <li>Collecte de l’information</li>
              <li>Témoins de connexion (cookies)</li>
              <li>Utilisation de vos renseignements personnels</li>
              <li>Autres renseignements</li>
              <li>Transfert de données</li>
              <li>Sécurité de vos renseignements personnels</li>
              <li>Protection de la vie privée des enfants</li>
              <li>Modifications de la politique</li>
              <li>Vos droits</li>
              <li>Sites Internet de tiers</li>
              <li>Mise à jour de l’information</li>
              <li>Transfert commercial</li>
              <li>Coordonnées</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(1) Collecte de l’information</h3>
            <p>DEB INT est le seul propriétaire des renseignements recueillis sur ce site Internet. Nous ne partagerons, ne vendrons ni n’échangerons ces informations à des tiers d’aucune autre façon que celle décrite dans cette Politique de confidentialité. Nous pourrions recueillir et stocker les types de données et de renseignements suivants :</p>
            <div className="pl-6 space-y-4">
              <p className="font-bold">Informations recueillies automatiquement au cours de votre visite de ce site Internet (en tant que visiteur ou membre) :</p>
              <ul className="list-disc pl-5">
                <li>des informations sur votre ordinateur et sur vos visites et votre utilisation de ce site Internet, telles que votre adresse IP, votre situation géographique, le type de navigateur utilisé, des informations sur votre ordinateur...</li>
                <li>des informations concernant des transactions que vous effectuez avec nous ou concernant ce site Internet...</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(2) Témoins de connexion (cookies)</h3>
            <p>Notre site Internet utilise des témoins. Un témoin est un fichier texte envoyé par un serveur Web à un navigateur Internet, et qui est stocké par le navigateur. Ce fichier texte est ensuite renvoyé au serveur à chaque fois que le navigateur demande à accéder à une page du serveur. Ceci permet au serveur d’identifier le navigateur et de vous offrir un service personnalisé.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(3) Utilisation de vos renseignements personnels</h3>
            <p>Les renseignements personnels soumis sur ce site Internet peuvent être utilisés aux fins précisées dans cette politique de confidentialité ou dans les sections appropriées du site Internet. Nous pourrions utiliser vos renseignements personnels pour le bon fonctionnement du site Internet, améliorer votre expérience de navigation, vous permettre d’accéder aux services disponibles...</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(4) Autres renseignements</h3>
            <p>En plus des renseignements raisonnablement nécessaires aux fins identifiées ailleurs dans cette politique de confidentialité, nous pourrions divulguer des renseignements sur vous dans les limites exigées par la loi...</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(5) Transferts de données</h3>
            <p>Les renseignements que nous recueillons pourraient être stockés, traités et transférés dans n’importe lequel des pays dans lesquels nous opérons afin de nous permettre d’utiliser l’information conformément à cette politique de confidentialité.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(6) Sécurité de vos renseignements personnels</h3>
            <p>Nous prendrons des précautions techniques et organisationnelles raisonnables pour prévenir la perte, le mauvais usage ou l’altération de vos renseignements personnels. Nous stockons tous les renseignements personnels que vous fournissez sur nos serveurs sécurisés.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(7) Protection de la vie privée des enfants</h3>
            <p>Si vous êtes âgé de moins de 18 ans, vous n’êtes pas autorisé à accéder au site Internet. Nous ne recueillons ni ne conservons de renseignements permettant l’identification d’enfants de moins de 18 ans.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(8) Modifications de la politique</h3>
            <p>Nous pourrions mettre cette politique à jour de temps en temps en publiant une nouvelle version sur notre site Internet. Nous vous recommandons de vérifier cette page régulièrement.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(9) Vos droits</h3>
            <p>Vous pouvez exiger de nous que nous vous fournissions tous les renseignements personnels que nous détenons à votre sujet. Vous pouvez à n’importe quel moment nous demander de ne pas traiter vos données personnelles à des fins marketing.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(10) Sites Internet de tiers</h3>
            <p>Nous pourrions fournir des liens vers des sites Internet de tiers. Puisque nous n’avons aucun contrôle sur les politiques et pratiques de ces tiers, il vous incombe d’examiner leur politique de confidentialité.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(11) Mise à jour de l’information</h3>
            <p>Veuillez s’il vous plait nous informer si les renseignements personnels que nous détenons à votre sujet doivent être corrigés ou mis à jour.</p>
          </section>

          <section className="space-y-6">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(12) Transfert commercial</h3>
            <p>Nous pouvons utiliser et divulguer vos renseignements personnels dans le cadre du financement, de la vente ou de toute autre transaction commerciale proposée ou réelle portant sur une partie ou la totalité de nos activités ou de nos actifs.</p>
          </section>

          <section className="space-y-6 bg-brand-gray-50/50 p-12 rounded-xl border border-gray-100">
            <h3 className="text-md font-bold text-black uppercase tracking-widest font-sans">(13) Coordonnées</h3>
            <p>Si vous avez des questions concernant cette politique de confidentialité ou sur notre traitement de vos renseignements personnels, veuillez nous envoyer un courriel à <a href="mailto:privacypolicy@dinerenblanc.com" className="text-brand-red font-bold underline">privacypolicy@dinerenblanc.com</a> ou par la poste à DEB Privacy, 5333 Casgrain #1206, Montréal, Québec H2T 1X3.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
