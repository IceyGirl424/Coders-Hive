import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import MainChatrooms from "./MainChatrooms";

function Parent(){
    return(
        <Router>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/MainChatrooms" component={MainChatrooms} />
                </Switch>
            </div>
        </Router>

    );
}

export default Parent;