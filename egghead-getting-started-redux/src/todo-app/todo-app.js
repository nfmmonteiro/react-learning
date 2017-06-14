import React from "react";
import "./todo-app.css";
import {AddTodoContainer} from "./add-todo.container";
import {FilterLinkList} from "./filter-todo-list";
import {VisibleTodosContainer} from "./visible-todos.container";

export const TodoApp = () => {
    return (
        <div>
            <h1>Todos App</h1>
            <AddTodoContainer />
            <FilterLinkList />
            <hr />
            <VisibleTodosContainer/>
        </div>
    );
};