import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Name from "./components/name";
import Next from "./components/next";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}  />
      <Route path="/more" component={Name}  />
      <Route path="/new" component={Next} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
