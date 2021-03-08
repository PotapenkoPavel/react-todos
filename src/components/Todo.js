import React from 'react'
import Checkbox from "./Checkbox";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../store/actionCreators/todos";

function Todo({ todo }) {
    const dispatch = useDispatch()
    const completed = todo.type === 'completed' ? true : false

    function onClickHandler() {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <li className={`todo ${todo.type}`}>
            <div className='todo-block'>
                <Checkbox id={todo.id} checked={completed}/>
                <p className={`todo-block__text ${completed ? 'todo-block__text_completed' : ''}`}>{todo.text}</p>
                <button className='todo-block__button' onClick={onClickHandler}>&#10006;</button>
            </div>
        </li>
    )
}

export default Todo