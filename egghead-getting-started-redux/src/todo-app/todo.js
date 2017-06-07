import React from "react";

export const Todo = ({id, text, completed, onClick}) => {
    const liStyle = {textDecoration: completed ? 'line-through' : 'none'};
    return (
        <li style={liStyle}
            onClick={() => {
                onClick(id)
            }}>
            {text}
        </li>
    );
};