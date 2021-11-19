import { combineReducers } from "redux";
import { allGames } from "./getGames";
// import { prevNext } from "./prevPage";

const rootReducer = combineReducers({
  games: allGames
  // prev: prevNext,
  // next: prevNext
});

export default rootReducer;
