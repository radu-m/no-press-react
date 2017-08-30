export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_ALL_LANGUAGES_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.languages)
      ];

    default:
      return state;
  }
};
