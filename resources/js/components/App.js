import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./Footer"
import Main from "./Main";
import Results from "./Results"
import ResultItem from "./ResultItem"
import Logindialog from "./Login"
import Registerdialog from './Register'
import ManageAd from "./ManageAd"

import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux"

import RootReducer from './../Reducers/RootReducer';
import PostReducer from "./../Reducers/PostReducer"
import EditDataReducer from "./../Reducers/EditDataReducer"
import SalesItemsReducer from "./../Reducers/SalesItemsReducer"

import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./theme/index"



const Store=createStore(combineReducers({
    RootReducer,PostReducer,EditDataReducer,SalesItemsReducer
}));

Store.subscribe(()=>{})

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div>
                    <Switch>
                      <Route exact path="/" component={Main} />
                      <Route exact path="/results" component={Results} />
                      <Route exact path="/result/:id" component={ResultItem} />
                      <Route exact path="/login" component={Logindialog} />
                      <Route exact path="/register" component={Registerdialog} />
                      <Route exact path="/post-ad" component={ManageAd} />
                    </Switch>
                    <Footer />
                </div>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById("app"));
