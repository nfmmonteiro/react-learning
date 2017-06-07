import {connect} from "react-redux";
import {addTodoAction} from "./state/action-creators";
import {AddTodo} from "./add-todo";

const mapDispatchToProps = (dispatch) => ({
    onAddTodo(text) {
        dispatch(addTodoAction(text))
    }
});

// container component (it is concerned about behaviour)
export const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo); // null on mapStateToProps tells connect that there is no need to subscribe to store changes because this component does not need to be updated when the store changes
