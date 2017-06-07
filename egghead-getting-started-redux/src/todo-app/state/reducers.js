import {combineReducers} from "redux";
import deepFreeze from "deep-freeze";
import {ActionTypes} from "./action-creators";
import {FilterTypes} from "./filter-types";

let todoId = 0;
const todoReducer = (todo = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                id: ++todoId,
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

const activeFilterReducer = (activeFilter = deepFreeze(FilterTypes.SHOW_ALL), action) => {
    switch (action.type) {

        case ActionTypes.CHANGE_FILTER:
            if (activeFilter !== action.filter) {
                return deepFreeze(action.filter);
            }
            return activeFilter;

        default:
            return activeFilter;
    }
};

export const reducers = combineReducers({
    todos: todosReducer,
    activeFilter: activeFilterReducer
});