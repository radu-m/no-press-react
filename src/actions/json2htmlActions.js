import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';
import utils, { noPressApiConfig } from '../constants/utils';

export function getJson (settings) {

  return function (dispatch) {
    return dispatch({
      type: actionTypes.FETCH_JSON,
      payload: axios.get(
        utils.makeFullApiUrl(
          noPressApiConfig,
          settings.endpoint
        ),
        {
          params: settings.params
        }
      ).then((result) => {
      console.log('-----', result);
      return result.data;
      })
    });
  };
}
