import { combineReducers } from "redux";
import { allGames } from "./getGames";

const rootReducer = combineReducers({
  games: allGames
});

export default rootReducer;
