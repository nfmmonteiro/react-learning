import React from "react";

export class App extends React.Component {

    constructor() {
        super();
        this.state = {value: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({value: this.state.value + 1});
    }

    componentWillMount() {
        console.log('App.componentWillMount');
        this.setState({multiplier: 1});
    }

    render() {
        let {value, multiplier} = this.state;
        let renderValue = value * multiplier;
        console.log('App.render, value', renderValue);
        return (
            <div>
                <button onClick={this.update}>{renderValue}</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('App.componentDidMount');
        this.interval = setInterval(this.update, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            console.log('clearing the interval', this.interval);
            clearInterval(this.interval);
        }
        console.log('App.componentWillUnmount');
    }
}

class Wrapper extends React.Component {

    constructor() {
        super();
        this.state = {app: true};

        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }

    mount() {
        this.setState({app: true});
    }

    unmount() {
        this.setState({app: false});
    }

    render() {
        let app = this.state.app ? <App /> : null;
        return (
            <div>
                {app}
                <button onClick={this.mount}>mount app</button>
                <button onClick={this.unmount}>unmount app</button>
            </div>
        );
    }
}

export default Wrapper;