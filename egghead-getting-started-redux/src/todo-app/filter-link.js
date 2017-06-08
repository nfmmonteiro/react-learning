import React from "react";
import {Link} from "react-router-dom";

export const FilterLink = ({active, filter, children}) => {
    const style = active ? {backgroundColor: 'lightblue'} : {};
    return (
        <Link style={style} to={filter}>{children}</Link>
    );
};