import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './container/AppContainer';
import reportWebVitals from './reportWebVitals';
import { MoviesProvider } from './store/reducers/MoviesContext';

ReactDOM.render(
    <MoviesProvider>
        <Router>
            <AppContainer />
        </Router>
    </MoviesProvider>,
    document.getElementById('root')
);

reportWebVitals();
