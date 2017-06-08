import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";

const AboutHeader = () => {
    return (
        <Route path="/about" render={() => {
            return <div className="header"><h1>About header</h1></div>;
        }}/>
    );
};
const AboutContent = () => {
    return (
        <Route path="/about" render={() => {
            return <div className="body"><h1>About content</h1></div>
        }}/>);
};

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavMenu />
                <AboutHeader/>
                <AboutContent/>
            </div>
        </BrowserRouter>
    );
};