const initialState = {
  games: []
};

export function allGames(state = initialState, action) {
  switch (action.type) {
    case "GET_GAMES":
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
}
