export type Locale = (typeof locales)[number];

export const locales = ['nl', 'en'] as const;
export const defaultLocale: Locale = 'nl';
