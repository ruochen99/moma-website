import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/Scroll/ScrollToTop';
import Moma from './Moma';
import './assets/scss/moma.scss';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <Moma />
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
