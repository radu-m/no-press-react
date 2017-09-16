// Set up your root reducer here...
import { combineReducers } from 'redux';

import jsn2htmlReducer from './json2htmlReducers';
import locale from './localeReducers';

export default combineReducers({
  json2html: jsn2htmlReducer,
  locale: locale
});
