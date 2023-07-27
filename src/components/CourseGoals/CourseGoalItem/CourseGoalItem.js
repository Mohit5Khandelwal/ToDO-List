import React from 'react';
import './CourseGoalItem.css';

function CourseGoalItem(props) {

    function deleteHandler( ) {

        console.log( 'Item deleted' );
        props.onDelete( props.id );
    }

    return ( 

        <li className = "goal-item" onClick = { deleteHandler } >
            { props.data }
        </li>

    );
}

export default CourseGoalItem;