import React from 'react';
import { Link } from 'react-router';
import { configureStore } from '../store/configureStore';
import * as pageActions from '../actions/json2htmlActions';
import Json2html from './common/Json2html';

// const store = configureStore();
// store.dispatch(pageActions.getPage('home'));

const App = (props) => {
  console.log('App props ', props)
  return (
    <div className="container">
      <Json2html />
    </div>
  );
};

export default App;
