import {createStore} from "redux";
import {throttle} from "lodash-es";
import {reducers} from "./reducers";
import {loadState, saveState} from "./local-storage";

const THROTTLE_WAIT = 2500;

export const configureStore = () => {

    const persistedState = loadState();
    const store = createStore(reducers, persistedState);

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, THROTTLE_WAIT));

    store.subscribe(() => {
        console.log('store was updated', store.getState());
    });

    return store;
};