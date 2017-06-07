import React from "react";
import PropTypes from "prop-types";

export class App extends React.Component {

    constructor() {
        super();

        this.state = {items: [], filter: ''};

        this.updateFilter = this.updateFilter.bind(this);
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then( data => this.setState({ items: data.results}));
    }

    updateFilter(event) {
        this.setState({filter: event.target.value});
    }

    render() {
        console.log('App.render');

        let { items, filter } = this.state;
        if (filter) {
            items = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        }
        return (
            <div>
                <label>Filter: <input onChange={this.updateFilter} value={filter} /></label>
                <div>
                    {items.map(item => <Character key={item.name} item={item} /> )}
                </div>
            </div>
        );
    }

}

const Character = (props) => <h4>{props.item.name}</h4>;

export default App;