export const defaultLocale = 'en' as const;
export const locales = ['en', 'nl'] as const;
export type Locale = typeof locales[number];

export const getLangDefaut = () => {
    //handle logic
    //Check cookie, session, local storage
    return defaultLocale ;
}
