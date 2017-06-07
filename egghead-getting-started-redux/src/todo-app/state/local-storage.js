// local storage browser api

export const loadState = () => {
    let state = undefined;
    try {
        const serialisedState = localStorage.getItem('state');
        if (serialisedState) {
            state = JSON.parse(serialisedState);
        }
    } catch (error) {
        console.error('error loading state', error);
    }
    console.log('loaded app state', state);
    return state;
};

export const saveState = (state) => {
    console.log('persisting app state', state);
    try {
        if (state) {
            const serialisedState = JSON.stringify(state);
            localStorage.setItem('state', serialisedState);
        }
    } catch (error) {
        console.error('error saving state', error);
    }
};