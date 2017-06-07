import React from "react";
import {Provider} from "react-redux";
import {AddTodoContainer} from "./add-todo.container";
import {FilterTodoList} from "./filter-todo-list";
import {VisibleTodosContainer} from "./visible-todos.container";
import {store} from "./state/store";
import "./todo-app.css";

export const TodoApp = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Todos App</h1>
                <AddTodoContainer />
                <FilterTodoList />
                <hr />
                <VisibleTodosContainer />
            </div>
        </Provider>
    );
};

store.subscribe(() => {
    console.log('store was updated', store.getState());
});