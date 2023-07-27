import './App.css';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import React , { useState } from 'react';

function App() {


  const demoContent = [
      { text: 'Finish this course' , id: '1' },
      { text: 'Go for Run My Boy' , id: '2' },

  ];

  const [ courseGoal, setCourseGoal ] = useState( demoContent );

  const addGoalHandler = (enteredText) => {

    // convert this into an object 
    let new_data = { text: enteredText , id: Math.random().toString() };
    setCourseGoal( [ new_data , ...courseGoal ] );

  }

  const deleteItemHandler = (item_id) => {
    // Delete the clicked items 
    const filterData = courseGoal.filter( (items) => items.id !== item_id );
    setCourseGoal( filterData );
  }

  let content = (
    <p style = {{ textAlign: 'center' , color: 'whitesmoke' , fontSize: '25px' , fontWeight: 'bolder' }} > No content is available to show </p>

  );

  if( courseGoal.length > 0 )
  {
    content = (
      <CourseGoalList content = { courseGoal } onDeleteItem = { deleteItemHandler } />
    );
  }


  return (
    <div>

      <header>
        <h1> Todo-List </h1>
      </header>
      
      <section id = "goal-form">

        {/* Adding a new goal  */}
        <CourseInput onAddGoal = { addGoalHandler } />

      </section>

      <section id = "goals">

        {/* Declare a list to render all elements  */}
        { content }

      </section>


    </div>
  );
}

export default App;
