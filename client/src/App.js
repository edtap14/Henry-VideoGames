import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Landing from "./views/Landing";
import PageNotFound from "./views/PageNotFound";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/pagenotfound" component={PageNotFound} />
    </div>
  );
}

export default App;
