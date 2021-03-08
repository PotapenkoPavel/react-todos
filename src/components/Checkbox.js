import React from 'react'
import './../checkbox.css'
import {useDispatch} from "react-redux";
import {changeTodoType} from "../store/actionCreators/todos";

function Checkbox({ id, checked }) {
    const dispatch = useDispatch()

    function onChangeHandler(e) {
        const postId = e.target.id
        const postType = e.target.checked ? 'completed' : 'active'
        dispatch(changeTodoType({postId, postType}))
    }
    return (
        <div className='checkbox'>
            <input type="checkbox" id={id} checked={checked} className='checkbox__input' onChange={onChangeHandler} />
            <label htmlFor={id} className='checkbox__label'></label>
        </div>
    )
}

export default Checkbox