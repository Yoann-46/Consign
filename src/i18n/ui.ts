/**
 * i18n dictionaries.
 * EN is the default locale (served at /), FR at /fr/.
 * Add new keys here, then they're typed everywhere via the t() helper.
 */

export const languages = {
  en: 'EN',
  fr: 'FR',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    // Meta
    'meta.title': 'Consign — Paris, hands free.',
    'meta.description':
      'Luggage storage in central Paris, 67 rue de Cléry, open 7am–10pm. Medium locker from €7 for 3 hours, pay by card at the machine. No app, no booking, no queue.',

    // Nav
    'nav.how': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.locations': 'Locations',

    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Directions',
    'cta.directions': 'Directions',
    'cta.seeLocker': 'See the locker',
    'card.title': 'The locker',
    'card.where': 'Inside a self-service laundromat',
    'card.metro': 'Sentier, line 3 · 2 min walk',
    'card.hours': '7am–10pm, every day',
    'card.prices': 'Prices',
    'card.size': 'Size',
    'card.h3': '3 h',
    'card.h4': '4 h',
    'card.day': 'Day',
    'card.medium': 'Medium',
    'card.large': 'Large',
    'card.pay': 'Pay by card at the machine · Visa, Mastercard, Amex · no cash',
    'card.allPrices': 'Full pricing',
    'card.help': 'Need help?',
    'card.call': 'Call',
    'card.live.loading': 'Checking free lockers…',
    'card.live.free': '{n} lockers free right now',
    'card.live.free1': '1 locker free right now',
    'card.live.none': 'All lockers taken right now',
    'card.live.error': 'Check live availability',
    'final.title': 'See you at 67 rue de Cléry.',
    'final.text': 'Sentier, Paris 2e. Open 7am–10pm, every day. Walk in, choose a size, pay by card: 2 minutes.',
    'final.soon': 'Coming later: Le Marais, Latin Quarter, Montmartre, Gare du Nord.',

    // Hero
    'hero.eyebrow': 'Paris · Sentier · 7am–10pm',
    'hero.title.a': 'We',
    'hero.title.b': 'store,',
    'hero.title.c': 'you',
    'hero.title.d': 'explore.',
    'hero.subtitle':
      'Drop your luggage in a smart locker in the Sentier, central Paris. Walk in, pay by card, and go. No app, no booking, no queue.',
    'hero.cta.primary': 'Find a locker',
    'hero.cta.secondary': 'How it works',
    'hero.stat.uptime': '7am–10pm',
    'hero.stat.uptime.label': 'Every day',
    'hero.stat.from': 'From €7',
    'hero.stat.from.label': 'Medium · 3 h',
    'hero.stat.location': 'By card',
    'hero.stat.location.label': 'Visa · MC · Amex',

    // FAQ
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Good to know.',
    'faq.q1': 'How does it work?',
    'faq.a1': "Come to 67 rue de Cléry (inside a self-service laundromat). At the machine, choose a locker size and duration, then pay by card: the locker opens. Drop your bags and close the door. We email you a QR code: scan it at the machine to get your bags back. Open every day, 7am–10pm.",
    'faq.q2': 'Is my luggage really safe?',
    'faq.a2': 'Yes. Each locker is built like a smart safe: sealed, with tamper detection. Only the QR code emailed to you opens it. The location is monitored.',
    'faq.q3': 'What sizes of luggage fit?',
    'faq.a3': 'We have two locker sizes. Medium (45 × 55 × 33 cm): fits cabin bags, backpacks and small bags. Large (45 × 55 × 85 cm): fits standard check-in suitcases up to 85 cm tall. Most travel luggage fits in a Large.',
    'faq.q4': 'How long can I leave my luggage?',
    'faq.a4': 'From 3 hours to a full day. You choose the duration when you pay at the machine: 3 h, 4 h or a full day.',
    'faq.q5': "What if I'm late picking up?",
    'faq.a5': 'Your locker stays sealed until you come back. If you go over the time you paid for, the next slot is charged when you collect your bags: past 3 h, the 4-hour slot; past 4 h, the full day; past one day, an extra day, and so on. Plan to be back before 10pm: after that the laundromat is closed and your locker can’t be reached until it reopens.',
    'faq.q6': 'Do I need to book?',
    'faq.a6': "No. There’s no app and no online booking: walk in, choose a size and a duration at the machine, pay by card. It takes about 2 minutes.",
    'faq.q8': 'Something went wrong. Who do I call?',
    'faq.a8': 'Call or WhatsApp us on +33 6 14 01 04 48, or email consignlocker@gmail.com.',
    'faq.q7': 'What payment methods do you accept?',
    'faq.a7': 'Card and contactless payment directly at the machine. Visa, Mastercard and Amex accepted. No cash, no app needed.',

    // Reviews
    'reviews.eyebrow': 'Reviews',
    'reviews.title': 'Loved by Paris travelers.',
    'reviews.rating.label': 'on Google',
    'reviews.count': '{n} reviews',
    'reviews.rating.aria': '5 out of 5 stars',
    'reviews.cta': 'See all reviews on Google',
    'reviews.visited': 'Visited',

    // How it works
    'how.eyebrow': 'How it works',
    'how.title': '4 steps.',
    'how.title.accent': "That's it.",
    'how.lede': 'Everything happens at the machine, in about 2 minutes.',
    'how.step1.title': 'Choose a size',
    'how.step1.desc': 'Medium (45 × 55 × 33 cm) for cabin bags and backpacks, Large (45 × 55 × 85 cm) for check-in suitcases.',
    'how.step2.title': 'Choose a duration',
    'how.step2.desc': '3 hours, 4 hours or the full day.',
    'how.step3.title': 'Pay by card',
    'how.step3.desc': 'Visa, Mastercard or Amex, contactless works. Your locker opens: put your bags in and close the door.',
    'how.step4.title': 'Scan to collect',
    'how.step4.desc': 'We email you a QR code. Scan it at the machine to reopen your locker, any time before 10pm.',
    'photos.title': 'On site',
    'photos.storefront': 'The laundromat at 67 rue de Cléry',
    'photos.machine': 'The machine: choose, pay, scan',
    'photos.locker': 'A Large locker, suitcase inside',

    // Contact page
    'contact.meta.title': 'Contact — Consign',
    'contact.meta.description':
      "Questions, lost items, partnership ideas: get in touch with Consign's team.",
    'contact.eyebrow': 'Contact',
    'contact.title': 'Get in touch.',
    'contact.subtitle':
      'Questions, lost items, partnership ideas: we read everything and reply within 24 hours.',
    'contact.method.email.label': 'Email',
    'contact.method.email.value': 'consignlocker@gmail.com',
    'contact.method.email.hint': 'Reply within 24 h',
    'contact.method.whatsapp.label': 'WhatsApp',
    'contact.method.whatsapp.value': '+33 6 14 01 04 48',
    'contact.method.whatsapp.hint': 'For urgent stuff',
    'contact.method.visit.label': 'Visit',
    'contact.method.visit.value': '67 rue de Cléry, 75002 Paris',
    'contact.method.visit.hint': 'Open 7am–10pm',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.subject': 'Subject',
    'contact.form.subject.general': 'General question',
    'contact.form.subject.support': 'Support / lost item',
    'contact.form.subject.partnership': 'Partnership / business',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Open my mail to send',
    'contact.form.note':
      'Submitting opens your mail client with everything pre-filled. Nothing leaves your device until you hit send.',

    // Pricing page
    'pricing.meta.title': 'Pricing — Consign',
    'pricing.meta.description': 'Clear luggage storage prices in Paris. Medium and Large lockers, 3-hour slots, 4-hour slots, and full-day rates.',
    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Simple,',
    'pricing.title.accent': 'transparent.',
    'pricing.subtitle': 'Choose the locker size and duration that suits your day. No hidden fees, no surprises.',
    'pricing.locker.m': 'Medium locker',
    'pricing.locker.m.dims': '45 × 55 × 33 cm',
    'pricing.locker.m.fit': 'Cabin bags, backpacks, small bags',
    'pricing.locker.l': 'Large locker',
    'pricing.locker.l.dims': '45 × 55 × 85 cm',
    'pricing.locker.l.fit': 'Check-in suitcases up to 85 cm',
    'pricing.slot.3h': '3-hour slot',
    'pricing.slot.4h': '4-hour slot',
    'pricing.slot.day': 'Full day',
    'pricing.popular': 'Most popular',
    'pricing.note': 'Payment by card or contactless at the machine. No account needed.',
    'pricing.cta': 'Directions',
    'pricing.faq.link': 'Got questions? See the FAQ',

    // Footer
    'footer.tagline': 'Paris, hands free.',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.cookies': 'Cookie settings',
    'consent.text': 'We’d like to measure visits with Google Analytics to improve the site. Nothing is loaded unless you agree.',
    'consent.more': 'Privacy policy',
    'consent.accept': 'Accept',
    'consent.refuse': 'Refuse',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.contact': 'Help',
  },
  fr: {
    // Meta
    'meta.title': 'Consign — Paris, les mains libres.',
    'meta.description':
      "Consigne à bagages au cœur de Paris, 67 rue de Cléry, ouverte 7h–22h. Casier Moyen dès 7 € pour 3 h, paiement par carte à la machine. Sans appli, sans réservation, sans queue.",

    // Nav
    'nav.how': 'Comment ça marche',
    'nav.pricing': 'Tarifs',
    'nav.locations': 'Emplacements',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Itinéraire',
    'cta.directions': 'Itinéraire',
    'cta.seeLocker': 'Voir le casier',
    'card.title': 'Le casier',
    'card.where': 'Dans une laverie en libre-service',
    'card.metro': 'Sentier, ligne 3 · 2 min à pied',
    'card.hours': '7h–22h, tous les jours',
    'card.prices': 'Tarifs',
    'card.size': 'Taille',
    'card.h3': '3 h',
    'card.h4': '4 h',
    'card.day': 'Journée',
    'card.medium': 'Moyen',
    'card.large': 'Grand',
    'card.pay': 'Paiement par carte à la machine · Visa, Mastercard, Amex · pas d’espèces',
    'card.allPrices': 'Tous les tarifs',
    'card.help': 'Besoin d’aide ?',
    'card.call': 'Appeler',
    'card.live.loading': 'On compte les casiers libres…',
    'card.live.free': '{n} casiers libres en ce moment',
    'card.live.free1': '1 casier libre en ce moment',
    'card.live.none': 'Tous les casiers sont pris en ce moment',
    'card.live.error': 'Voir la disponibilité en direct',
    'final.title': 'Rendez-vous au 67 rue de Cléry.',
    'final.text': 'Sentier, Paris 2e. Ouvert 7h–22h, tous les jours. Venez, choisissez une taille, payez par carte : 2 minutes.',
    'final.soon': 'Plus tard : Le Marais, Quartier Latin, Montmartre, Gare du Nord.',

    // Hero — slogan stays EN per brand decision
    'hero.eyebrow': 'Paris · Sentier · 7h–22h',
    'hero.title.a': 'We',
    'hero.title.b': 'store,',
    'hero.title.c': 'you',
    'hero.title.d': 'explore.',
    'hero.subtitle':
      'Déposez vos bagages dans un casier connecté du Sentier, au cœur de Paris. Venez, payez par carte, c’est fait. Sans appli, sans réservation, sans queue.',
    'hero.cta.primary': 'Trouver un casier',
    'hero.cta.secondary': 'Comment ça marche',
    'hero.stat.uptime': '7h–22h',
    'hero.stat.uptime.label': 'Tous les jours',
    'hero.stat.from': 'Dès 7 €',
    'hero.stat.from.label': 'Moyen · 3 h',
    'hero.stat.location': 'Par carte',
    'hero.stat.location.label': 'Visa · MC · Amex',

    // FAQ
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Bon à savoir.',
    'faq.q1': 'Comment ça marche ?',
    'faq.a1': "Venez au 67 rue de Cléry (dans une laverie en libre-service). Sur la machine, choisissez la taille du casier et la durée, puis payez par carte : le casier s’ouvre. Déposez vos bagages et fermez la porte. Vous recevez un QR code par e‑mail : scannez-le à la machine pour récupérer vos bagages. Ouvert tous les jours, 7h–22h.",
    'faq.q2': 'Mes bagages sont-ils vraiment en sécurité ?',
    'faq.a2': "Oui. Chaque casier est conçu comme un coffre-fort connecté : scellé, avec détection de manipulation. Seul le QR code reçu par e‑mail ouvre le vôtre. Le lieu est surveillé.",
    'faq.q3': 'Quelles tailles de bagages acceptez-vous ?',
    'faq.a3': "Nous proposons deux tailles de casiers. Moyen (45 × 55 × 33 cm) : idéal pour les sacs cabine, sacs à dos et petits bagages. Grand (45 × 55 × 85 cm) : accueille les valises soute standard jusqu'à 85 cm. La plupart des valises de voyage rentrent dans un Grand.",
    'faq.q4': 'Combien de temps puis-je laisser mes bagages ?',
    'faq.a4': "De 3 heures à une journée complète. Vous choisissez la durée en payant à la machine : 3 h, 4 h ou la journée.",
    'faq.q5': 'Que se passe-t-il si je suis en retard ?',
    'faq.a5': "Votre casier reste fermé jusqu’à votre retour. Si vous dépassez la durée payée, la tranche suivante est facturée au moment de récupérer vos bagages : au-delà de 3 h, la tranche 4 h ; au-delà de 4 h, la journée ; au-delà d’une journée, une journée supplémentaire, et ainsi de suite. Revenez avant 22h : après, la laverie est fermée et votre casier n’est plus accessible jusqu’à la réouverture.",
    'faq.q6': 'Faut-il réserver ?',
    'faq.a6': "Non. Pas d’appli ni de réservation en ligne : venez, choisissez une taille et une durée à la machine, payez par carte. Comptez 2 minutes.",
    'faq.q8': 'Un problème ? Qui contacter ?',
    'faq.a8': 'Appelez-nous ou écrivez-nous sur WhatsApp au +33 6 14 01 04 48, ou par e‑mail à consignlocker@gmail.com.',
    'faq.q7': 'Quels moyens de paiement acceptez-vous ?',
    'faq.a7': "Carte bancaire et paiement sans contact directement sur la machine. Visa, Mastercard et Amex acceptés. Pas d'espèces, pas d'application nécessaire.",

    // Reviews
    'reviews.eyebrow': 'Avis Google',
    'reviews.title': 'Ils ont consigné chez nous.',
    'reviews.rating.label': 'sur Google',
    'reviews.count': '{n} avis',
    'reviews.rating.aria': '5 étoiles sur 5',
    'reviews.cta': 'Voir tous les avis sur Google',
    'reviews.visited': 'Visité',

    // How it works
    'how.eyebrow': 'Comment ça marche',
    'how.title': '4 étapes.',
    'how.title.accent': "C'est tout.",
    'how.lede': 'Tout se passe à la machine, en 2 minutes environ.',
    'how.step1.title': 'Choisir la taille',
    'how.step1.desc': 'Moyen (45 × 55 × 33 cm) pour les bagages cabine et sacs à dos, Grand (45 × 55 × 85 cm) pour les valises soute.',
    'how.step2.title': 'Choisir la durée',
    'how.step2.desc': '3 heures, 4 heures ou la journée.',
    'how.step3.title': 'Payer par carte',
    'how.step3.desc': 'Visa, Mastercard ou Amex, sans contact possible. Le casier s’ouvre : déposez vos bagages et fermez la porte.',
    'how.step4.title': 'Scanner pour récupérer',
    'how.step4.desc': 'Vous recevez un QR code par e‑mail. Scannez-le à la machine pour rouvrir votre casier, avant 22h.',
    'photos.title': 'Sur place',
    'photos.storefront': 'La laverie du 67 rue de Cléry',
    'photos.machine': 'La machine : choisir, payer, scanner',
    'photos.locker': 'Un casier Grand, valise à l’intérieur',

    // Contact page
    'contact.meta.title': 'Contact — Consign',
    'contact.meta.description':
      "Questions, objets oubliés, idées de partenariat : contactez l'équipe Consign.",
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contactez-nous.',
    'contact.subtitle':
      "Questions, objets oubliés, idées de partenariat : on lit tout et on répond sous 24h.",
    'contact.method.email.label': 'Email',
    'contact.method.email.value': 'consignlocker@gmail.com',
    'contact.method.email.hint': 'Réponse sous 24 h',
    'contact.method.whatsapp.label': 'WhatsApp',
    'contact.method.whatsapp.value': '+33 6 14 01 04 48',
    'contact.method.whatsapp.hint': 'Pour les urgences',
    'contact.method.visit.label': 'Sur place',
    'contact.method.visit.value': '67 rue de Cléry, 75002 Paris',
    'contact.method.visit.hint': 'Ouvert 7h–22h',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Votre email',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.general': 'Question générale',
    'contact.form.subject.support': 'Support / objet oublié',
    'contact.form.subject.partnership': 'Partenariat / business',
    'contact.form.message': 'Votre message',
    'contact.form.submit': 'Ouvrir mon mail pour envoyer',
    'contact.form.note':
      "Le bouton ouvre votre application mail avec tout pré-rempli. Rien ne quitte votre appareil tant que vous n'appuyez pas sur envoyer.",

    // Pricing page
    'pricing.meta.title': 'Tarifs — Consign',
    'pricing.meta.description': 'Les tarifs de la consigne à bagages à Paris. Casiers Moyen et Grand, tranches de 3h, 4h et journée.',
    'pricing.eyebrow': 'Tarifs',
    'pricing.title': 'Simple,',
    'pricing.title.accent': 'transparent.',
    'pricing.subtitle': 'Choisissez la taille et la durée qui conviennent à votre journée. Pas de frais cachés, pas de mauvaises surprises.',
    'pricing.locker.m': 'Casier Moyen',
    'pricing.locker.m.dims': '45 × 55 × 33 cm',
    'pricing.locker.m.fit': 'Sacs cabine, sacs à dos, petits bagages',
    'pricing.locker.l': 'Casier Grand',
    'pricing.locker.l.dims': '45 × 55 × 85 cm',
    'pricing.locker.l.fit': 'Valises soute jusqu\'à 85 cm',
    'pricing.slot.3h': 'Tranche 3h',
    'pricing.slot.4h': 'Tranche 4h',
    'pricing.slot.day': 'Journée',
    'pricing.popular': 'Le plus choisi',
    'pricing.note': 'Paiement par carte ou sans contact directement sur la machine. Pas de compte requis.',
    'pricing.cta': 'Itinéraire',
    'pricing.faq.link': 'Des questions ? Consultez la FAQ',

    // Footer
    'footer.tagline': 'Paris, les mains libres.',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'footer.terms': "Conditions d'utilisation",
    'footer.cookies': 'Gérer les cookies',
    'consent.text': 'Nous aimerions mesurer l’audience avec Google Analytics pour améliorer le site. Rien n’est chargé sans votre accord.',
    'consent.more': 'Politique de confidentialité',
    'consent.accept': 'Accepter',
    'consent.refuse': 'Refuser',
    'footer.product': 'Service',
    'footer.company': 'Entreprise',
    'footer.contact': 'Aide',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)['en'];

/**
 * Returns a translator function bound to a locale.
 * Usage in Astro: const t = useTranslations(Astro.currentLocale);
 *                 <h1>{t('hero.title.a')}</h1>
 */
export function useTranslations(lang: string | undefined) {
  const resolved: Lang = (lang === 'fr' ? 'fr' : 'en');
  return function t(key: UIKey): string {
    return ui[resolved][key] ?? ui[defaultLang][key];
  };
}

/**
 * Helper to build a localized path.
 * EN routes have no prefix (/, /business), FR routes are prefixed (/fr/, /fr/pro).
 */
export function localizedPath(lang: string | undefined, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'fr') {
    return `/fr${cleanPath === '/' ? '' : cleanPath}`;
  }
  return cleanPath;
}
