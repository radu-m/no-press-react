// Babel polyfill will emulate a full
// ES2015 environemnt so we can enjoy goodies like
// Promises
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';


// import './styles/main.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico

import Root from './components/Root';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
