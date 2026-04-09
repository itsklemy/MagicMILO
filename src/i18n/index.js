import fr from './fr.json';
import en from './en.json';
import es from './es.json';
import de from './de.json';
import it from './it.json';

const MESSAGES = { fr, en, es, de, it };

export function detectLocale() {
  const browserLang = navigator.language?.split('-')[0] || 'fr';
  return MESSAGES[browserLang] ? browserLang : 'fr';
}

export function getMessages(locale) {
  return MESSAGES[locale] || MESSAGES['fr'];
}

export const SUPPORTED_LOCALES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English'  },
  { code: 'es', label: 'Español'  },
  { code: 'de', label: 'Deutsch'  },
  { code: 'it', label: 'Italiano' },
];