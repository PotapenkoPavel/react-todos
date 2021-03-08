import React from 'react'
import TodosList from "./TodosList";
import {useSelector} from "react-redux";

function Main() {
    const collapseTodos = useSelector(state => state.todos.collapseTodos)

    return (
        <section className='main' hidden={collapseTodos}>
            <TodosList/>
        </section>
    )
}

export default Main