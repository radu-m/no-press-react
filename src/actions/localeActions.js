import Axios from 'axios';

const apiUrl = 'http://0.0.0.0:8080/api/locale';

export const fetchRegisteredLanguagesSuccess = (languages) => {
  return {
    type: 'FETCH_ALL_LANGUAGES_SUCCESS',
    languages
  };
};

export const fetchRegisteredLanguages = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl + '/get_registered_languages')
      .then(response => {
        // Dispatch another action
        // to consume data
        console.log('languages ', response)
        dispatch(fetchRegisteredLanguagesSuccess(response.data));
      })
      .catch(error => {
        throw (error);
      });
  };
};
