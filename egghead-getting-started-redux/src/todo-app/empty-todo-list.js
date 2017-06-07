import React from "react";
import {FilterTypes} from "./state/filter-types";

const labels = {
    [FilterTypes.SHOW_COMPLETED]: 'completed',
    [FilterTypes.SHOW_ACTIVE]: 'active',
    [FilterTypes.SHOW_ALL]: ''
};

export const EmptyTodoList = ({filter}) => {
    const label = labels[filter];
    return (
        <p>There are no {label} todo items!</p>
    );
};