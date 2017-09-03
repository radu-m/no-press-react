// This is declaring the types of actions. 
export const FETCH_PAGE_SUCCESS = `FETCH_PAGE_SUCCESS`;

// This will be called for every dispatch. It is passed the type of action.
export default function(state = [], { type, page }) {
  // Here I ignore or handle each action type.
  switch (type) {
    case FETCH_PAGE_SUCCESS:
      return [
        ...state,
        page
      ];
      // if I don't care about the action I just pass along the state that was given.
    default:
      return state;
  }
}

export function getPageSelector(state) {
  return state.property
}
