import React from "react";
import {FilterTypes} from "./state/filter-types";
import {FilterLink} from "./filter-link";

const FILTER_LINKS = [
    {type: FilterTypes.ALL, text: 'All'},
    {type: FilterTypes.ACTIVE, text: 'Active'},
    {type: FilterTypes.COMPLETED, text: 'Completed'}
];

// presentational component (does not care about behaviour)
export const FilterLinkList = ({activeFilter}) => {
    activeFilter = activeFilter || FilterTypes.ALL;
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