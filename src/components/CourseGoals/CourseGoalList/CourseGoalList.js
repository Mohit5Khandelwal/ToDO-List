import React from "react";
import './CourseGoalList.css';
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

function CourseGoalList( props ) {

    return ( 

        <ul className = "goal-list">

            { props.content.map( ( items ) => (
                
                <CourseGoalItem data = { items.text } onDelete = { props.onDeleteItem } id = { items.id } />

            ))}

        </ul>

    );

}

export default CourseGoalList;