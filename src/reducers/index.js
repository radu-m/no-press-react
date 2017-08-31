// Set up your root reducer here...
import { combineReducers } from 'redux';

import books from './bookReducers';
import pages from './pageReducers';
import locale from './localeReducers';

export default combineReducers({
  books: books,
  locale: locale,
  page: pages
});
