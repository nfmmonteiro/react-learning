import React from "react";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            number: 0,
            firstname: 'Nuno',
            lastname: 'Monteiro'
        };
    }

    handleClick(event) {
        this.setState({number: this.state.number + 1});
    }

    handleChange(event) {
        // this.setState({
        //     firstname: this.firstnameEl.value,
        //     lastname: this.lastnameEl.value
        // });

        this.setState({
            firstname: this.firstnameEl.refs.input.value,
            lastname: this.lastnameEl.refs.input.value
        });
    }

    render() {
        let {number, firstname, lastname} = this.state;
        return (
            <div>
                <CustomButton click={this.handleClick}>I <Heart /> React</CustomButton>
                <p>{number}</p>

                {/*<input type="text" ref={ input => this.firstnameEl = input } value={firstname} onChange={this.handleChange}/>*/}
                {/*<input type="text" ref={ input => this.lastnameEl = input } value={lastname} onChange={this.handleChange}/>*/}

                <NameInput ref={component => this.firstnameEl = component } value={firstname}
                           update={this.handleChange}/>
                <NameInput ref={component => this.lastnameEl = component } value={lastname} update={this.handleChange}/>

                <p>First name: {firstname}</p>
                <p>Last name: {lastname}</p>

            </div>
        );
    }
}

const CustomButton = (props) => <button onClick={props.click}>{props.children}</button>;

const Heart = () => <span>&hearts;</span>;

class NameInput extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <input ref="input" type="text" value={this.props.value} onChange={this.props.update}/>
        )
    }
}


