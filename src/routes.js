import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';
import App from './components/App';
import Json2html from './components/common/Json2html';

export default (
  <Route path="/" component={App} props={{data: {fds: 'sdgfsa'}}}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/books" component={Book} />
  </Route>
);
