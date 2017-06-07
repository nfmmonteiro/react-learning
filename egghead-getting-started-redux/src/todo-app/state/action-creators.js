export class ActionTypes {
    static ADD_TODO = 'ADD_TODO';
    static COMPLETE_TODO = 'COMPLETE_TODO';
    static CHANGE_FILTER = 'CHANGE_FILTER';
}

/** action creators **/

export const addTodoAction = (text) => {
    return {
        type: ActionTypes.ADD_TODO,
        text
    };
};

export const completeTodoAction = (id) => {
    return {
        type: ActionTypes.COMPLETE_TODO,
        id
    };
};

export const changeFilterAction = (filter) => {
    return {
        type: ActionTypes.CHANGE_FILTER,
        filter
    };
};
