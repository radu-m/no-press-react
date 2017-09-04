// This is declaring the types of actions. 
export const FETCH_JSON_SUCCESS = `FETCH_JSON_SUCCESS`;

// This will be called for every dispatch. It is passed the type of action.
export default function(state = [], { type, json }) {
  // Here I ignore or handle each action type.
  switch (type) {
    case FETCH_JSON_SUCCESS:
      return [
        ...state,
        json
      ];
      // if I don't care about the action I just pass along the state that was given.
    default:
      return state;
  }
}

export function getPageSelector(state) {
  return state.property
}
