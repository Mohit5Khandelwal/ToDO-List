import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../../UI/Button/Button';

function CourseInput(props)
{

    const[ enteredValue, setEnteredValue ] = useState( '' );
    const[ isValid , setIsValid ] = useState( false );

    const goalInputChangeHandler = (event) => {

        if( event.target.value.trim().length > 0 )
        {
            setIsValid( false );
        }

        setEnteredValue( event.target.value );

    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if( enteredValue.trim().length === 0 )
        {
            setIsValid( true );
            return;
        }

        props.onAddGoal( enteredValue );
        
    }

    return (

        <form onSubmit = { formSubmitHandler }>
            
            <div className = { `form-control Y${ isValid ? 'invalid' : '' } ` }>
                {/* Dynamically changes it's colour  */}
                <label> Course Goal </label>
                <input type = 'text' onChange={ goalInputChangeHandler } />
            </div>

            {/* <button type = 'submit'> Add Goal </button> */}
            <Button type = "submit" > Add Goal </Button>

        </form>

    );

}

export default CourseInput;