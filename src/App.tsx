import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home/Home";
import Questionnaire from "./pages/Questionnaire";

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
