import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Comp/Main";
import PopularMovies from "./PopularMovies";
import KidsMovies from "./KidsMovies";
import DramaMovies from "./DramaMovies";
import ComedyMovies from "./ComedyMovies";
import ActionMovies from "./ActionMovies";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/kids" component={KidsMovies} />
      <Route path="/drama" component={DramaMovies} />
      <Route path="/comedy" component={ComedyMovies} />
      <Route path="/action" component={ActionMovies} />
    </Router>
  );
};

export default App;