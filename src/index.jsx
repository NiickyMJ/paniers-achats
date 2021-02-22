import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Appli from './Appli';

const baseName = (window.location.href.search(/github\.io/) !== -1) ? "/panier-achats-pvt-gr2" : "";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Appli />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);