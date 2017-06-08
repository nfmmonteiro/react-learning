import {combineReducers} from "redux";
import { v4 } from "node-uuid";
import deepFreeze from "deep-freeze";
import {ActionTypes} from "./action-creators";

const todoReducer = (todo = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                id: v4(),
                text: action.text,
                completed: false
            };

        case ActionTypes.COMPLETE_TODO:
            if (todo.id === action.id) {
                return Object.assign({}, todo, {completed: !todo.completed});
            }
            return todo;

        default:
            return todo;
    }
};

const todosReducer = (todos = deepFreeze([]), action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return deepFreeze([...todos, todoReducer(undefined, action)]);

        case ActionTypes.COMPLETE_TODO:
            return deepFreeze(todos.map(todo => todoReducer(todo, action)));

        default:
            return todos;
    }
};

export const reducers = combineReducers({
    todos: todosReducer
});