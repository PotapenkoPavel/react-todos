import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {collapseTodos, createTodo} from "../store/actionCreators/todos";

function Header() {
    const [todoText, setTodoText] = useState('')
    const todoId = useRef(0)
    const collapse = useSelector(state => state.todos.collapseTodos)
    const todosLength = useSelector(state => state.todos.all.length)
    const dispatch = useDispatch()

    function onKeyPressHandler(e) {
        if (e.key === 'Enter') {
            if (todoText.trim() === '') return

            const todo = {
                text: todoText,
                id: todoId.current + 1,
                type: 'active'
            }

            dispatch(createTodo(todo))
            todoId.current += 1
            setTodoText('')
        }
        return
    }

    function onChangeHandler(e) {
        setTodoText(e.target.value)
    }

    function onClickHandler() {
        dispatch(collapseTodos())
    }

    const span = <span className={`collapse-todos ${collapse ? 'collapse-todos_show' : 'collapse-todos_hide'}`} onClick={onClickHandler}></span>

    return (
        <header className='header'>
            <h1 className='title'>todos</h1>
            {todosLength ? span : null}
            <input className='new-todo' type='text' value={todoText} placeholder='What needs to be done?' onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
        </header>
    )
}

export default Header