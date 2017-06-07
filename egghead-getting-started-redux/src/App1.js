import React from "react";
import PropTypes from "prop-types";
import "./App.css";


// ways of creating react components
//  - class (extending React.Component)
//  - stateless function component

// primary difference between class component and stateless function component:
//  - class component can have state and stateless function component cannot have state


// PROPS is a way to pass data into our components


// class component
export class ClassComponent extends React.Component {

    constructor() {
        super(); // gives the context to the 'this' keyword within the component
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.changeName = this.changeName.bind(this);

        this.state = {counter: 0, name: ''};
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    increment(event) {
        this.updateCounter(this.state.counter + 1);
    }

    decrement(event) {
        this.updateCounter(this.state.counter - 1);
    }

    reset(event) {
        this.updateCounter(0);
    }

    updateCounter(counter) {
        this.setState({counter: counter});
    }

    render() {

        // destructuring the props object
        let {text, level, category} = this.props;

        // JSX
        return (
            <div>
                <h1 className="container">Hello World! (class)</h1>
                <b>{text}</b>
                {typeof level !== 'undefined' && <p>Level: {level}</p>}
                <p>Category: {category}</p>
                <Counter counter={this.state.counter}
                         increment={this.increment}
                         decrement={this.decrement}
                         reset={this.reset}
                />
                <NameWidget name={this.state.name} updateName={this.changeName} />
                <p>{this.state.name}</p>
            </div>
        );


        // JS (element, props, children)
        //return React.createElement('h1', { className: 'container' }, 'Hello World! (class)');
    }
}

ClassComponent.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.number,
    category: PropTypes.oneOf(['CatA', 'CatB']).isRequired
};

ClassComponent.defaultProps = {
    text: 'default text',
    level: 1,
    category: 'CatA'
};

const Counter = (props) => {
    return (
        <div>
            <h2>Counter</h2>
            <p>Value: {props.counter}</p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
};



const NameWidget = (props) => {
    return (
        <div>
            <h2>Your name widget</h2>
            <input type="text" onChange={props.updateName} value={props.name}/>
        </div>
    );
};


// stateless function component
// {text} is destructuring the component's props
export const FunctionComponent = ({text}) => {
    return (
        <div>
            <h1 className="container">Hello World! (function)</h1>
            <b>{text}</b>
        </div>
    );
};


export default ClassComponent;