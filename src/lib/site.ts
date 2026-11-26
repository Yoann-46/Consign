/** Single source of truth for the one Consign location. */
export const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=67+rue+de+Cl%C3%A9ry+75002+Paris';
export const ADDRESS_SHORT = '67 rue de Cléry';

/** Prices in euros, all taxes included (T&C). Half-day = up to 4 h, day = 24 h. */
export const PRICES = {
  m: { dims: '45 × 55 × 33', half: 6, day: 11 },
  l: { dims: '45 × 55 × 85', half: 9, day: 14 },
} as const;

/** Phone + WhatsApp (same number, as published on /contact). */
export const PHONE_DISPLAY = '+33 6 14 01 04 48';
export const PHONE_TEL = 'tel:+33614010448';
export const WHATSAPP_URL = 'https://wa.me/33614010448';
export const EMAIL = 'contact@consignlocker.com';
export const GOOGLE_REVIEWS_COUNT = 61;
/** Google Maps place page (reviews). */
export const GOOGLE_PLACE_URL =
  'https://maps.google.com/?cid=8880977725920845078';
