import React from "react";

// presentational component (just concert about displaying data, the appearance of the link)
export const Link = ({active, onLinkClick, children}) => {

    let onClickFilter = (event) => {
        event.preventDefault();
        onLinkClick();
    };

    if (active) {
        return <span style={{backgroundColor: 'lightblue'}}>{children}</span>;
    } else {
        return <a href='' onClick={onClickFilter}>{children}</a>;
    }
};
