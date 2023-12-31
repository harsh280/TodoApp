import React, {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {getAllTodos} from '../redux/actions/index';
import Todo from './Todo';

const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

useEffect(() => {
    dispatch(getAllTodos());
},[])

    return ( 
        <article>
            <ul>
                {
                   todos.map(todo => {
                       return <Todo key = {todo._id} todo={todo}/> 
                   })
                }
            </ul>
        </article>
    );
}

export default Todos;