import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

import MainChatrooms from "./MainChatrooms";
import MenuNav from "./MenuNav";
import Login from "./Login";


function Parent() {
  return (
    <Router>

    <Switch>
      <Route exact path="/" component={Login} />


    <Router>
      <div className="content">
        <MenuNav />
        <Switch>
          <Route path="/Home" exact component={App} />
          <Route path="/MainChatrooms" component={MainChatrooms} />
          {/* <Route path="/Login" component={Login} /> */}
        </Switch>
      </div>
    </Router>

    </Switch>
    </Router>
  );
}

export default Parent;
