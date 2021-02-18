import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Appli from './Appli';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Appli />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);