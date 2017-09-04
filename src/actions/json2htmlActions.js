import Axios from 'axios';

// move to globals
const apiUrl = 'http://0.0.0.0:8080/api/';

// This is the connection to the Reducer. This is where the action type is connected.
import { FETCH_JSON_SUCCESS } from '../reducers/json2htmlReducers';

/* Sync Action Creators */
//By default all actions are synchronous. But we need to call an outside API. 
// Here is where the action is created, a type, with a set of data.
export const fetchJsonSuccess = (json = []) => {
  console.log('!?!?!?!', json)

  return {
    type: FETCH_JSON_SUCCESS,
    json: json
  }
};

/* Async Action Creators */
// Here is the async creator. This is using Thunk that allows us to pass a function as the data in an action.
// it gets run on the other side. Here we calling our service, getArticleList, that returns a promise.
// then we dispatch the action when the promise is resolved.
export const getJson = (
  endpoint = 'get_page',
  params = { slug: 'home' }
) => (dispatch) => {

  Axios.get(apiUrl + endpoint, { params: params })
    .then((result) => {
      console.log('getPage result ', result);
      dispatch(fetchJsonSuccess(result.data));
    })
    .catch(error => {
      throw (error);
    });
};
