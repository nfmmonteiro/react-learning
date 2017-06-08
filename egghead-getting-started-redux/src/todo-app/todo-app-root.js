import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {TodoApp} from "./todo-app";
import {configureStore} from "./state/store";

const store = configureStore();

export const TodoAppRoot = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/:filter?" component={TodoApp} />
            </Router>
        </Provider>
    );
};
