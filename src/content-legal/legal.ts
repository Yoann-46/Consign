/**
 * Legal texts — from the T&C supplied by Consign (2026-11-26).
 * A section may still carry `todo` (rendered as a visible note) if a fact is missing.
 */
const email = 'contact@consignlocker.com';
const mail = `<a href="mailto:${email}">${email}</a>`;
const host = 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA';

const companyFr = [
  'Les casiers à bagages sont exploités par CONSIGN, SAS (société par actions simplifiée) au capital de 1 000 €.',
  'Siège social : 59 rue de Ponthieu, 75008 Paris, France.',
  'SIREN : 132 982 489 – SIRET : 132 982 489 00016. Immatriculée au Registre national des entreprises (RNE).',
  `Contact : ${mail}.`,
];
const companyEn = [
  'The luggage lockers are operated by CONSIGN, a French SAS (simplified joint-stock company) with share capital of €1,000.',
  'Registered office: 59 rue de Ponthieu, 75008 Paris, France.',
  'SIREN: 132 982 489 – SIRET: 132 982 489 00016. Registered with the French National Business Register (RNE).',
  `Contact: ${mail}.`,
];

export const legal = {
  fr: {
    todoLabel: 'À compléter :',
    privacy: {
      title: 'Confidentialité',
      updated: 'Mis à jour le 26 novembre 2026',
      intro: 'Comment CONSIGN traite les données personnelles, à la machine du 67 rue de Cléry et sur ce site.',
      sections: [
        { h: 'Responsable du traitement', p: ['CONSIGN, SAS, 59 rue de Ponthieu, 75008 Paris (SIRET 132 982 489 00016), est responsable du traitement.', `Contact : ${mail}.`] },
        { h: 'Données collectées à la location', p: ['Adresse e‑mail, détails de la location et confirmation de paiement. Les données de carte sont traitées par le prestataire de paiement : CONSIGN ne voit ni ne conserve jamais le numéro complet de la carte.'] },
        { h: 'Utilisation', p: ['Uniquement pour fournir la location, envoyer le reçu, facturer un éventuel dépassement et traiter les demandes d’assistance.'] },
        { h: 'Conservation', p: ['Les données sont conservées uniquement le temps nécessaire à la location et aux demandes qui s’y rapportent, puis supprimées. Les pièces comptables sont conservées pendant la durée imposée par la loi française.'] },
        { h: 'Partage', p: ['Les données ne sont jamais vendues ni utilisées à des fins commerciales. Elles ne sont partagées qu’avec les prestataires nécessaires au service (paiement, e‑mail).'] },
        { h: 'Vidéosurveillance', p: ['Si les locaux sont filmés, les images servent uniquement à la sécurité et sont conservées 30 jours au maximum.'] },
        { h: 'Mesure d’audience du site (Google Analytics)', p: [
          'Avec votre accord uniquement, nous utilisons Google Analytics 4 (Google Ireland Ltd) pour mesurer la fréquentation du site : pages vues, type d’appareil, ville approximative. Sans accord, rien n’est chargé.',
          'Cookies déposés après accord : <code>_ga</code> et <code>_ga_*</code>, durée maximale 13 mois. Vous pouvez retirer votre accord à tout moment via « Gérer les cookies » en bas de page.',
        ] },
        { h: 'Formulaire de contact', p: ['Le formulaire « Contact » ouvre votre logiciel de messagerie avec un message pré-rempli. Le site n’enregistre rien : seul l’e‑mail que vous choisissez d’envoyer nous parvient.'] },
        { h: 'Disponibilité en direct', p: ['Le compteur de casiers libres n’utilise aucune donnée personnelle.'] },
        { h: 'Hébergement et transferts', p: [`Le site est hébergé par ${host}. Google et Vercel peuvent traiter des données aux États‑Unis, dans le cadre du Data Privacy Framework UE‑États‑Unis ou de clauses contractuelles types.`] },
        { h: 'Vos droits', p: [`Vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition. Écrivez-nous à ${mail}. Vous pouvez aussi saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).`] },
      ],
    },
    terms: {
      title: 'Conditions générales',
      updated: 'Mis à jour le 26 novembre 2026',
      intro: 'Conditions de location des casiers à bagages CONSIGN, 67 rue de Cléry, 75002 Paris.',
      sections: [
        { h: 'Informations sur la société', p: [...companyFr, `Directeur de la publication : le représentant légal de CONSIGN. Hébergeur du site : ${host}.`] },

        { h: 'Paiement', part: true },
        { h: '1. Champ d’application', p: ['Ces conditions s’appliquent à toute location de casier à bagages auprès de CONSIGN. En payant une location, le client accepte ces conditions ainsi que les conditions « Casiers à bagages » ci-dessous.'] },
        { h: '2. Prix', p: ['Les prix sont en euros, toutes taxes comprises. Le prix applicable est celui affiché au moment de la location.'], list: [
          'Casier Moyen (45 × 55 × 33 cm, 1 valise cabine) : 6 € la demi-journée (jusqu’à 4 heures), 11 € la journée (24 heures).',
          'Casier Grand (45 × 55 × 85 cm, 1 valise soute ou jusqu’à 3 valises cabine) : 9 € la demi-journée (jusqu’à 4 heures), 14 € la journée (24 heures).',
          'CONSIGN peut modifier ses prix à tout moment. Une modification ne s’applique jamais à une location déjà payée.',
        ] },
        { h: '3. Paiement', p: ['Le paiement se fait uniquement par carte bancaire, à la machine, au moment de la location. En payant, le client autorise CONSIGN à débiter la même carte pour tout dépassement prévu à l’article 4.'] },
        { h: '4. Durée de location et dépassement', p: ['La durée de location commence au début de la location et court pendant la durée payée.'], list: [
          'Si une location à la demi-journée dépasse 4 heures, elle devient automatiquement une location à la journée. La différence entre le prix de la journée et celui de la demi-journée est facturée.',
          'Si une location à la journée dépasse 24 heures, une journée supplémentaire est facturée automatiquement pour chaque nouvelle période de 24 heures entamée.',
          'La durée maximale de location est de 2 mois.',
        ] },
        { h: '5. Ni annulation, ni remboursement', p: ['Une fois commencée, une location ne peut être ni annulée ni remboursée, y compris si le casier est vidé avant la fin de la durée payée. Le client demande expressément que le service commence immédiatement et renonce à son droit de rétractation dès le début de la location.'] },
        { h: '6. Reçu', p: ['Un reçu est envoyé par e‑mail à l’adresse indiquée lors de la location.'] },
        { h: '7. Réclamations', p: [`Les réclamations sont à adresser à ${mail}. À défaut de solution, le client peut saisir gratuitement le médiateur de la consommation, dont les coordonnées seront indiquées ici dès sa désignation.`] },
        { h: '8. Droit applicable', p: ['Ces conditions sont soumises au droit français. Tout litige relève des tribunaux français compétents.'] },

        { h: 'Casiers à bagages', part: true },
        { h: '1. Le service', p: ['CONSIGN loue des casiers en libre-service pour déposer des bagages. L’accès au casier se fait grâce au QR code ou au lien envoyé par e‑mail lors de la location. Le client doit conserver ce QR code ou cet e‑mail et ne pas le partager.', 'Les casiers se trouvent dans une laverie en libre-service, ouverte tous les jours de 7h à 22h. En dehors de ces horaires, les casiers ne sont pas accessibles.'] },
        { h: '2. Tailles des casiers', p: ['Un casier Moyen accueille 1 valise cabine. Un casier Grand accueille 1 valise soute ou jusqu’à 3 valises cabine. Le client choisit la taille adaptée. Les affaires doivent entrer sans forcer la porte.'] },
        { h: '3. Objets interdits', p: ['Il est interdit de déposer dans un casier :'], list: [
          'armes, munitions, explosifs et feux d’artifice ;',
          'produits inflammables, toxiques, corrosifs ou radioactifs (bouteilles de gaz, carburant, solvants, produits chimiques) ;',
          'marchandises illégales, notamment drogues, contrefaçons ou objets volés ;',
          'denrées périssables et tout ce qui sent, fuit ou attire les nuisibles ;',
          'animaux vivants et plantes ;',
          'restes humains ou matières biologiques ;',
          'espèces, bijoux, métaux précieux et autres objets de valeur ;',
          'pièces d’identité, passeports et papiers personnels importants ;',
          'médicaments dont le client pourrait avoir besoin en urgence.',
        ] },
        { h: '4. Responsabilité du client', p: ['Le client est responsable du contenu du casier. CONSIGN ne contrôle pas le contenu des casiers et n’en a pas connaissance. Le client ne doit pas endommager le casier ni l’utiliser à des fins illégales. Tout dommage causé par le client ou ses affaires peut lui être facturé.'] },
        { h: '5. Ouverture d’un casier', p: ['CONSIGN peut ouvrir un casier sans préavis en cas de suspicion d’objet interdit, en cas d’urgence, à la demande des autorités ou une fois la durée maximale de location dépassée.'] },
        { h: '6. Durée maximale et objets non récupérés', p: [`La durée maximale de location est de 2 mois. Au-delà, CONSIGN peut vider le casier. Les objets retirés sont conservés 30 jours et peuvent être récupérés en écrivant à ${mail}, une fois les sommes dues réglées. Passé ce délai, ils peuvent être détruits.`] },
        { h: '7. QR code ou e‑mail perdu', p: [`En cas de perte du QR code ou de l’e‑mail, ou si le casier ne s’ouvre pas, le client contacte ${mail}. CONSIGN peut demander une pièce d’identité et une preuve de la location avant de donner accès au casier.`] },
        { h: '8. Données personnelles', p: ['CONSIGN est responsable du traitement. Le détail figure dans la page <a href="/fr/privacy">Confidentialité</a>.'] },
      ],
    },
  },
  en: {
    todoLabel: 'To complete:',
    privacy: {
      title: 'Privacy',
      updated: 'Updated 26 November 2026',
      intro: 'How CONSIGN handles personal data, at the machine at 67 rue de Cléry and on this website.',
      sections: [
        { h: 'Data controller', p: ['CONSIGN, SAS, 59 rue de Ponthieu, 75008 Paris, France (SIRET 132 982 489 00016), is the data controller.', `Contact: ${mail}.`] },
        { h: 'Data collected when you rent', p: ['Email address, booking details and payment confirmation. Card details are handled by the payment provider; CONSIGN never sees or stores the full card number.'] },
        { h: 'Use', p: ['Only to provide the rental, send the receipt, charge any extra time and handle support requests.'] },
        { h: 'Retention', p: ['Data is kept only as long as needed for the rental and any related request, then deleted. Accounting records are kept for the period required by French law.'] },
        { h: 'Sharing', p: ['Data is never sold and never used for marketing. It is shared only with the service providers needed to run the service (payment, email).'] },
        { h: 'Video surveillance', p: ['If the premises are filmed, images are used only for security and kept for no more than 30 days.'] },
        { h: 'Website analytics (Google Analytics)', p: [
          'Only with your consent, we use Google Analytics 4 (Google Ireland Ltd) to measure visits to this website: pages viewed, device type, approximate city. Without consent, nothing is loaded.',
          'Cookies set after consent: <code>_ga</code> and <code>_ga_*</code>, for up to 13 months. You can withdraw consent at any time via “Cookie settings” at the bottom of the page.',
        ] },
        { h: 'Contact form', p: ['The Contact form opens your own email app with a pre-filled message. The site stores nothing: we only receive the email you choose to send.'] },
        { h: 'Live availability', p: ['The free-locker counter uses no personal data.'] },
        { h: 'Hosting and transfers', p: [`The site is hosted by ${host}. Google and Vercel may process data in the United States, under the EU‑US Data Privacy Framework or standard contractual clauses.`] },
        { h: 'Your rights', p: [`You have the right to access, correct, delete and object, by writing to ${mail}. You can also complain to the French data protection authority, CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).`] },
      ],
    },
    terms: {
      title: 'Terms & conditions',
      updated: 'Updated 26 November 2026',
      intro: 'Rental terms for CONSIGN luggage lockers, 67 rue de Cléry, 75002 Paris.',
      sections: [
        { h: 'Company information', p: [...companyEn, `Publication director: the legal representative of CONSIGN. Website host: ${host}.`] },

        { h: 'Payments', part: true },
        { h: '1. Scope', p: ['These terms apply to every luggage locker rental with CONSIGN. By paying for a rental, the customer accepts these terms and the Luggage Locker terms below.'] },
        { h: '2. Prices', p: ['Prices are in euros and include all applicable taxes. The price shown at the time of rental applies.'], list: [
          'Medium locker (45 × 55 × 33 cm, 1 carry-on suitcase): €6 half-day (up to 4 hours), €11 day (24 hours).',
          'Large locker (45 × 55 × 85 cm, 1 checked suitcase or up to 3 carry-on suitcases): €9 half-day (up to 4 hours), €14 day (24 hours).',
          'CONSIGN may change its prices at any time. A change never affects a rental that has already been paid.',
        ] },
        { h: '3. Payment', p: ['Payment is by bank card only, at the machine, and is taken when the rental starts. By paying, the customer authorises CONSIGN to charge the same card for any extra time under section 4.'] },
        { h: '4. Rental period and extra time', p: ['The rental period starts when the rental begins and runs for the duration paid.'], list: [
          'If a Half-day rental lasts longer than 4 hours, it automatically becomes a Day rental. The difference between the Day price and the Half-day price is charged.',
          'If a Day rental lasts longer than 24 hours, one extra Day is charged automatically for each new 24-hour period started.',
          'The maximum rental period is 2 months.',
        ] },
        { h: '5. No cancellation, no refund', p: ['Once a rental has started, it cannot be cancelled and no refund is given. This includes a locker emptied before the end of the period paid. The customer expressly asks for the service to start immediately and accepts losing any right of withdrawal once the rental has started.'] },
        { h: '6. Receipt', p: ['A receipt is sent by email to the address given when renting.'] },
        { h: '7. Complaints', p: [`Complaints must be sent to ${mail}. If no solution is found, the customer may refer the matter free of charge to the consumer mediator, whose details will be given here once appointed.`] },
        { h: '8. Applicable law', p: ['These terms are governed by French law. Any dispute falls under the jurisdiction of the competent French courts.'] },

        { h: 'Luggage lockers', part: true },
        { h: '1. The service', p: ['CONSIGN rents self-service lockers for storing luggage. Access to the locker is given by a QR code or link sent by email when renting. The customer must keep this QR code or email safe and must not share it.', 'The lockers are inside a self-service laundromat, open every day from 7am to 10pm. Outside these hours the lockers can’t be reached.'] },
        { h: '2. Locker sizes', p: ['A Medium locker fits 1 carry-on suitcase. A Large locker fits 1 checked suitcase or up to 3 carry-on suitcases. The customer chooses the right size. Items must fit without forcing the door.'] },
        { h: '3. Prohibited items', p: ['The following must never be stored in a locker:'], list: [
          'weapons, ammunition, explosives and fireworks;',
          'flammable, toxic, corrosive or radioactive products (gas canisters, fuel, solvents, chemicals);',
          'illegal goods, including drugs and counterfeit or stolen goods;',
          'perishable food and anything that smells, leaks or attracts pests;',
          'live animals and plants;',
          'human remains or biological material;',
          'cash, jewellery, precious metals and other valuables;',
          'identity documents, passports and important personal papers;',
          'medicines the customer may need urgently.',
        ] },
        { h: '4. Customer responsibility', p: ['The customer is responsible for the content of the locker. CONSIGN does not check the content of lockers and has no knowledge of it. The customer must not damage the locker or use it for any illegal purpose. Any damage caused by the customer or their items may be charged to them.'] },
        { h: '5. Opening a locker', p: ['CONSIGN may open a locker without notice if it suspects a prohibited item, in an emergency, at the request of the authorities, or once the maximum rental period has passed.'] },
        { h: '6. Maximum period and unclaimed items', p: [`The maximum rental period is 2 months. After that, CONSIGN may empty the locker. Items removed are kept for 30 days and may be collected by contacting ${mail}, once the amounts due are paid. After that period, they may be disposed of.`] },
        { h: '7. Lost QR code or email', p: [`If the customer loses their QR code or email, or cannot open their locker, they must contact ${mail}. CONSIGN may ask for proof of identity and of the rental before giving access.`] },
        { h: '8. Personal data', p: ['CONSIGN is the data controller. Details are on the <a href="/privacy">Privacy</a> page.'] },
      ],
    },
  },
} as const;
