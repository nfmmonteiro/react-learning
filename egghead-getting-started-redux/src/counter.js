import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import deepFreeze from 'deep-freeze';

import CounterComponent from "./CounterComponent";

const counterReducer = (state = deepFreeze({counter: 0}), action) => {
    switch (action.type) {
        case 'INCREMENT':
            return deepFreeze({counter: state.counter + 1});
        case 'DECREMENT':
            return deepFreeze({counter: state.counter - 1});
        default:
            return state;
    }
};

const store = createStore(counterReducer);

const increment = () => {
    store.dispatch({
        type: 'INCREMENT'
    });
};

const decrement = () => {
    store.dispatch({
        type: 'DECREMENT'
    });
};

const render = () => {
    ReactDOM.render(
        <CounterComponent counter={store.getState().counter} increment={increment} decrement={decrement}/>,
        document.getElementById('root')
    );
};

render();

store.subscribe(() => {
    console.log('state was updated, current state', store.getState());
    render();
});