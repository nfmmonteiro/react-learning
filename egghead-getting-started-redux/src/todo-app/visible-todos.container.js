import React from "react";
import {connect} from "react-redux";
import {completeTodoAction} from "./state/action-creators";
import {FilterTypes} from "./state/filter-types";
import {EmptyTodoList} from "./empty-todo-list";
import {TodoList} from "./todo-list";

const VisibleTodos = ({activeFilter, todos, onCompleteTodo}) => {

    const filterTodos = (todos, filter) => {
        switch (filter) {
            case FilterTypes.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed);
            case FilterTypes.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    };

    let filteredTodos = filterTodos(todos, activeFilter);
    if (filteredTodos.length === 0) {
        return <EmptyTodoList filter={activeFilter}/>
    } else {
        return <TodoList todos={filteredTodos} onCompleteTodo={onCompleteTodo}/>
    }
};

// maps redux state to components props
const mapStateToProps = (state) => ({
    todos: state.todos,
    activeFilter: state.activeFilter
});

// maps components behaviour to dispatched actions
const mapDispatchToProps = (dispatch) => ({
    onCompleteTodo(id) {
        dispatch(completeTodoAction(id))
    }
});

// container component (it is concerned about behaviour)
export const VisibleTodosContainer = connect(mapStateToProps, mapDispatchToProps)(VisibleTodos);
