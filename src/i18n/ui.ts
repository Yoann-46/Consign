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
      'Luggage storage open 7am to 10pm in central Paris. Secure smart lockers from €7 for 3 hours. No queue, no staff, no stress.',

    // Nav
    'nav.how': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.locations': 'Locations',

    'nav.faq': 'FAQ',
    'nav.business': 'For business',
    'nav.contact': 'Contact',
    'nav.cta': 'Find a locker',

    // Hero
    'hero.eyebrow': 'Paris · Sentier · 7am–10pm',
    'hero.title.a': 'We',
    'hero.title.b': 'store,',
    'hero.title.c': 'you',
    'hero.title.d': 'explore.',
    'hero.subtitle':
      'Drop your luggage in a smart locker in central Paris. Pick it up whenever. No staff, no queue, no stress.',
    'hero.cta.primary': 'Find a locker',
    'hero.cta.secondary': 'See how it works',
    'hero.stat.uptime': '7–22h',
    'hero.stat.uptime.label': 'Every day',
    'hero.stat.from': 'From €7',
    'hero.stat.from.label': '3-hour slot',
    'hero.stat.location': '1 location',
    'hero.stat.location.label': 'Sentier · more soon',

    // 10 Reasons
    'reasons.eyebrow': '10 reasons',
    'reasons.title': '10 reasons',
    'reasons.title.accent': 'to trust us.',
    'reasons.r1.title': 'Open 7am – 10pm',
    'reasons.r1.desc': 'Open every day from 7am to 10pm. Drop or pick up whenever works for you.',
    'reasons.r2.title': 'Fully automated',
    'reasons.r2.desc': 'No queue, no staff, no waiting.',
    'reasons.r3.title': 'Smart safes',
    'reasons.r3.desc': 'Sealed lockers with tamper detection. Only you unlock yours.',
    'reasons.r4.title': 'Central Paris',
    'reasons.r4.desc': 'Right in the Sentier, two minutes from the metro.',
    'reasons.r5.title': 'Fair pricing',
    'reasons.r5.desc': 'From €7 for a 3-hour slot, €11 for a full day. Choose what fits your trip.',
    'reasons.r6.title': 'Book in seconds',
    'reasons.r6.desc': 'Online, from your phone, no account needed.',
    'reasons.r7.title': 'Built for travelers',
    'reasons.r7.desc': 'Multilingual interface, instant confirmation.',
    'reasons.r8.title': 'Pay-as-you-go',
    'reasons.r8.desc': '3-hour slot, 4-hour slot, or full day. Pick what fits.',
    'reasons.r9.title': 'Open when others close',
    'reasons.r9.desc': "Late check-out? Early arrival? We're open while staffed offices are shut.",
    'reasons.r10.title': '5★ on Google',
    'reasons.r10.desc': 'Real reviews from real Paris travelers.',

    // FAQ
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Good to know.',
    'faq.q1': 'How does it work?',
    'faq.a1': "Find a Consign locker on the map, reserve it at the machine, drop your luggage and close the door. Come back whenever works for you. Open every day from 7am to 10pm.",
    'faq.q2': 'Is my luggage really safe?',
    'faq.a2': 'Yes. Each locker is built like a smart safe: sealed, with tamper detection. Only you can unlock yours from your booking. The location is monitored.',
    'faq.q3': 'What sizes of luggage fit?',
    'faq.a3': 'We have two locker sizes. Medium (45 × 55 × 33 cm): fits cabin bags, backpacks and small bags. Large (45 × 55 × 85 cm): fits standard check-in suitcases up to 85 cm tall. Most travel luggage fits in a Large.',
    'faq.q4': 'How long can I leave my luggage?',
    'faq.a4': 'From 3 hours to a full day. You choose the duration when you reserve at the machine — 3h, 4h, or 1 day.',
    'faq.q5': "What if I'm late picking up?",
    'faq.a5': 'Your locker stays sealed until you come back. If you go over your booked time, please contact us directly so we can sort it out.',
    'faq.q6': 'Can I book in advance?',
    'faq.a6': "Online booking is coming soon. For now, just show up at the machine, choose your locker size and duration, pay by card, and drop your bags.",
    'faq.q7': 'What payment methods do you accept?',
    'faq.a7': 'Card and contactless payment directly at the machine. Visa, Mastercard and Amex accepted. No cash, no app needed.',

    // Locations
    'loc.eyebrow': 'Find us',
    'loc.title': 'Right now:',
    'loc.title.accent': 'the Sentier.',
    'loc.subtitle': 'One spot today, more popping up across Paris soon.',
    'loc.address.label': 'Address',
    'loc.address.value': '67 rue de Cléry · 75002 Paris',
    'loc.hours.label': 'Hours',
    'loc.hours.value': 'Open 7am – 10pm · every day',
    'loc.metro.label': 'Metro',
    'loc.metro.value': 'Sentier (line 3) · 2 min walk',
    'loc.access.label': 'Access',
    'loc.access.value': 'Inside a laundromat · self-service',
    'loc.cta.directions': 'Get directions',
    'loc.cta.availability': 'Check locker availability',
    'loc.cta.notify': 'Tell me when a new spot opens',
    'loc.coming.title': 'Coming soon to',
    'loc.coming.1': 'Le Marais',
    'loc.coming.2': 'Latin Quarter',
    'loc.coming.3': 'Montmartre',
    'loc.coming.4': 'Gare du Nord',

    // Reviews
    'reviews.eyebrow': 'Reviews',
    'reviews.title': 'Loved by Paris travelers.',
    'reviews.rating.label': 'on Google',
    'reviews.rating.aria': '5 out of 5 stars',
    'reviews.cta': 'See all reviews on Google',
    'reviews.visited': 'Visited',

    // How it works
    'how.eyebrow': 'How it works',
    'how.title': '4 steps.',
    'how.title.accent': "That's it.",
    'how.step1.title': 'Locate',
    'how.step1.desc': 'Find the closest Consign locker on the map. Right now: in the Sentier.',
    'how.step2.title': 'Book',
    'how.step2.desc': 'Online reservation coming soon. For now, reserve your locker directly at the machine.',
    'how.step3.title': 'Drop',
    'how.step3.desc': 'Place your luggage in your secure locker and close the door.',
    'how.step4.title': 'Explore',
    'how.step4.desc': 'Go enjoy Paris with your hands free. Come back anytime between 7am and 10pm.',

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
    'contact.method.visit.hint': 'Open 7am – 10pm',
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

    // Business page
    'business.meta.title': 'For business — Consign',
    'business.meta.description':
      'Hotels, aparthotels, concierges, Airbnb managers: add automated luggage storage to your offer, with no staff and no infrastructure.',
    'business.eyebrow': 'For business',
    'business.title': 'Add a luggage room',
    'business.title.accent': 'to your offer.',
    'business.subtitle':
      "Hotels, aparthotels, concierges, Airbnb managers: give your guests a place to drop their bags. We bring the locker, you collect a revenue share.",
    'business.cta': 'Talk to us',
    'business.cases.eyebrow': 'Built for',
    'business.case1.title': 'Hotels',
    'business.case1.desc':
      "Solve early arrivals and late check-outs without staffing a luggage room.",
    'business.case2.title': 'Aparthotels & B&Bs',
    'business.case2.desc': 'No reception desk? No problem. Guests drop bags from 7am to 10pm.',
    'business.case3.title': 'Airbnb managers',
    'business.case3.desc':
      'Skip the key handoff drama and the awkward check-in windows.',
    'business.benefits.eyebrow': 'Why partner',
    'business.benefits.title': 'Asset-light, brand-loud, hands-off.',
    'business.benefit1.title': 'No equipment to buy',
    'business.benefit1.desc':
      "We bring the locker, the software, the support. You bring the spot.",
    'business.benefit2.title': 'Revenue share',
    'business.benefit2.desc': 'You earn on every locker your guests book.',
    'business.benefit3.title': 'Co-branded',
    'business.benefit3.desc':
      'Your logo on the locker, your name in the confirmation email.',
    'business.benefit4.title': '24 / 7 support',
    'business.benefit4.desc':
      "We handle bookings, payments and customer support. You don't lift a finger.",
    'business.steps.eyebrow': 'How partnerships work',
    'business.step1.title': 'Tell us your spot',
    'business.step1.desc': 'A quick chat to check fit and assess foot traffic.',
    'business.step2.title': 'We install',
    'business.step2.desc':
      "Locker delivered, connected and branded with your logo.",
    'business.step3.title': 'Your guests book',
    'business.step3.desc':
      'We handle bookings, payments and customer support end-to-end.',
    'business.step4.title': 'You collect',
    'business.step4.desc':
      'Revenue share paid monthly. Full dashboard included.',
    'business.contact.title': 'Ready to talk?',
    'business.contact.subtitle':
      "Tell us a few details and we'll get back to you quickly, usually within the day.",
    'business.contact.name': 'Your name',
    'business.contact.business': 'Hotel / business name',
    'business.contact.email': 'Your email',
    'business.contact.spot': 'Address of the spot',
    'business.contact.message': 'Anything we should know',
    'business.contact.submit': 'Start the conversation',

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
    'pricing.cta': 'Find your locker',
    'pricing.faq.link': 'Got questions? See the FAQ',

    // Footer
    'footer.tagline': 'Paris, hands free.',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },
  fr: {
    // Meta
    'meta.title': 'Consign — Paris, les mains libres.',
    'meta.description':
      "Consigne à bagages ouverte de 7h à 22h au cœur de Paris. Casiers connectés sécurisés dès 7 € pour 3h. Sans queue, sans personnel, sans stress.",

    // Nav
    'nav.how': 'Comment ça marche',
    'nav.pricing': 'Tarifs',
    'nav.locations': 'Emplacements',
    'nav.faq': 'FAQ',
    'nav.business': 'Professionnels',
    'nav.contact': 'Contact',
    'nav.cta': 'Trouver un casier',

    // Hero — slogan stays EN per brand decision
    'hero.eyebrow': 'Paris · Sentier · 7h–22h',
    'hero.title.a': 'We',
    'hero.title.b': 'store,',
    'hero.title.c': 'you',
    'hero.title.d': 'explore.',
    'hero.subtitle':
      'Déposez vos bagages dans un casier connecté au cœur de Paris. Récupérez-les quand vous voulez. Sans personnel, sans queue, sans stress.',
    'hero.cta.primary': 'Trouver un casier',
    'hero.cta.secondary': 'Voir comment ça marche',
    'hero.stat.uptime': '7–22h',
    'hero.stat.uptime.label': 'Tous les jours',
    'hero.stat.from': 'Dès 7 €',
    'hero.stat.from.label': 'Tranche de 3h',
    'hero.stat.location': '1 emplacement',
    'hero.stat.location.label': 'Sentier · bientôt plus',

    // 10 Reasons
    'reasons.eyebrow': '10 raisons',
    'reasons.title': '10 raisons',
    'reasons.title.accent': 'de nous confier vos bagages.',
    'reasons.r1.title': 'Ouvert 7h – 22h',
    'reasons.r1.desc': 'Ouvert tous les jours de 7h à 22h. Déposez ou récupérez selon votre agenda.',
    'reasons.r2.title': '100% automatisé',
    'reasons.r2.desc': "Pas de queue, pas de personnel, pas d'attente.",
    'reasons.r3.title': 'Coffres connectés',
    'reasons.r3.desc': "Casiers scellés avec détection de manipulation. Vous seul ouvrez le vôtre.",
    'reasons.r4.title': 'Paris centre',
    'reasons.r4.desc': 'En plein Sentier, à deux minutes du métro.',
    'reasons.r5.title': 'Prix juste',
    'reasons.r5.desc': "Dès 7 € pour 3h, 11 € à la journée. Choisissez selon votre programme.",
    'reasons.r6.title': 'Réservation express',
    'reasons.r6.desc': 'En ligne, depuis votre téléphone, sans compte.',
    'reasons.r7.title': 'Pensé pour les voyageurs',
    'reasons.r7.desc': 'Interface multilingue, confirmation instantanée.',
    'reasons.r8.title': 'À la carte',
    'reasons.r8.desc': "Tranche de 3h, 4h ou journée complète. Vous choisissez.",
    'reasons.r9.title': 'Ouvert quand les autres ferment',
    'reasons.r9.desc': "Check-out tardif ? Arrivée tôt ? On est ouvert quand les guichets ferment.",
    'reasons.r10.title': '5★ sur Google',
    'reasons.r10.desc': 'De vrais avis de vrais voyageurs parisiens.',

    // FAQ
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Bon à savoir.',
    'faq.q1': 'Comment ça marche ?',
    'faq.a1': "Trouvez un casier Consign sur la carte, réservez-le directement sur la machine, déposez vos bagages et fermez la porte. Revenez les chercher quand vous voulez, on est ouvert tous les jours de 7h à 22h.",
    'faq.q2': 'Mes bagages sont-ils vraiment en sécurité ?',
    'faq.a2': "Oui. Chaque casier est conçu comme un coffre-fort connecté : scellé, avec détection de manipulation. Seul vous pouvez ouvrir le vôtre depuis votre réservation. Le lieu est surveillé.",
    'faq.q3': 'Quelles tailles de bagages acceptez-vous ?',
    'faq.a3': "Nous proposons deux tailles de casiers. Moyen (45 × 55 × 33 cm) : idéal pour les sacs cabine, sacs à dos et petits bagages. Grand (45 × 55 × 85 cm) : accueille les valises soute standard jusqu'à 85 cm. La plupart des valises de voyage rentrent dans un Grand.",
    'faq.q4': 'Combien de temps puis-je laisser mes bagages ?',
    'faq.a4': "De 3 heures à une journée complète. Vous choisissez la durée sur la machine à l'arrivée : tranche de 3h, 4h ou journée.",
    'faq.q5': 'Que se passe-t-il si je suis en retard ?',
    'faq.a5': "Votre casier reste fermé jusqu'à votre retour. Si vous dépassez la durée réservée, contactez-nous directement et on arrange ça.",
    'faq.q6': 'Puis-je réserver à l\'avance ?',
    'faq.a6': "La réservation en ligne arrive bientôt. Pour l'instant, rendez-vous directement sur la machine : choisissez la taille et la durée, payez par carte, déposez vos bagages.",
    'faq.q7': 'Quels moyens de paiement acceptez-vous ?',
    'faq.a7': "Carte bancaire et paiement sans contact directement sur la machine. Visa, Mastercard et Amex acceptés. Pas d'espèces, pas d'application nécessaire.",

    // Locations
    'loc.eyebrow': 'Où nous trouver',
    'loc.title': 'Pour le moment :',
    'loc.title.accent': 'le Sentier.',
    'loc.subtitle': "Un emplacement aujourd'hui, d'autres bientôt partout dans Paris.",
    'loc.address.label': 'Adresse',
    'loc.address.value': '67 rue de Cléry · 75002 Paris',
    'loc.hours.label': 'Horaires',
    'loc.hours.value': 'Ouvert 7h – 22h · tous les jours',
    'loc.metro.label': 'Métro',
    'loc.metro.value': 'Sentier (ligne 3) · 2 min à pied',
    'loc.access.label': 'Accès',
    'loc.access.value': 'Dans une laverie · libre-service',
    'loc.cta.directions': 'Itinéraire',
    'loc.cta.availability': 'Voir la disponibilité',
    'loc.cta.notify': "Prévenez-moi quand un nouvel emplacement ouvre",
    'loc.coming.title': 'Bientôt à',
    'loc.coming.1': 'Le Marais',
    'loc.coming.2': 'Quartier Latin',
    'loc.coming.3': 'Montmartre',
    'loc.coming.4': 'Gare du Nord',

    // Reviews
    'reviews.eyebrow': 'Avis Google',
    'reviews.title': 'Ils ont consigné chez nous.',
    'reviews.rating.label': 'sur Google',
    'reviews.rating.aria': '5 étoiles sur 5',
    'reviews.cta': 'Voir tous les avis sur Google',
    'reviews.visited': 'Visité',

    // How it works
    'how.eyebrow': 'Comment ça marche',
    'how.title': '4 étapes.',
    'how.title.accent': "C'est tout.",
    'how.step1.title': 'Localiser',
    'how.step1.desc': 'Trouvez le casier Consign le plus proche sur la carte. En ce moment : dans le Sentier.',
    'how.step2.title': 'Réserver',
    'how.step2.desc': 'Réservation en ligne à venir. Pour le moment, réservez directement sur la machine.',
    'how.step3.title': 'Déposer',
    'how.step3.desc': 'Déposez vos bagages dans votre casier sécurisé et fermez la porte.',
    'how.step4.title': 'Profiter',
    'how.step4.desc': 'Partez profiter de Paris les mains libres. Revenez entre 7h et 22h, tous les jours.',

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
    'contact.method.visit.hint': 'Ouvert 7h – 22h',
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

    // Business page
    'business.meta.title': 'Professionnels — Consign',
    'business.meta.description':
      "Hôtels, aparthotels, conciergeries, gestionnaires Airbnb : ajoutez une consigne automatisée à votre offre, sans personnel ni infrastructure.",
    'business.eyebrow': 'Professionnels',
    'business.title': 'Une consigne à bagages',
    'business.title.accent': 'dans votre offre.',
    'business.subtitle':
      "Hôtels, aparthotels, conciergeries, gestionnaires Airbnb : offrez à vos clients un endroit où déposer leurs bagages. On apporte le casier, vous touchez une part des revenus.",
    'business.cta': 'Discutons',
    'business.cases.eyebrow': 'Pensé pour',
    'business.case1.title': 'Hôtels',
    'business.case1.desc':
      "Réglez les arrivées tôt et les check-outs tardifs sans devoir staffer une bagagerie.",
    'business.case2.title': 'Aparthotels & B&B',
    'business.case2.desc': "Pas de réception ? Pas de souci. Les clients déposent de 7h à 22h.",
    'business.case3.title': 'Gestionnaires Airbnb',
    'business.case3.desc':
      "Fini les remises de clés acrobatiques et les fenêtres de check-in compliquées.",
    'business.benefits.eyebrow': 'Pourquoi en partenaire',
    'business.benefits.title': 'Asset-light, brand-loud, hands-off.',
    'business.benefit1.title': "Rien à acheter",
    'business.benefit1.desc':
      "On apporte le casier, le logiciel, le support. Vous apportez l'emplacement.",
    'business.benefit2.title': 'Part des revenus',
    'business.benefit2.desc': "Vous gagnez sur chaque casier que vos clients réservent.",
    'business.benefit3.title': 'Co-branding',
    'business.benefit3.desc':
      "Votre logo sur le casier, votre nom dans le mail de confirmation.",
    'business.benefit4.title': 'Support 24h/24',
    'business.benefit4.desc':
      "On gère réservations, paiements et SAV. Vous n'avez rien à faire.",
    'business.steps.eyebrow': 'Comment ça marche',
    'business.step1.title': "Parlez-nous de votre spot",
    'business.step1.desc': "Un échange rapide pour valider la pertinence et le trafic.",
    'business.step2.title': 'On installe',
    'business.step2.desc':
      "Casier livré, connecté et brandé avec votre logo.",
    'business.step3.title': 'Vos clients réservent',
    'business.step3.desc':
      "On gère réservations, paiements et SAV de bout en bout.",
    'business.step4.title': 'Vous touchez',
    'business.step4.desc':
      "Part des revenus versée chaque mois. Tableau de bord inclus.",
    'business.contact.title': 'On en parle ?',
    'business.contact.subtitle':
      "Donnez-nous quelques infos et on revient vite vers vous, généralement sous 24h.",
    'business.contact.name': 'Votre nom',
    'business.contact.business': "Nom de l'hôtel / établissement",
    'business.contact.email': 'Votre email',
    'business.contact.spot': "Adresse de l'emplacement",
    'business.contact.message': 'Tout ce que vous voulez nous dire',
    'business.contact.submit': 'Démarrer la conversation',

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
    'pricing.cta': 'Trouver un casier',
    'pricing.faq.link': 'Des questions ? Consultez la FAQ',

    // Footer
    'footer.tagline': 'Paris, les mains libres.',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'footer.terms': "Conditions d'utilisation",
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
