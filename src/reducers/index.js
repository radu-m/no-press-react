// Set up your root reducer here...
import { combineReducers } from 'redux';

import books from './bookReducers';
import jsn2htmlReducer from './json2htmlReducers';
import locale from './localeReducers';

export default combineReducers({
  books: books,
  locale: locale,
  json: jsn2htmlReducer
});
