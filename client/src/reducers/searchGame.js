const initialState = {
  game: []
};

export function searchGame(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_GAME_SUCCESS":
      return {
        ...state,
        game: action.payload
      };
    default:
      return state;
  }
}
