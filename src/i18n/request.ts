import { getUserLocale } from '@/services/locale.service';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});