import { combineReducers } from "redux";
import { allGames } from "./getGames";
import { searchGame } from "./searchGame";

const rootReducer = combineReducers({
  games: allGames,
  fgames: searchGame
});

export default rootReducer;
