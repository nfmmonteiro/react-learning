import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./App.css";

const Home = () => <h1>Home</h1>;
const Menu = ({match}) => {
    return (
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to={`${match.url}/food`}>Food</Link>
                <Link to={`${match.url}/drinks`}>Drinks</Link>
                <Link to={`${match.url}/sides`}>Sides</Link>
            </nav>
            <Route path={`${match.url}/:subpage`} component={MenuSubPage}/>
        </div>
    );
};
const MenuSubPage = ({match}) => <h2>{match.params.subpage} sub page</h2>;

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                </nav>
                <Route exact path="/" component={Home}/>
                <Route path="/menu" component={Menu}/>
            </div>
        </BrowserRouter>
    );
};