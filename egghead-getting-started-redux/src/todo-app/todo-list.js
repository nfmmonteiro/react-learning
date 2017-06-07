import React from "react";
import {Todo} from "./todo";

export const TodoList = ({todos, onCompleteTodo}) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Todo key={todo.id}
                              {...todo}
                              onClick={id => onCompleteTodo(id)}/>
                    );
                })
            }
        </ul>
    );
};