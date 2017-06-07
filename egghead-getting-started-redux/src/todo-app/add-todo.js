import React from "react";

export const AddTodo = ({onAddTodo}) => {

    let inputEl;
    const handleOnKeyUp = (event) => {
        if (event.keyCode === 13) {
            onAddTodo(inputEl.value);
            inputEl.value = '';
        }
    };

    return (
        <input ref={input => inputEl = input} onKeyUp={handleOnKeyUp}/>
    );
};
