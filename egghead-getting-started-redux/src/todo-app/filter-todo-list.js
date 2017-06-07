import React from "react";
import {FilterTypes} from "./state/filter-types";
import {FilterLinkContainer} from "./filter-list.container";

// presentational component (does not care about behaviour)
export const FilterTodoList = () => {

    const filterLinks = [
        {type: FilterTypes.SHOW_ALL, text: 'All'},
        {type: FilterTypes.SHOW_ACTIVE, text: 'Active'},
        {type: FilterTypes.SHOW_COMPLETED, text: 'Completed'}
    ];

    return (
        <span className='filter'>
            {
                filterLinks.map(link => {
                    return (
                        <FilterLinkContainer key={link.type}
                                             filter={link.type}>
                            {link.text}
                        </FilterLinkContainer>
                    );
                })
            }
        </span>
    );
};