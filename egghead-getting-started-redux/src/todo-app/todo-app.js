import React from "react";
import "./todo-app.css";
import {AddTodoContainer} from "./add-todo.container";
import {FilterLinkList} from "./filter-todo-list";
import {VisibleTodosContainer} from "./visible-todos.container";

export const TodoApp = ({match}) => {
    const activeFilter = match.params.filter;
    return (
        <div>
            <h1>Todos App</h1>
            <AddTodoContainer />
            <FilterLinkList activeFilter={activeFilter}/>
            <hr />
            <VisibleTodosContainer activeFilter={activeFilter}/>
        </div>
    );
};