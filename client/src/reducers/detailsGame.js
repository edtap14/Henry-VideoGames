const initialState = {
  detail: []
};

export function detailsGame(state = initialState, action) {
  // console.log(action, state);
  switch (action.type) {
    case "DETAILS_GAME":
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
}
