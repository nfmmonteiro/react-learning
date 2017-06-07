import React from "react";

// both AppFunctionComponent and AppClassComponent are dumb components (they are not aware of app state tree - they just receive props)

const AppFunctionComponent = ({counter, increment, decrement}) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>Value: {counter}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

class AppClassComponent extends React.Component {

    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps) {
        let reRender = this.props.counter !== nextProps.counter;
        console.log('App.shouldComponentUpdate:', reRender);
        return reRender;
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>Value: {this.props.counter}</p>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
            </div>
        );
    }
}

export default AppClassComponent;