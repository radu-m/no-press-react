export default (state = [], action) => {
  switch (action.type) {

    case 'GET_PAGE_SUCCESS':
    	console.log('action ', action)
      return [
        ...state,
        Object.assign({}, action.page.data)
      ];

    default:
      return state;
  }
};
