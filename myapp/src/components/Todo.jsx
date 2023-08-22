import React from 'react';
import { toggleTodo , updateTodo,deleteTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import {useState} from 'react';


const Todo = ({todo}) => {

    const dispatch = useDispatch();
    const[editing,setEditing] = useState(false);
    const[text,setText] = useState(todo.data);

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);
        dispatch(updateTodo(todo._id,text));
    }

    return (
        <li className='task' 
        onClick = {() => dispatch(toggleTodo(todo._id))}
        style = {{
            textDecoration : todo.done ? 'line-through' : ''
        }}
        >
            <span style = {{display : editing ?'none' : ''}}>{todo.data}</span>

            <form style = {{display : editing ? 'inline' : 'none'}} onSubmit = {onFormSubmit}>
                <input type = 'text' value = {text} onChange = {(e) => setText(e.target.value)} />
            </form>

            <span className='icon' onClick = {() => setEditing(prevState => !prevState)}>
                <button className='bt-e'>Edit</button>
            </span>
            <span className='icon' onClick = {() => dispatch(deleteTodo(todo._id))}>
                <button className='bt-d'>Delete</button>
            </span>
        </li>
    )
}

export default Todo;