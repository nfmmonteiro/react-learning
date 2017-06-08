export class ActionTypes {
    static ADD_TODO = 'ADD_TODO';
    static COMPLETE_TODO = 'COMPLETE_TODO';
}

/** action creators **/

export const addTodoAction = (text) => ({
    type: ActionTypes.ADD_TODO,
    text
});

export const completeTodoAction = (id) => ({
    type: ActionTypes.COMPLETE_TODO,
    id
});
