const initialState = {
  filterGenres: []
};

export function filterGenresGames(state = initialState, action) {
  switch (action.type) {
    case "FILTER_GENRES":
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
}
