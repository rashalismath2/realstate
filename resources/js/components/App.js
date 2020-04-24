import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Nav";
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                      <Route exact path="/" component={Main} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
