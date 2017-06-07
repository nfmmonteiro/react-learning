import {createStore} from "redux";
import {reducers} from "./reducers";

const createTodoListStore = () => {
    console.log('The store is about to be created! Do you see this message logged twice? If yes, dude you have got a problem!');
    return createStore(reducers);
};

export const store = createTodoListStore();
