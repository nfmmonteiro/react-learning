import React from "react";
import {FilterTypes} from "./state/filter-types";
import {FilterLinkContainer} from "./filter-list.container";

const FILTER_LINKS = [
    {type: FilterTypes.SHOW_ALL, text: 'All'},
    {type: FilterTypes.SHOW_ACTIVE, text: 'Active'},
    {type: FilterTypes.SHOW_COMPLETED, text: 'Completed'}
];

// presentational component (does not care about behaviour)
export const FilterLinkList = () => {

    return (
        <span className='filter'>
            {FILTER_LINKS.map(link => <FilterLinkContainer key={link.type}
                                                           filter={link.type}> {link.text}</FilterLinkContainer>) }
        </span>
    );
};