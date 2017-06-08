import React from "react";
import {connect} from "react-redux";
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
            default:
                return todos;
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
    filter: ownProps.activeFilter
});

// maps components behaviour to dispatched actions
const mapDispatchToProps = (dispatch) => ({
    onCompleteTodo(id) {
        dispatch(completeTodoAction(id))
    }
});

// container component (it is concerned about behaviour)
export const VisibleTodosContainer = connect(mapStateToProps, mapDispatchToProps)(VisibleTodos);
