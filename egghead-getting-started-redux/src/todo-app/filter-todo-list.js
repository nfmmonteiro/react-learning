import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {FilterTypes} from "./state/filter-types";
import {FilterLink} from "./filter-link";

const FILTER_LINKS = [
    {type: FilterTypes.ALL, text: 'All'},
    {type: FilterTypes.ACTIVE, text: 'Active'},
    {type: FilterTypes.COMPLETED, text: 'Completed'}
];

// presentational component (does not care about behaviour)
let FilterLinkList = ({match}) => {
    const activeFilter = match.params.filter || FilterTypes.ALL;
    return (
        <span className='filter'>
            {
                FILTER_LINKS.map(link => {
                    const active = (activeFilter === link.type);
                    return <FilterLink key={link.type} active={active} filter={link.type}>{link.text}</FilterLink>
                })
            }
        </span>
    );
};

FilterLinkList = withRouter(connect()(FilterLinkList));

export {FilterLinkList};