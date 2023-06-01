import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import DailyIframe from '@daily-co/daily-js';
import BrowserUnsupported from './components/BrowserUnsupported/BrowserUnsupported';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  DailyIframe.supportedBrowser().supported ? <App /> : <BrowserUnsupported />
);