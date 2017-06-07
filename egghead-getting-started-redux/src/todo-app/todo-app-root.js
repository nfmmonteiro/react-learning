import React from "react";
import {Provider} from "react-redux";
import {TodoApp} from "./todo-app";
import {configureStore} from "./state/store";

const store = configureStore();

export const TodoAppRoot = () => {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
};
