import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewTodo} from '../redux/actions/index.js'

const Input = () => {

    const[text,setText] = useState("")
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
    console.log(text);
    return (
        <form className = "form" onSubmit = {onFormSubmit}>
            <input value = {text} placeholder = "Enter your task.." className='input' onChange = {onInputChange}/>
        </form>
    )
}
export default Input;