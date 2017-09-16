import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/common/HomePage';
import App from './components/App';

export default (
  <Route path="/" component={App} props={{data: {fds: 'sdgfsa'}}}>
    <IndexRoute component={Home} />
  </Route>
);
