import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {completeTodoAction} from "./state/action-creators";
import {FilterTypes} from "./state/filter-types";
import {EmptyTodoList} from "./empty-todo-list";
import {TodoList} from "./todo-list";

const VisibleTodos = ({filter, todos, onCompleteTodo}) => {

    const filterTodos = (todos, filter) => {
        switch (filter) {
            case FilterTypes.COMPLETED:
                return todos.filter(todo => todo.completed);
            case FilterTypes.ACTIVE:
                return todos.filter(todo => !todo.completed);
            case FilterTypes.ALL:
                return todos;
            default:
                throw new Error(`Unknown filter: ${filter}!`);
        }
    };

    let filteredTodos = filterTodos(todos, filter);
    if (filteredTodos.length === 0) {
        return <EmptyTodoList filter={filter}/>
    } else {
        return <TodoList todos={filteredTodos} onCompleteTodo={onCompleteTodo}/>
    }
};

// maps redux state to components props
const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    filter: (ownProps.match.params.filter || FilterTypes.ALL)
});

// maps components behaviour to dispatched actions
const mapDispatchToProps = (dispatch) => ({
    onCompleteTodo(id) {
        dispatch(completeTodoAction(id))
    }
});

// container component (it is concerned about behaviour)
export const VisibleTodosContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(VisibleTodos));
