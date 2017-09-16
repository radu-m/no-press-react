import initialState from './initialState';

// This will be called for every dispatch. It is passed the type of action.
export default function(state = initialState.json2html, action) {
  console.log('///////////;',action)
  // Here I ignore or handle each action type.
  switch (action.type) {
    case 'FETCH_JSON_START':
      return {
        ...state,
        fetching: true
      };

    case 'FETCH_JSON_SUCCESS':
      return {
        ...state,
        fetching: false,
        fetched: true,
        json: action.payload()
      };

    case 'FETCH_JSON_ERROR':
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
}

export function getPageSelector(state) {
  return state;
}

