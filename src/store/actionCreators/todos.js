import {CHANGE_SHOW_TODOS_TYPE, CHANGE_TODO_TYPE, COLLAPSE_TODOS, CREATE_TODO, DELETE_TODO} from "../actions/todos";

export function createTodo(todo) {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}

export function changeShowTodosType(type) {
    return {
        type: CHANGE_SHOW_TODOS_TYPE,
        payload: type
    }
}

export function changeTodoType({postId, postType}) {
    return {
        type: CHANGE_TODO_TYPE,
        payload: {
            postId,
            postType
        }
    }
}

export function deleteTodo(postId){
    return {
        type: DELETE_TODO,
        payload: postId
    }
}

export function collapseTodos() {
    return {
        type: COLLAPSE_TODOS
    }
}