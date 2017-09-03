import Axios from 'axios';

// move to globals
const apiUrl = 'http://0.0.0.0:8080/api/';

// This is the connection to the Reducer. This is where the action type is connected.
import { FETCH_PAGE_SUCCESS, CLEAR_PAGE } from '../reducers/pageReducers';

/* Sync Action Creators */
//By default all actions are synchronous. But we need to call an outside API. 
// Here is where the action is created, a type, with a set of data.
export const fetchPageSuccess = (page = []) => {
console.log('!?!?!?!', page)

return {
  type: FETCH_PAGE_SUCCESS,
  page: page
}};

// This is also a creator, a simple one. All it will do is remove what ever state is in the store for articles.
export const clearPage = () => ({ type: CLEAR_PAGE });

/* Async Action Creators */
// Here is the async creator. This is using Thunk that allows us to pass a function as the data in an action.
// it gets run on the other side. Here we calling our service, getArticleList, that returns a promise.
// then we dispatch the action when the promise is resolved.
export const getPage = (pageSlug = 'home') => (dispatch) => {
  Axios.get(apiUrl + 'get_page', {
      params: {
        slug: pageSlug
      }
    })
    .then((result) => {
      console.log('getPage result ', result);
      dispatch(fetchPageSuccess(result.data.data.page));
    })
    .catch(error => {
      throw (error);
    });
};
