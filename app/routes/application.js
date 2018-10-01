import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  intl: service(),
  beforeModel() {
    /* NOTE: if you lazily load translations, here is also where you would load them via `intl.addTranslations` */
    // quick and dirty code to set the best locale
    const supportedLocales = ['en-US', 'es'];
    const browserLocales = navigator.languages;
    const locales = browserLocales.filter(locale => {
      return supportedLocales.includes(locale);
    });
    return this.get('intl').setLocale(locales); /* array optional */
  }
});
