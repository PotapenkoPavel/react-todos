import React from 'react'
import Todo from "./Todo";
import {useSelector} from "react-redux";

function TodosList() {
    const todosType = useSelector(state => state.todos.showTodosType)
    const todos = useSelector(state => state.todos[todosType])

    return (
        <ul className='todos-list'>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </ul>
    )
}

export default TodosList