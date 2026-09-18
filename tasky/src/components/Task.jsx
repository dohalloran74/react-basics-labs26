import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            // The priority prop is displayed in the task card, allowing users to see the priority level of each task.
            <p>Priority: {props.priority}</p>
            
        </div>
    )
}

export default Task;
