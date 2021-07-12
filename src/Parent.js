import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

import MainChatrooms from "./MainChatrooms";
import MenuNav from "./MenuNav";
import Login from "./Login";

function Parent() {
  return (
    <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        
          <div className="content">
            <MenuNav />
            <Switch>
              <Route path="/Home" exact component={App} />
              <Route path="/MainChatrooms" component={MainChatrooms} />
              {/* <Route path="/Login" component={Login} /> */}
            </Switch>
          </div>
        
      </Switch>
    </HashRouter>
    </React.StrictMode>
  );
}

export default Parent;
