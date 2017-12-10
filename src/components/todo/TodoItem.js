import  React from 'react';

export const TodoItem = (props) => {
    
    const handleToggleTodDo = (evt) => {

    }

    return (
        <li>
            <input onClick={handleToggleTodDo.bind(this)} type="checkbox" defaultChecked={props.isComplete}/> <span>{props.name}</span>
        </li>
    )
};

TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
};
