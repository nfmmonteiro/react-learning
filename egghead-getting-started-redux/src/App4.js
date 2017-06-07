import React from "react";
import ReactDOM from "react-dom";

export class App extends React.Component {

    constructor() {
        super();

        this.state = { increasing: false };

        this.update = this.update.bind(this);
    }

    update() {
        ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('root'));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }
    render() {
        console.log('App.render, increasing', this.state.increasing);
        return (
            <div>
                <button onClick={this.update}>{this.props.val}</button>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component was updated', prevProps.val);
    }
}

App.defaultProps = {
    val: 0
};

export default App;