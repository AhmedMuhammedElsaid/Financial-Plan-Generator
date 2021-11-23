import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Layout/Navbar"));
const Questionnaire = lazy(() => import("./pages/Questionnaire"));
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questionnaire" component={Questionnaire} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
