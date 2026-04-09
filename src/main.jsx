import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App.jsx';
import { detectLocale, getMessages } from './i18n/index.js';
import './styles/globals.css';

const locale   = detectLocale();
const messages = getMessages(locale);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages} defaultLocale="fr">
      <App />
    </IntlProvider>
  </React.StrictMode>
);