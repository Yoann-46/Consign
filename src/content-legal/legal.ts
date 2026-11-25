/**
 * Legal texts — DRAFTS to be validated by Consign. Only facts known from
 * the site are written; everything else is a `todo`.
 */
const contact = 'consignlocker@gmail.com · +33 6 14 01 04 48';
const host = 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA';

export const legal = {
  fr: {
    todoLabel: 'À compléter :',
    privacy: {
      title: 'Confidentialité',
      updated: 'Brouillon — à valider',
      intro: 'Comment Consign traite les données personnelles sur ce site et à la machine du 67 rue de Cléry.',
      sections: [
        { h: 'Responsable du traitement', p: [`Consign — contact : ${contact}.`], todo: 'raison sociale, forme juridique, adresse du siège, SIRET.' },
        { h: 'Mesure d’audience (Google Analytics)', p: [
          'Avec votre accord uniquement, nous utilisons Google Analytics 4 (Google Ireland Ltd) pour mesurer la fréquentation : pages vues, type d’appareil, ville approximative. Sans accord, rien n’est chargé.',
          'Cookies déposés après accord : <code>_ga</code> et <code>_ga_*</code>, durée maximale 13 mois. Vous pouvez retirer votre accord à tout moment via « Gérer les cookies » en bas de page.',
        ], todo: 'durée de conservation des données réglée dans Google Analytics (2 ou 14 mois).' },
        { h: 'Formulaires de contact', p: ['Les formulaires « Contact » et « Professionnels » ouvrent votre logiciel de messagerie avec un message pré-rempli. Le site n’enregistre rien : seul l’e‑mail que vous choisissez d’envoyer nous parvient.'], todo: 'durée de conservation des e‑mails reçus.' },
        { h: 'À la machine', p: ['Pour vous envoyer le QR code qui rouvre votre casier, la machine vous demande une adresse e‑mail. Le paiement se fait par carte bancaire sur la machine.'], todo: 'nom du prestataire de la machine et du paiement, données conservées, durée de conservation.' },
        { h: 'Disponibilité en direct', p: ['Le compteur de casiers libres n’utilise aucune donnée personnelle.'] },
        { h: 'Hébergement et transferts', p: [`Le site est hébergé par ${host}. Google et Vercel peuvent traiter des données aux États‑Unis, dans le cadre du Data Privacy Framework UE‑États‑Unis ou de clauses contractuelles types.`] },
        { h: 'Vos droits', p: [`Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité. Écrivez-nous : ${contact}. Vous pouvez aussi saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).`] },
      ],
    },
    terms: {
      title: 'Conditions d’utilisation',
      updated: 'Brouillon — à valider',
      intro: 'Conditions d’utilisation du service de consigne Consign, 67 rue de Cléry, 75002 Paris.',
      sections: [
        { h: 'Éditeur du site', p: [`Contact : ${contact}. Hébergeur : ${host}.`], todo: 'raison sociale, siège, SIRET, directeur de la publication.' },
        { h: 'Accès', p: ['Les casiers se trouvent dans une laverie en libre-service, ouverte tous les jours de 7h à 22h. En dehors de ces horaires, la laverie est fermée et les casiers ne sont pas accessibles.'] },
        { h: 'Casiers et tarifs', list: [
          'Moyen (45 × 55 × 33 cm) : 7 € (3 h), 9 € (4 h), 11 € (journée).',
          'Grand (45 × 55 × 85 cm) : 9 € (3 h), 11 € (4 h), 13 € (journée).',
          'Paiement par carte bancaire (Visa, Mastercard, Amex) à la machine. Pas d’espèces.',
        ], todo: 'confirmer si les prix sont TTC et la définition exacte de « journée » (jusqu’à 22h ? 24 h ?).' },
        { h: 'Fonctionnement', p: ['Vous choisissez la taille et la durée à la machine puis payez par carte : le casier s’ouvre. Vous recevez un QR code par e‑mail ; il permet de rouvrir le casier pour récupérer vos bagages.'] },
        { h: 'Dépassement', p: ['Si la durée payée est dépassée, des frais complémentaires sont facturés. Après 22h, la laverie est fermée et le casier n’est plus accessible jusqu’à sa réouverture.'], todo: 'montant ou mode de calcul des frais complémentaires.' },
        { h: 'Objets interdits', todo: 'liste des objets interdits (denrées périssables, matières dangereuses, animaux, objets illicites…).' },
        { h: 'Responsabilité', todo: 'limite de responsabilité, valeur maximale couverte, procédure en cas de litige.' },
        { h: 'Objets non récupérés', todo: 'délai et procédure pour les bagages non récupérés.' },
        { h: 'Réclamations', p: [`Pour toute question ou réclamation : ${contact}.`], todo: 'médiateur de la consommation (obligatoire pour les consommateurs).' },
      ],
    },
  },
  en: {
    todoLabel: 'To complete:',
    privacy: {
      title: 'Privacy',
      updated: 'Draft — pending validation',
      intro: 'How Consign handles personal data on this website and at the machine at 67 rue de Cléry.',
      sections: [
        { h: 'Data controller', p: [`Consign — contact: ${contact}.`], todo: 'company name, legal form, registered address, SIRET.' },
        { h: 'Audience measurement (Google Analytics)', p: [
          'Only with your consent, we use Google Analytics 4 (Google Ireland Ltd) to measure visits: pages viewed, device type, approximate city. Without consent, nothing is loaded.',
          'Cookies set after consent: <code>_ga</code> and <code>_ga_*</code>, for up to 13 months. You can withdraw consent at any time via “Cookie settings” at the bottom of the page.',
        ], todo: 'data retention period set in Google Analytics (2 or 14 months).' },
        { h: 'Contact forms', p: ['The Contact and Business forms open your own email app with a pre-filled message. The site stores nothing: we only receive the email you choose to send.'], todo: 'retention period for emails received.' },
        { h: 'At the machine', p: ['To send you the QR code that reopens your locker, the machine asks for an email address. Payment is made by card at the machine.'], todo: 'name of the machine and payment provider, data kept, retention period.' },
        { h: 'Live availability', p: ['The free-locker counter uses no personal data.'] },
        { h: 'Hosting and transfers', p: [`The site is hosted by ${host}. Google and Vercel may process data in the United States, under the EU‑US Data Privacy Framework or standard contractual clauses.`] },
        { h: 'Your rights', p: [`You have the right to access, rectify, erase, object, restrict and port your data. Write to us: ${contact}. You can also contact the French data protection authority, CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).`] },
      ],
    },
    terms: {
      title: 'Terms of use',
      updated: 'Draft — pending validation',
      intro: 'Terms of use of the Consign luggage storage service, 67 rue de Cléry, 75002 Paris.',
      sections: [
        { h: 'Publisher', p: [`Contact: ${contact}. Host: ${host}.`], todo: 'company name, registered address, SIRET, publication director.' },
        { h: 'Access', p: ['The lockers are inside a self-service laundromat, open every day from 7am to 10pm. Outside these hours the laundromat is closed and the lockers can’t be reached.'] },
        { h: 'Lockers and prices', list: [
          'Medium (45 × 55 × 33 cm): €7 (3 h), €9 (4 h), €11 (full day).',
          'Large (45 × 55 × 85 cm): €9 (3 h), €11 (4 h), €13 (full day).',
          'Payment by card (Visa, Mastercard, Amex) at the machine. No cash.',
        ], todo: 'confirm prices include VAT and the exact meaning of “full day” (until 10pm? 24 h?).' },
        { h: 'How it works', p: ['Choose a size and duration at the machine and pay by card: the locker opens. We email you a QR code, which reopens the locker so you can collect your bags.'] },
        { h: 'Overstay', p: ['If you go over the time you paid for, extra fees are charged. After 10pm the laundromat is closed and the locker can’t be reached until it reopens.'], todo: 'amount or calculation of the extra fees.' },
        { h: 'Prohibited items', todo: 'list of prohibited items (perishable food, hazardous materials, animals, illegal items…).' },
        { h: 'Liability', todo: 'liability limit, maximum value covered, dispute procedure.' },
        { h: 'Uncollected items', todo: 'time limit and procedure for uncollected luggage.' },
        { h: 'Complaints', p: [`For any question or complaint: ${contact}.`], todo: 'consumer mediator (mandatory for consumers in France).' },
      ],
    },
  },
} as const;
