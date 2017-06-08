import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import "./App.css";




export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavMenu />
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>}/>
                    <Route path="/about" render={() => <h1>About</h1>}/>
                    <Route path="/person/:personId(\d+)/contact" component={PersonContact}/>
                    <Route path="/custom/:page" component={CustomPage}/>
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
            </div>

        </BrowserRouter>
    );
};

//NOTE: query parameters need to be passed on the search part of the to object so that we have a match
const NavMenu = () => {
    const active = {backgroundColor: 'lightblue'};
    return (
        <nav>
            <nav>
                <NavLink exact activeStyle={active} to="/">Home</NavLink>
                <NavLink activeStyle={active} to="/about">About</NavLink>
                <NavLink activeStyle={active} to={{pathname: '/person/123/contact', search: 'imgSize=full&type=bw'}}>Contact</NavLink>
                <NavLink activeStyle={active} to="/custom/guitar-page">Custom page</NavLink>
                <NavLink activeStyle={active} to="/foo/bar">Not Found</NavLink>
            </nav>
        </nav>
    );
};

const PersonContact = (props) => {
    let {location, match} = props;
    let personId = match.params.personId;
    let urlSearch = new URLSearchParams(location.search);
    return (
        <div>
            <h1>Contact</h1>
            <p>Current Url: {match.url}</p>
            <p>Person Id: {personId}</p>
            <p>query: {location.search}</p>
            <p>imgSize query param: {urlSearch.get('imgSize')}</p>
            <p>type query param: {urlSearch.get('type')}</p>
        </div>
    );
};

const CustomPage = ({match}) => {
    let page = match.params.page;
    return (
        <div>
            <h1>Custom Page</h1>
            <p>Page: {page}</p>
        </div>
    );
};

const Menu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to={{pathname: '/person/123/contact', search: 'imgSize=full&type=bw'}}>Contact</Link>
            <Link to="/custom/guitar-page">Custom page</Link>
            <Link to="/foo/bar">Not Found</Link>
        </nav>
    );
};
