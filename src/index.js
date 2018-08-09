/* eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import configureStore from './store/configureStore';
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import { Provider } from 'react-redux';

import App from "./components/App";

import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={App} />
                <Route exact path="/courses" component={App} />
                <Route exact path="/course" component={App} />
                <Route exact path="/course/:id" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);





