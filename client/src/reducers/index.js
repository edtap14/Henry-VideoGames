import { combineReducers } from "redux";
import { allGames } from "./getGames";
import { searchGame } from "./searchGame";
import { detailsGame } from "./detailsGame";
import { filterGenresGames } from "./filterGenres";

const rootReducer = combineReducers({
  games: allGames,
  fgames: searchGame,
  dgames: detailsGame,
  filGames: filterGenresGames
});

export default rootReducer;
