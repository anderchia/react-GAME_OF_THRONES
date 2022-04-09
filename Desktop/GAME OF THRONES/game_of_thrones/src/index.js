import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';

const locale = navigator.language;
let lang;
if (locale==="es") {
   lang = Spanish;
} else {
     if (locale === "en"){  
       lang = English;
     }
}

ReactDOM.render(
   <IntlProvider locale ={locale} messages={Spanish}>
       <App />
   </IntlProvider>,
   document.getElementById('root')
);
serviceWorker.unregister();




const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
