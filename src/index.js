import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './container/AppContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
      <AppContainer />
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
