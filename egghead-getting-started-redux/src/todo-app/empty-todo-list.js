import React from "react";
import {FilterTypes} from "./state/filter-types";

const labels = {
    [FilterTypes.COMPLETED]: 'completed',
    [FilterTypes.ACTIVE]: 'active',
    [FilterTypes.ALL]: ''
};

export const EmptyTodoList = ({filter}) => {
    const label = labels[filter];
    return (
        <p>There are no {label} todo items!</p>
    );
};