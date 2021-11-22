import { combineReducers } from "redux";
import { allGames } from "./getGames";
import { searchGame } from "./searchGame";
import { detailsGame } from "./detailsGame";

const rootReducer = combineReducers({
  games: allGames,
  fgames: searchGame,
  dgames: detailsGame
});

export default rootReducer;
