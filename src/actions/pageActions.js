import Axios from 'axios';

const apiUrl = 'http://0.0.0.0:8080/api/';

export const getPageSuccess = (page) => {
  return {
    type: 'GET_PAGE_SUCCESS',
    page
  };
};

export const getPage = (pageSlug = 'home') => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl + 'get_page', {
      params: {
        slug: pageSlug
      }
    })
      .then(response => {
        // Dispatch another action
        // to consume data
        console.log('page ', response)
        dispatch(getPageSuccess(response.data));
      })
      .catch(error => {
        throw (error);
      });
  };
};
