import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeShowTodosType} from "../store/actionCreators/todos";

function Footer() {
    const showFooter = useSelector(state => state.todos.all)
    const showTodosType = useSelector(state => state.todos.showTodosType)
    const todoCount = useSelector(state => state.todos.active.length)
    const dispatch = useDispatch()

    function onClickHandler(e) {
        e.preventDefault()

        dispatch(changeShowTodosType(e.target.name))
    }

    if (!showFooter.length) return null

    const todoCountText = `${todoCount ? `${todoCount} ${todoCount === 1 ? 'item' : 'items'} left` : 'All tasks completed'}`

    return(
        <footer className='footer'>
            <span className='todo-count'>{todoCountText}</span>
            <ul className='filter'>
                <li className={`filter__item ${showTodosType === 'all' ? 'filter__item_active' : ''}`}>
                    <a href="https://google.com" className='filter__link' name='all' onClick={onClickHandler}>All</a>
                </li>
                <li className={`filter__item ${showTodosType === 'active' ? 'filter__item_active' : ''}`}>
                    <a href="https://google.com" className='filter__link' name='active' onClick={onClickHandler}>Active</a>
                </li>
                <li className={`filter__item ${showTodosType === 'completed' ? 'filter__item_active' : ''}`}>
                    <a href="https://google.com" className='filter__link' name='completed' onClick={onClickHandler}>Completed</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer