import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Landing from "./views/Landing";
import PageNotFound from "./views/PageNotFound";
import Home from "./views/Home";
import YourGame from "./views/YourGame";
import SearchGame from "./components/SearchGame";
import GameDitails from "./views/GameDetails";
import Filtros from "./components/Filtros";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/searchgame" component={SearchGame} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/pagenotfound" component={PageNotFound} />
      <Route exact path="/yourgame" component={YourGame} />
      <Route exact path="/details/:id" component={GameDitails} />
      <Route exact path="/filters" component={Filtros} />
    </div>
  );
}

export default App;
