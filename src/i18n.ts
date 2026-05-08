import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        concept: "About",
        news: "News",
        gallery: "Gallery",
        partner: "Partner",
        history: "History",
        team: "Team",
        faq: "FAQ",
        contact: "Contact us",
        signin: "Sign In",
        join_fan_list: "Join the Fan List - Belgium",
        change_city: "Looking for another city? Select below.",
        select_language: "Select Language",
        help: "Help",
      },
      hero: {
        title: "Le Dîner en Blanc",
        location: "Belgium",
        subtitle: "The world's most elegant secret dinner",
        discover: "Discover More",
      },
      home: {
        vivez_inattendu: "Experience the Unexpected",
        discover_concept: "Explore the Concept",
        spirit: "The Spirit",
        spirit_of_belgium: "The Belgian Spirit",
        spirit_title: "Beyond a dinner, an ephemeral experience where elegance meets mystery.",
        spirit_text: "Le Dîner en Blanc evokes an era when nobility gathered to celebrate the art of living. Today, thousands of people, all in white, converge on a secret location revealed only at the eleventh hour.",
        our_history_btn: "Our History",
        annual_rendezvous: "Annual Gathering",
        annual_description: "An ephemeral celebration where friendship and elegance meet under the stars.",
        view_gallery_2024: "Experience the Magic: 2024 Gallery",
        philosophy_subtitle: "An event that transports you to another world.",
        philosophy_text: "A grand picnic where thousands, dressed entirely in white, gather in a secret public space to share a gourmet meal.",
        city_view: "The City",
        photos: "Photos",
        videos: "Videos",
        history: "History",
        concept: "The Concept",
        stats: {
          members: "Passionate Members",
          across_city: "across the city",
          cities_world: "Cities Worldwide",
          join_movement: "Join the movement",
          tradition: "A Living Tradition",
          born_bagatelle: "Born in the Jardins de Bagatelle",
        }
      },
      about: {
        what_is_deb: "WHAT IS LE DÎNER EN BLANC?",
        intro_p1: "Le Dîner en Blanc is far more than an event—it’s a cultural movement. It brings friends together to celebrate life, gastronomy, fashion, and community, all with a dash of mystery and a generous dose of spontaneity.",
        intro_p2: "Elegantly dressed in white, guests converge on a secret location to share a large-scale, chic picnic. Throughout the evening they dine, dance, and reconnect with life’s refined pleasures, creating new traditions amidst the beauty of the city and the magic of the night.",
        essentials_title: "ESSENTIALS TO KNOW",
        essentials_p1: "Curious about how to join? It’s simple!",
        member_login: "Already a member? Select \"Participate in Le Dîner en Blanc\" on your city's page or \"Login\" to access your account for exclusive details.",
        new_fan_list: "First time attending? Join the Fan List (Phase 3) to receive updates and your invitation when tickets go on sale.",
        phases_title: "Registration occurs in three distinct phases:",
        phase1: "Phase 1 – Returning members and friends of the organization",
        phase2: "Phase 2 – Guests sponsored by Phase 1 members",
        phase3: "Phase 3 – Those registered on the Fan List",
        secret_location: "Access to the Secret Location – Guests meet at designated departure points throughout the city. You will choose your preferred point during registration.",
        what_to_wear: "The Dress Code – All white, without exception. While gold, silver, or neutral accents are permitted, your attire must remain predominantly white.",
        what_to_bring: "Provisions – By tradition, guests bring a square folding table, two white chairs*, a white tablecloth, white napkins, a full table setting for two, and a gourmet picnic meal...",
        info_note: "* In many cities, table and chair rentals are available through the ticket purchase or the online shop.",
        expect_title: "WHAT TO EXPECT",
        rendezvous: { title: "The Gathering", text: "Guests meet at secret assembly points across the city... unaware of their final destination until the very last moment." },
        arrival: { title: "The Arrival", text: "A sea of white descends upon the secret location. In a choreography of organized chaos, thousands set up their tables with mounting excitement." },
        napkins: { title: "The Napkin Wave", text: "Once settled, guests wave their white napkins in unison to signal the official start of the dinner." },
        dinner: { title: "The Dinner", text: "Savor a carefully prepared meal and embrace the magic of the night alongside friends both old and new." },
        organize_title: "BRING LE DÎNER EN BLANC TO YOUR CITY",
        organize_p1: "Celebrate your city’s unique style. As Le Dîner en Blanc continues to grow, we are always looking for passionate hosts to connect communities worldwide.",
        organize_p2: "Organizing a large-scale event like Le Dîner en Blanc requires a high level of commitment and effort. We typically require a minimum of 6 months of preparation to help you plan and execute your event flawlessly. It is important to know that Dîner en Blanc International does not charge local organizers for joining its network or for using the registered trademark.",
        organize_p3: "However, organizers must accept the responsibilities associated with hosting such an event and commit to following the guidelines and instructions designed to preserve the spirit and values of Le Dîner en Blanc.",
        organize_p4: "To apply for the organization of a Dîner en Blanc event in your city, please click the button below.",
        organize_p5: "Dîner en Blanc International will schedule a conference call with all qualified teams to continue the application process and provide more information on organizing the event. Please note that only applications containing all the required information will be considered. We look forward to meeting you!",
        organize_btn: "Apply to Organize",
      },
      history: {
        heritage: "Our Heritage",
        title: "History",
        phenomenon_title: "A Global Culinary Phenomenon",
        p1: "Le Dîner en Blanc began in Paris, France, in 1988 with a simple yet elegant idea: gathering friends and friends of friends for a sophisticated outdoor picnic.",
        p2: "Today, Le Dîner en Blanc - Belgium honors the country's most majestic locales, creating exceptional moments of grace and elegance.",
        p3: "An idea this magnificent couldn’t stay secret for long. Le Dîner en Blanc arrived in Montreal in 2009, followed by its American debut in New York City in 2011—an event that left the world eager for a seat at the table.",
        p4: "That memorable night led to the founding of Le Dîner en Blanc International in 2012, sparking a global culinary phenomenon shared by thousands of guests in over 120 cities worldwide.",
        timeline_title: "TIMELINE",
        quote: "\"While each city adds its own local flair, traditions, and flavor, the universal appeal of the concept lies in its shared values and the collective desire for beauty.\"",
        events: {
          b1988: "Le Dîner en Blanc arrives in Belgium! Friends gather for the first time to celebrate elegance.",
          m2009: "Montreal becomes the first city in North America to host Le Dîner en Blanc.",
          ny2011: "Le Dîner en Blanc debuts in New York City, igniting a global fascination with the secret dinner.",
          s2012: "Asia hosts its first Dîner en Blanc, confirming the international reach of the concept.",
          a2018: "Ivory Coast celebrates elegance in style with a memorable edition under the palms.",
        }
      },
      media: {
        title_prefix: "BELGIUM",
        title_suffix: "GALLERY",
        description: "Le Dîner en Blanc always offers a stunning spectacle. Explore our most memorable moments through the years.",
        year: "YEAR",
        all_years: "All Years",
        photos: "PHOTOS",
        videos: "VIDEOS",
        view_photo: "View Photo",
        watch_youtube: "Watch on YouTube",
        detail_text: "Relive the magic of this exceptional event through a selection of our most beautiful captured moments.",
        close: "Close Gallery",
      },
      partner_page: {
        cta_title: "Interested in a partnership?",
        cta_description: "Join us in creating exceptional moments and making history in Belgium.",
        cta_btn: "Contact our team",
      },
      team: {
        title: "Team",
        organization: "The Organization",
        international_team: "INTERNATIONAL TEAM",
        join_btn: "Join the adventure",
        volunteer_btn: "Become a volunteer",
        members: {
          sandy: {
            role: "EXECUTIVE DIRECTOR",
            description: "From her beginnings on stage, Sandy has nurtured a burning passion for performance and entertainment—a passion that has led her across 15 countries and allowed her to transform every event into an unforgettable experience. From designing and directing large-scale concerts in Dubai to collaborating with prestigious institutions such as the Los Angeles Opera, the Casino de Paris, and the Gran Teatre del Liceu in Barcelona, Sandy has made her unique mark. The extraordinary adventure of Le Dîner en Blanc took flight in 2011 when she leveraged her network and expertise to organize the first North American edition."
          },
          chantal: {
            role: "PUBLIC RELATIONS SPECIALIST",
            description: "As a press officer in the entertainment world, Chantal had the opportunity to travel the world for several years with Cirque du Soleil. Her wonderful years on the road allowed her to satisfy her curiosity for food, wine, cocktails, fashion, urban life, architecture, design, and more. Her professional background and passion for the finer things in life predestined her to join the Dîner en Blanc International team."
          },
          lucia: {
            role: "DIRECTOR OF ACCOUNTING AND HUMAN RESOURCES",
            description: "Lucia brings over 20 years of administrative and accounting experience to Dîner en Blanc International. She has worked in the events industry since 2007, where she served as accounting director and office manager. 'I feel privileged to combine my organizational skills and my passion for events by continuing my career at Dîner en Blanc International,' says Lucia."
          }
        }
      },
      faq_page: {
        info: "Information",
        questions: {
          q1: "What is Le Dîner en Blanc?",
          a1: "It all started in Paris over 30 years ago when François Pasquier invited a few friends to a picnic in the Bois de Boulogne, asking them to dress in white so they could find each other easily. Today, it is a worldwide phenomenon.",
          q2: "How do I register?",
          a2: "Registration happens through sponsorship by an existing member or via the waiting list on our official website. Previous years' members are given priority in Phase 1.",
          q3: "Why everyone in white?",
          a3: "For the elegance, the unity, and the visual magic it creates in public spaces. It is a powerful symbol of our community and spirit.",
          q4: "Is the location secret?",
          a4: "Yes, the location is only revealed to participants minutes before the event starts through group leaders. The mystery is part of the magic!",
        }
      },
      contact_page: {
        get_in_touch: "Get in Touch",
        form: {
          name: "Full Name",
          email: "Professional Email",
          subject: "Subject",
          message: "Message",
          submit: "Send Message",
        },
        info: {
          press_relations: "Press Relations",
          partnerships: "Partnerships",
          headquarters: "Headquarters",
          brussels_belgium: "Brussels, Belgium",
          grand_place: "Grand-Place",
        }
      },
      partner_contact: {
        title: "CONTACT US",
        form: {
          name: "Name",
          name_placeholder: "Enter your name",
          email: "Email",
          email_placeholder: "Enter your email",
          sponsor_question: "Would you like to sponsor an event?",
          select_option: "Select Option",
          yes: "Yes",
          no: "No",
          category: "Sponsorship category",
          gastronomy: "Gastronomy",
          travel: "Travel",
          fashion: "Fashion",
          other: "Other",
          message: "Message",
          message_placeholder: "Enter your message",
          submit: "Send",
        }
      },
      cookie_page: {
        title: "Cookie Policy",
        intro: "This Cookie Policy explains how Le Dîner en Blanc uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
        what_are_cookies: {
          title: "What are cookies?",
          text: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."
        },
        why_use_cookies: {
          title: "Why do we use cookies?",
          text: "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as \"essential\" or \"strictly necessary\" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Sections. Third parties serve cookies through our Website for advertising, analytics, and other purposes."
        },
        control_cookies: {
          title: "How can I control cookies?",
          text: "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted."
        }
      },
      footer: {
        keep_in_touch: "Stay Connected",
        all_rights_reserved: "All rights reserved – Le Dîner en Blanc",
        privacy_policy: "Privacy Policy",
        cookie_policy: "Cookie Policy",
        terms: "Terms and Conditions",
      },
      join_fan_list: {
        title: "Join Le Dîner en Blanc – Belgium",
        description: "Much more than an event, Le Dîner en Blanc is an unforgettable collective picnic. Dressed in white, guests gather in a last-minute secret location for an evening of gastronomy, music, and pure magic.",
        want_to_be_there: "Will you join us?",
        subtitle: "Join the Fan List to ensure you don’t miss out on ticket sales.",
        form: {
          firstname: "First Name",
          firstname_placeholder: "Enter your first name",
          lastname: "Last Name",
          lastname_placeholder: "Enter your last name",
          email: "Email Address",
          email_placeholder: "Enter your email address",
          submit: "Join the Fan List - Belgium",
          already_account: "Already have an account?",
          rejoin_signin: "Sign in to join.",
          legal: "By submitting, you agree to our Terms and Conditions and Privacy Policy.",
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        concept: "À Propos",
        news: "Nouvelles",
        gallery: "Galerie",
        partner: "Partenaire",
        history: "Histoire",
        team: "Équipe",
        faq: "FAQ",
        contact: "Contactez-nous",
        signin: "Se connecter",
        join_fan_list: "Rejoindre la liste des fans de Belgique",
        change_city: "Changer de ville?: sélectionnez ci-dessous.",
        select_language: "Choisir la langue",
        help: "Aide",
      },
      hero: {
        title: "Le Dîner en Blanc",
        location: "Belgique",
        subtitle: "Le dîner secret le plus élégant du monde",
        discover: "Découvrir",
      },
      home: {
        vivez_inattendu: "Vivez l'Inattendu...",
        discover_concept: "Découvrez le concept",
        spirit: "L'Esprit",
        spirit_of_belgium: "L'Esprit de la Belgique",
        spirit_title: "Plus qu'un dîner, une expérience éphémère où l'élégance rencontre le mystère.",
        spirit_text: "Le Dîner en Blanc rappelle les temps anciens où la noblesse se réunissait pour célébrer la vie. Aujourd'hui, des milliers de personnes, tout de blanc vêtues, se retrouvent dans un lieu public dont le secret est gardé jusqu'au dernier moment.",
        our_history_btn: "Notre histoire",
        annual_rendezvous: "Rendez-vous Annuel",
        annual_description: "Une célébration éphémère où l'amitié et l'élégance se rencontrent sous les étoiles.",
        view_gallery_2024: "Entrez dans la magie : Galerie 2024",
        philosophy_subtitle: "Le Dîner en Blanc est un événement qui nous transporte dans un autre monde.",
        philosophy_text: "Un pique-nique d’envergure où des milliers de personnes, toutes vêtus de blanc, se rassemblent dans un espace public secret pour partager un repas gastronomique.",
        city_view: "La Ville",
        photos: "Photos",
        videos: "Vidéos",
        history: "Histoire",
        concept: "Le Concept",
        stats: {
          members: "Membres Passionnés",
          across_city: "à travers la ville",
          cities_world: "Villes dans le Monde",
          join_movement: "Rejoignez le mouvement",
          tradition: "Une Tradition",
          born_bagatelle: "Née aux Jardins de Bagatelle",
        }
      },
      about: {
        what_is_deb: "QU’EST-CE QUE “LE DINER EN BLANC” ?",
        intro_p1: "Le Diner en Blanc, c’est bien plus qu’un simple événement! C’est un mouvement culturel qui permet aux amis de célébrer ensemble leur passion pour la vie, la gastronomie, la mode et la communauté avec une pincée de mystère et une grande dose de spontanéité.",
        intro_p2: "Élégamment vêtus de blanc, les invités convergent vers un lieu tenu secret pour partager un pique-nique chic d’envergure. Au fil de la soirée, ils savourent un repas, dansent, renouent avec les plaisirs raffinés de la vie et créent de nouvelles traditions, tout en admirant la beauté de leur ville et la magie de la nuit.",
        essentials_title: "POINTS ESSENTIELS À SAVOIR",
        essentials_p1: "Comment participer - rien de plus simple !",
        member_login: "Déjà membre ? Cliquez sur « Participer au Dîner en Blanc » sur la page de votre ville ou sur « Se connecter » pour accéder à votre compte. Tous les détails exclusifs vous y attendent.",
        new_fan_list: "Nouvelle participation ? Inscrivez-vous à la Liste Fan (Phase 3) pour recevoir les mises à jour et votre invitation lors de la mise en vente des billets.",
        phases_title: "Les inscriptions se font en trois phases :",
        phase1: "Phase 1 – Les membres de l’année précédente et/ou amis de l’équipe organisatrice",
        phase2: "Phase 2 – Les personnes parrainées par les membres de la Phase 1",
        phase3: "Phase 3 – Les personnes inscrites sur la Liste Fan",
        secret_location: "L’accès au lieu secret – Les invités se rejoignent à des points de départ désignés un peu partout dans la ville. Les options apparaissent lors de l’inscription.",
        what_to_wear: "Quoi porter – Tout en blanc, bien sûr ! Les accents dorés, argentés ou dans des tons chair/neutres sont permis, mais gardez l’ensemble principalement en blanc !",
        what_to_bring: "Quoi apporter – Selon la tradition du Dîner en Blanc, chaque invité doit apporter une table carrée pliante et deux chaises blanches*, une nappe et des serviettes en tissu blanc, le couvert pour deux, un repas gastronomique*...",
        info_note: "* Dans plusieurs villes, il est possible de louer table et chaises, soit inclus dans le prix du billet, soit à la boutique en ligne.",
        expect_title: "À QUOI S’ATTENDRE",
        rendezvous: { title: "Le rendez-vous", text: "Les invités se retrouvent aux points de rassemblement de la ville... personne ne sait où ils vont se diriger..." },
        arrival: { title: "L'arrivée", text: "Une vague humaine, toute vêtue de blanc, arrive au lieu tenu secret... des milliers d’invités installent leurs tables avec détermination." },
        napkins: { title: "L'agitation des serviettes", text: "Une fois tous bien installés, les invités agitent tous en chœur leurs serviettes blanches dans les airs pour signaler que le début du Diner." },
        dinner: { title: "Le Dîner", text: "Les invités savourent leur repas soigneusement préparé et profitent de cet instant magique en compagnie de nouveaux et d’anciens amis." },
        organize_title: "COMMENT ORGANISER UN ÉVÉNEMENT DINER EN BLANC DANS MA VILLE ?",
        organize_p1: "Célébrez votre singularité avec style ! Alors que Le Diner en Blanc continue de grandir et de connecter les communautés à travers le monde...",
        organize_p2: "Organiser un événement de grande envergure comme Le Diner en Blanc demande beaucoup d'engagement et de travail. Nous exigeons généralement un minimum de 6 mois de préparation pour vous aider à organiser et à réaliser votre événement. Il est important de savoir que Diner en Blanc International ne facture pas les organisateurs locaux pour faire partie de son réseau ou pour utiliser la marque déposée.",
        organize_p3: "Cependant, les organisateurs doivent accepter les responsabilités associées à la prise en charge d'un tel événement et s'engager à respecter les consignes et les directives destinées à préserver l'esprit et les valeurs du Diner en Blanc.",
        organize_p4: "Pour postuler pour l'organisation d'un événement Diner en Blanc dans votre ville, veuillez cliquer sur le bouton ci-bas.",
        organize_p5: "Diner en Blanc International planifiera une conférence téléphonique avec toutes les équipes qualifiées pour poursuivre le processus de candidature et offrir plus d'informations sur l'organisation de l'événement. Veuillez noter que seules les candidatures contenant toutes les informations requises seront prises en considération. Nous avons hâte de vous rencontrer !",
        organize_btn: "Je veux organiser un Dîner en Blanc !",
      },
      history: {
        heritage: "Notre Héritage",
        title: "Histoire",
        phenomenon_title: "Phénomène culinaire mondial",
        p1: "Le Dîner en Blanc a commencé à Paris, en France, en 1988 avec une idée simple : rassembler des amis et des amis d'amis pour une soirée chic de partage.",
        p2: "Aujourd'hui, Le Dîner en Blanc de Belgique fait honneur aux lieux les plus majestueux du pays, créant des moments d'exception et d'élégance.",
        p3: "Mais rien d'aussi magnifique ne peut rester caché du reste du monde pendant très longtemps... Le Dîner en Blanc est arrivé dans la charmante ville canadienne de Montréal en 2009, puis à New York City en 2011 pour une première américaine qui a rendu le monde entier brûlant d'impatience d'avoir une place à table.",
        p4: "Cette nuit mémorable a donné naissance à Le Dîner en Blanc International en 2012 et a suscité un phénomène culinaire mondial apprécié par des milliers d'invités dans plus de 120 villes à travers le monde.",
        timeline_title: "CHRONOLOGIE",
        quote: "\"Bien que chacune ait sa propre touche locale, ses traditions, ses cuisines et même ses langues, le charme et la popularité du concept proviennent des valeurs et des désirs partagés.\"",
        events: {
          b1988: "Le Dîner en Blanc s'installe en Belgique ! Des amis se réunissent pour la première fois pour célébrer l'élégance.",
          m2009: "Montréal devient la première ville d'Amérique du Nord à accueillir Le Dîner en Blanc.",
          ny2011: "Le Dîner en Blanc est présenté pour la première fois à New York. L'événement déclenche l'engouement du monde entier !",
          s2012: "L'Asie accueille son premier Dîner en Blanc, confirmant le rayonnement international du concept.",
          a2018: "La Côte d'Ivoire célèbre l'élégance à l'ivoirienne, une édition mémorable sous les palmiers.",
        }
      },
      media: {
        title_prefix: "BELGIQUE",
        title_suffix: "GALERIE",
        description: "Le Dîner en Blanc offre toujours un spectacle éblouissant. Jetez un œil aux moments les plus mémorables au fil des ans.",
        year: "ANNÉE",
        all_years: "Toutes les années",
        photos: "PHOTOS",
        videos: "VIDÉOS",
        view_photo: "Voir la photo",
        watch_youtube: "Regarder sur YouTube",
        detail_text: "Revivez les moments mémorables de cet événement exceptionnel à travers une sélection de nos plus beaux instants capturés.",
        close: "Fermer la galerie",
      },
      partner_page: {
        cta_title: "Intéressé par un partenariat ?",
        cta_description: "Rejoignez-nous pour créer des moments d'exception et marquer l'histoire de la Belgique.",
        cta_btn: "Contactez notre équipe",
      },
      team: {
        title: "Équipe",
        organization: "L'Organisation",
        international_team: "ÉQUIPE INTERNATIONALE",
        join_btn: "Rejoindre l'aventure",
        volunteer_btn: "Devenir un bénévole",
        members: {
          sandy: {
            role: "DIRECTRICE GÉNÉRALE",
            description: "Depuis ses débuts sur scène, Sandy a nourri une passion ardente pour le spectacle et le divertissement, une passion qui l'a menée à travers 15 pays et lui a permis de transformer chaque événement en une expérience inoubliable."
          },
          chantal: {
            role: "SPÉCIALISTE DES RELATIONS PUBLIQUES",
            description: "En tant qu'attachée de presse dans le milieu du spectacle, Chantal a eu la chance de parcourir le monde pendant plusieurs années pour le Cirque du Soleil."
          },
          lucia: {
            role: "DIRECTRICE DE LA COMPTABILITÉ ET RESSOURCES HUMAINES",
            description: "Lucia apporte plus de 20 ans d'expérience administrative et comptable à Dîner en Blanc International."
          }
        }
      },
      faq_page: {
        info: "Informations",
        questions: {
          q1: "Qu'est-ce que le Dîner en Blanc ?",
          a1: "Tout a commencé à Paris il y a 30 ans quand François Pasquier a invité quelques amis à un pique-nique dans le Bois de Boulogne, leur demandant de s'habiller en blanc pour se retrouver facilement.",
          q2: "Comment s'inscrire ?",
          a2: "L'inscription se fait par parrainage ou via une liste d'attente sur notre site officiel. Les membres des années précédentes sont prioritaires.",
          q3: "Pourquoi tout en blanc ?",
          a3: "Pour l'élégance, l'unité et la magie visuelle que cela crée dans l'espace public. C'est le symbole de notre communauté.",
          q4: "Le lieu est-il secret ?",
          a4: "Oui, le lieu n'est révélé qu'aux participants quelques minutes avant le début de l'événement via des chefs de groupe.",
        }
      },
      contact_page: {
        get_in_touch: "Nous joindre",
        form: {
          name: "Nom complet",
          email: "Email professionnel",
          subject: "Sujet de la demande",
          message: "Message",
          submit: "Envoyer le message",
        },
        info: {
          press_relations: "Relations Presse",
          partnerships: "Partenariats",
          headquarters: "Siège Social",
          brussels_belgium: "Bruxelles, Belgique",
          grand_place: "Grand-Place",
        }
      },
      partner_contact: {
        title: "CONTACTEZ-NOUS",
        form: {
          name: "Nom",
          name_placeholder: "Entrez votre nom",
          email: "Email",
          email_placeholder: "Entrez votre email",
          sponsor_question: "Souhaitez-vous parrainer un événement ?",
          select_option: "Choisir une option",
          yes: "Oui",
          no: "Non",
          category: "Catégorie de parrainage",
          gastronomy: "Gastronomie",
          travel: "Voyage",
          fashion: "Mode",
          other: "Autre",
          message: "Message",
          message_placeholder: "Entrez votre message",
          submit: "Envoyer",
        }
      },
      cookie_page: {
        title: "Politique relative aux cookies",
        intro: "Cette politique relative aux cookies explique comment Le Dîner en Blanc utilise des cookies et des technologies similaires pour vous reconnaître lorsque vous visitez notre site Web. Elle explique ce que sont ces technologies et pourquoi nous les utilisons, ainsi que vos droits de contrôler notre utilisation de celles-ci.",
        what_are_cookies: {
          title: "Que sont les cookies ?",
          text: "Les cookies sont de petits fichiers de données qui sont placés sur votre ordinateur ou appareil mobile lorsque vous visitez un site Web. Les cookies sont largement utilisés par les propriétaires de sites Web afin de faire fonctionner leurs sites Web, ou de les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport."
        },
        why_use_cookies: {
          title: "Pourquoi utilisons-nous des cookies ?",
          text: "Nous utilisons des cookies internes et tiers pour plusieurs raisons. Certains cookies sont requis pour des raisons techniques afin que notre site Web puisse fonctionner, et nous les appelons cookies « essentiels » ou « strictement nécessaires ». D'autres cookies nous permettent également de suivre et de cibler les intérêts de nos utilisateurs pour améliorer l'expérience sur nos sections en ligne. Des tiers servent des cookies via notre site Web à des fins de publicité, d'analyse et à d'autres fins."
        },
        control_cookies: {
          title: "Comment puis-je contrôler les cookies ?",
          text: "Vous avez le droit de décider d'accepter ou de rejeter les cookies. Vous pouvez définir ou modifier les commandes de votre navigateur Web pour accepter ou refuser les cookies. Si vous choisissez de rejeter les cookies, vous pouvez toujours utiliser notre site Web, bien que votre accès à certaines fonctionnalités et zones de notre site Web puisse être restreint."
        }
      },
      footer: {
        keep_in_touch: "Gardons le contact",
        all_rights_reserved: "Tous droits réservés Le Diner en Blanc",
        privacy_policy: "Politique de confidentialité",
        cookie_policy: "Politique relative aux cookies",
        terms: "Conditions générales",
      },
      join_fan_list: {
        title: "Envie de participer au Dîner en Blanc à Belgique ?",
        description: "Le Dîner en Blanc, bien plus qu'un événement. Vêtus de blanc, les invités se retrouvent dans un lieu secret révélé au dernier moment pour un pique-nique chic et collectif : une soirée inoubliable de gastronomie, de musique, de conversations pétillantes et de pure magie.",
        want_to_be_there: "Envie d'y être ?",
        subtitle: "Rejoignez la liste des fans pour ne rien manquer et réserver vos places.",
        form: {
          firstname: "Prénom",
          firstname_placeholder: "Saisir votre prénom",
          lastname: "Nom de famille",
          lastname_placeholder: "Saisir votre nom de famille",
          email: "Courriel",
          email_placeholder: "Saisir votre adresse courriel",
          submit: "Rejoindre la liste des fans de Belgique",
          already_account: "Vous avez déjà un compte ?",
          rejoin_signin: "Rejoindre la liste en vous connectant.",
          legal: "En soumettant, vous acceptez nos Conditions et Politique de confidentialité.",
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        concept: "Sobre",
        news: "Noticias",
        gallery: "Galería",
        partner: "Socio",
        history: "Historia",
        team: "Equipo",
        faq: "Preguntas frecuentes",
        contact: "Contáctenos",
        signin: "Iniciar sesión",
        join_fan_list: "Únase a la lista de fans de Bélgica",
        change_city: "¿Cambiar de ciudad?: seleccione a continuación.",
        select_language: "Elija el idioma",
        help: "Ayuda",
      },
      hero: {
        title: "Le Dîner en Blanc",
        location: "Bélgica",
        subtitle: "La cena secreta más elegante del mundo",
        discover: "Descubrir",
      },
      home: {
        vivez_inattendu: "Viva lo Inesperado...",
        discover_concept: "Descubra el concepto",
        spirit: "El Espíritu",
        spirit_of_belgium: "El Espíritu de Bélgica",
        spirit_title: "Más que una cena, una experiencia efímera donde la elegancia se une al misterio.",
        spirit_text: "Le Dîner en Blanc recuerda tiempos antiguos cuando la nobleza se reunía para celebrar la vida. Hoy, miles de personas, todas vestidas de blanco, se reúnen en un lugar público cuyo secreto se guarda hasta el último momento.",
        our_history_btn: "Nuestra historia",
        annual_rendezvous: "Encuentro Anual",
        annual_description: "Una celebración efímera donde la amistad y la elegancia se encuentran bajo las estrellas.",
        view_gallery_2024: "Entre en la magia: Galería 2024",
        philosophy_subtitle: "Le Dîner en Blanc es un evento que nos transporta a otro mundo.",
        philosophy_text: "Un pique-nique d’envergure où des milliers de personnes, toutes vêtus de blanc, se rassemblent dans un espace public secret pour partager un repas gastronomique.",
        city_view: "Vista de la ciudad",
        photos: "Fotos",
        videos: "Videos",
        history: "Historia",
        concept: "El Concepto",
        stats: {
          members: "Miembros apasionados",
          across_city: "en toda la ciudad",
          cities_world: "Ciudades en el mundo",
          join_movement: "Únase al movimiento",
          tradition: "Una tradición",
          born_bagatelle: "Nacida en los Jardines de Bagatelle",
        }
      },
      about: {
        what_is_deb: "¿QUÉ ES EL “DINER EN BLANC”?",
        intro_p1: "¡Le Diner en Blanc es mucho más que un simple evento! Es un movimiento cultural que permite a los amigos celebrar juntos su pasión por la vida, la gastronomía, la moda y la comunidad con una pizca de misterio y una gran dosis de espontaneidad.",
        intro_p2: "Elegantemente vestidos de blanco, los invitados convergen en un lugar secreto para compartir un gran picnic chic. Durante la velada, disfrutan de una comida, bailan, reconectan con los placeres refinados de la vida y crean nuevas tradiciones, mientras admiran la belleza de su ciudad y la magia de la noche.",
        essentials_title: "PUNTOS ESENCIALES QUE DEBE SABER",
        essentials_p1: "¿Cómo participar? ¡Nada más sencillo!",
        member_login: "¿Ya es miembro? Haga clic en \"Participar en el Dîner en Blanc\" en la página de su ciudad o en \"Iniciar sesión\" para acceder a su cuenta. Todos los detalles exclusivos le esperan allí.",
        new_fan_list: "¿Nueva participación? Regístrese en la Lista de Fans (Fase 3) para recibir actualizaciones y su invitación cuando salgan a la venta las entradas.",
        phases_title: "Las inscripciones se realizan en tres fases:",
        phase1: "Phase 1 – Miembros del año anterior y/o amigos del equipo organizador",
        phase2: "Phase 2 – Personas patrocinadas por miembros de la Fase 1",
        phase3: "Phase 3 – Personas inscritas en la Lista de Fans",
        secret_location: "Acceso al lugar secreto – Los invitados se reúnen en puntos de salida designados por toda la ciudad. Las opciones aparecen durante el registro.",
        what_to_wear: "Qué llevar – ¡Todo de blanco, por supuesto! Se permiten tonos/detalles dorados, plateados o neutros, ¡pero mantenga el atuendo principalmente en blanco!",
        what_to_bring: "Qué traer – Según la tradición, cada invitado debe traer una mesa cuadrada plegable y dos sillas blancas*, un mantel y servilletas blancas, cubiertos para dos, una comida gourmet*...",
        info_note: "* En muchas ciudades es posible alquilar mesa y sillas, ya sea incluido en el precio de la entrada o en la tienda online.",
        expect_title: "QUÉ ESPERAR",
        rendezvous: { title: "El Encuentro", text: "Los invitados se reúnen en puntos de encuentro en la ciudad... nadie sabe a dónde se dirigirán..." },
        arrival: { title: "La Llegada", text: "Una ola humana, toda vestida de blanco, llega al lugar secreto... Los invitados montan sus mesas con determinación y emoción." },
        napkins: { title: "Agitación de servilletas", text: "Una vez que todos están instalados, los invitados agitan sus servilletas blancas al unísono para señalar el inicio de la Cena." },
        dinner: { title: "La Cena", text: "Los invitados saborean su comida cuidadosamente preparada y disfrutan de este momento mágico con nuevos y viejos amigos." },
        organize_title: "¿CÓMO ORGANIZAR UN EVENTO DINER EN BLANC EN MI CIUDAD?",
        organize_p1: "¡Celebre su singularidad con estilo! Mientras Le Diner en Blanc sigue creciendo y conectando comunidades en todo el mundo...",
        organize_p2: "Organizar un evento de gran escala como Le Diner en Blanc requiere un alto nivel de compromiso y esfuerzo. Normalmente requerimos un mínimo de 6 meses de preparación para ayudarlo a planificar y ejecutar su evento sin problemas. Es importante saber que Diner en Blanc International no cobra a los organizadores locales por unirse a su red o por usar la marca registrada.",
        organize_p3: "Sin embargo, los organizadores deben aceptar las responsabilidades asociadas con la organización de dicho evento y comprometerse a seguir las pautas e instrucciones diseñadas para preservar el espíritu y los valores de Le Diner en Blanc.",
        organize_p4: "Para solicitar la organización de un evento Diner en Blanc en su ciudad, haga clic en el botón de abajo.",
        organize_p5: "Diner en Blanc International programará una llamada de conferencia con todos los equipos calificados para continuar con el proceso de solicitud y brindar más información sobre la organización del evento. Tenga en cuenta que solo se considerarán las solicitudes que contengan toda la información requerida. ¡Esperamos conocerte!",
        organize_btn: "¡Quiero organizar un Dîner en Blanc!",
      },
      history: {
        heritage: "Nuestro Legado",
        title: "Historia",
        phenomenon_title: "Un fenómeno culinario mundial",
        p1: "Le Dîner en Blanc comenzó en París, Francia, en 1988 con una idea simple: reunir a amigos y amigos de amigos para un picnic chic al aire libre.",
        p2: "Hoy, Le Dîner en Blanc - Bélgica rinde homenaje a los lugares más majestuosos del país, creando momentos excepcionales de gracia y elegancia.",
        p3: "Pero nada tan magnífico puede permanecer oculto del resto del mundo por mucho tiempo... Le Dîner en Blanc llegó a la encantadora ciudad canadiense de Montreal en 2009, y luego a la ciudad de Nueva York en 2011 para un debut estadounidense que dejó al mundo entero ansioso por un lugar en la mesa.",
        p4: "Esa noche memorable dio origen a Le Dîner en Blanc International en 2012 y provocó un fenómeno culinario mundial disfrutado por miles de invitados en más de 120 ciudades de todo el mundo.",
        timeline_title: "CRONOLOGÍA",
        quote: "\"Aunque cada una tiene su propio toque local, sus tradiciones, sus cocinas e incluso sus idiomas, el encanto y la popularidad del concepto provienen de los valores y deseos compartidos.\"",
        events: {
          b1988: "¡Le Dîner en Blanc llega a Bélgica! Los amigos se reúnen por primera vez para celebrar la elegancia.",
          m2009: "Montreal se convierte en la primera ciudad de América del Norte en albergar Le Dîner en Blanc.",
          ny2011: "Le Dîner en Blanc debuta en Nueva York, encendiendo una fascinación mundial con la cena secreta.",
          s2012: "Asia organiza su primer Dîner en Blanc, confirmando el alcance internacional del concepto.",
          a2018: "Costa de Marfil celebra la elegancia con estilo con una edición memorable bajo las palmeras.",
        }
      },
      media: {
        title_prefix: "BÉLGICA",
        title_suffix: "GALERÍA",
        description: "Le Dîner en Blanc siempre ofrece un espectáculo impresionante. Eche un vistazo a los momentos más memorables a lo largo de los años.",
        year: "AÑO",
        all_years: "Todos los años",
        photos: "FOTOS",
        videos: "VIDEOS",
        view_photo: "Ver foto",
        watch_youtube: "Ver en YouTube",
        detail_text: "Reviva los momentos memorables de este evento excepcional a través de una selección de nuestros momentos capturados más hermosos.",
        close: "Cerrar galería",
      },
      partner_page: {
        cta_title: "¿Interesado en una asociación?",
        cta_description: "Únase a nosotros para crear momentos excepcionales y hacer historia en Bélgica.",
        cta_btn: "Contacta con nuestro equipo",
      },
      team: {
        title: "Equipo",
        organization: "La Organización",
        international_team: "EQUIPO INTERNACIONAL",
        join_btn: "Únete a la aventura",
        volunteer_btn: "Hazte voluntario",
        members: {
          sandy: {
            role: "DIRECTORA EJECUTIVA",
            description: "Desde sus inicios en los escenarios, Sandy ha cultivado una pasión ardiente por el espectáculo y el entretenimiento..."
          },
          chantal: {
            role: "ESPECIALISTA EN RELACIONES PÚBLICAS",
            description: "Como responsable de prensa en el mundo del espectáculo, Chantal tuvo la oportunidad de viajar por todo el mundo durante varios años con el Cirque du Soleil."
          },
          lucia: {
            role: "DIRECTORA DE CONTABILIDAD Y RECURSOS HUMANOS",
            description: "Lucia aporta más de 20 años de experiencia administrativa y contable a Dîner en Blanc International."
          }
        }
      },
      faq_page: {
        info: "Información",
        questions: {
          q1: "¿Qué es Le Dîner en Blanc?",
          a1: "Todo comenzó en París hace más de 30 años cuando François Pasquier invitó a unos amigos a un picnic en el Bois de Boulogne, pidiéndoles que se vistieran de blanco para encontrarse fácilmente.",
          q2: "¿Cómo me registro?",
          a2: "El registro se realiza mediante el patrocinio de un miembro existente o a través de la lista de espera en nuestro sitio web oficial.",
          q3: "¿Por qué todos de blanco?",
          a3: "Por la elegancia, la unidad y la magia visual que crea en los espacios públicos. Es un símbolo de nuestra comunidad.",
          q4: "¿Es el lugar secreto?",
          a4: "Sí, la ubicación solo se revela a los participantes minutos antes de que comience el evento a través de los líderes de grupo.",
        }
      },
      contact_page: {
        get_in_touch: "Ponte en contacto",
        form: {
          name: "Nombre completo",
          email: "Email profesional",
          subject: "Asunto",
          message: "Mensaje",
          submit: "Enviar mensaje",
        },
        info: {
          press_relations: "Relaciones de prensa",
          partnerships: "Asociaciones",
          headquarters: "Sede central",
          brussels_belgium: "Bruselas, Bélgica",
          grand_place: "Grand-Place",
        }
      },
      partner_contact: {
        title: "CONTÁCTENOS",
        form: {
          name: "Nombre",
          name_placeholder: "Ingrese su nombre",
          email: "Correo electrónico",
          email_placeholder: "Ingrese su correo electrónico",
          sponsor_question: "¿Le gustaría patrocinar un evento?",
          select_option: "Seleccionar opción",
          yes: "Sí",
          no: "No",
          category: "Categoría de patrocinio",
          gastronomy: "Gastronomía",
          travel: "Viajes",
          fashion: "Moda",
          other: "Otro",
          message: "Mensaje",
          message_placeholder: "Ingrese su mensaje",
          submit: "Enviar",
        }
      },
      cookie_page: {
        title: "Política de cookies",
        intro: "Esta Política de cookies explica cómo Le Dîner en Blanc utiliza cookies y tecnologías similares para reconocerlo cuando visita nuestro sitio web. Explica qué son estas tecnologías y por qué las usamos, así como sus derechos para controlar el uso que hacemos de ellas.",
        what_are_cookies: {
          title: "¿Qué son las cookies?",
          text: "Las cookies son pequeños archivos de datos que se colocan en su computadora o dispositivo móvil cuando visita un sitio web. Los propietarios de sitios web utilizan ampliamente las cookies para que sus sitios web funcionen, o para que funcionen de manera más eficiente, así como para proporcionar información de informes."
        },
        why_use_cookies: {
          title: "¿Por qué utilizamos cookies?",
          text: "Utilizamos cookies propias y de terceros por varias razones. Algunas cookies son necesarias por razones técnicas para que nuestro sitio web funcione, y nos referimos a ellas como cookies \"esenciales\" o \"estrictamente necesarias\". Otras cookies también nos permiten rastrear y dirigirnos a los intereses de nuestros usuarios para mejorar la experiencia en nuestras secciones en línea. Los terceros sirven cookies a través de nuestro sitio web con fines publicitarios, analíticos y de otro tipo."
        },
        control_cookies: {
          title: "¿Cómo puedo controlar las cookies?",
          text: "Usted tiene derecho a decidir si acepta o rechaza las cookies. Puede configurar o modificar los controles de su navegador web para aceptar o rechazar las cookies. Si elige rechazar las cookies, aún puede usar nuestro sitio web, aunque su acceso a algunas funciones y áreas de nuestro sitio web puede estar restringido."
        }
      },
      footer: {
        keep_in_touch: "Manténgase en contacto",
        all_rights_reserved: "Todos los derechos reservados Le Diner en Blanc",
        privacy_policy: "Política de privacidad",
        cookie_policy: "Política de cookies",
        terms: "Términos y condiciones",
      },
      join_fan_list: {
        title: "¿Quiere participar en el Dîner en Blanc en Bélgica?",
        description: "Le Dîner en Blanc, mucho más que un evento. Vestidos de blanco, los invitados se reúnen en un lugar secreto revelado en el último momento para un picnic chic y colectivo: una noche inolvidable de gastronomía, música, conversaciones chispeantes y pura magia.",
        want_to_be_there: "¿Quiere estar allí?",
        subtitle: "Únase a la lista de fans para no perderse nada y reservar sus plazas.",
        form: {
          firstname: "Nombre",
          firstname_placeholder: "Ingrese su nombre",
          lastname: "Apellido",
          lastname_placeholder: "Ingrese su apellido",
          email: "Correo electrónico",
          email_placeholder: "Ingrese su dirección de correo electrónico",
          submit: "Unirse a la lista de fans de Bélgica",
          already_account: "¿Ya tiene una cuenta?",
          rejoin_signin: "Únase iniciando sesión.",
          legal: "Al enviar, acepta nuestras Condiciones y Política de privacidad.",
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
