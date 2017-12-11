import  React from 'react';
import  {partial} from '../../lib/utils'

export const TodoItem = (props) => {
    // viejo const handleToggle = ()=> props.handleToggle.bind(null, props.id)
    const handleToggle = partial(props.handleToggle, props.id)    
    const handleRemove = partial(props.handleRemove, props.id)    

    return (
        <li className="item-list">
            <a href="" className="delete-item" onClick={handleRemove}>X</a>
            <input onChange={handleToggle} id="pepe"
                   type="checkbox" 
                   checked={props.isComplete}/>
                   <span>{props.name}</span>            
        </li>
    )
};

TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
};
