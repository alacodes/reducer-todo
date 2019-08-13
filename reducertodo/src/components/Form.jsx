import React, {useReducer, useState} from 'react';
import {reducer, initialState} from '../reducer/reducer';
import TodoList from '../components/TodoList';

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [currentInput, setCurrentInput] = useState('')

    const handleChange = event => {
        const setCurrentInput(event.target.value)
    }

    const submitHandle = event => {
        event.preventDefault() 
        dispatch({type: 'ADD', todo: {item: currentInput, id: Date.now(), completed: false}})
        setCurrentInput('')
        console.log('state from submit', state)
    }

    const clearHandle = event => {
        event.preventDefault()
        dispatch({type: 'CLEAR'})
    }

    return (
        <>
            <form>
                <input type='text' value={currentInput} onChange={handleChange} />
                <button onClick={submitHandle}>Add Task</button>
                <button onClick={clearHandle}>Clear Task</button>
            </form>
            <TodoList todos={state} dispatch={dispatch}
        </>
    )
}

export default Form